package http

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/openocta/openocta/pkg/employees"
	"github.com/openocta/openocta/pkg/installmetadata"
)

const siteAPIEnvKey = "OPENOCTA_SITE_API_BASE_URL"

// remoteIDFromItem 从员工 item 的 id 提取远程 id（number 转 string）
func remoteIDFromItem(id interface{}) string {
	if id == nil {
		return ""
	}
	switch v := id.(type) {
	case float64:
		return strconv.FormatInt(int64(v), 10)
	case int:
		return strconv.Itoa(v)
	case string:
		if strings.HasPrefix(v, "local:") {
			return ""
		}
		return v
	default:
		return fmt.Sprint(id)
	}
}

func setSiteProxyCORSHeaders(w http.ResponseWriter) {
	// Keep it permissive: Control UI may run on a different origin during dev.
	// We don't use credentials here, so "*" is safe and avoids origin bookkeeping.
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization")
}

type siteProxyError struct {
	Error    string `json:"error"`
	Detail   string `json:"detail,omitempty"`
	Upstream string `json:"upstream,omitempty"`
}

func writeSiteProxyFailure(w http.ResponseWriter, status int, detail string, upstream string) {
	setSiteProxyCORSHeaders(w)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(siteProxyError{
		Error:    "连接 openocta 官网失败",
		Detail:   strings.TrimSpace(detail),
		Upstream: strings.TrimSpace(upstream),
	})
}

func (s *Server) siteAPIBaseURL() string {
	raw := strings.TrimSpace(os.Getenv(siteAPIEnvKey))
	if raw == "" {
		// Back-compat / dev default: local swagger host.
		return "http://localhost:9889"
	}
	return strings.TrimRight(raw, "/")
}

func (s *Server) proxySiteGET(w http.ResponseWriter, r *http.Request, upstreamPath string) {
	setSiteProxyCORSHeaders(w)
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}

	// Preserve query string from incoming request.
	u.Path = strings.TrimRight(u.Path, "/") + upstreamPath
	u.RawQuery = r.URL.RawQuery

	req, err := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "proxy request build failed", u.String())
		return
	}
	req.Header.Set("Accept", "application/json")

	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()

	// Copy content-type (fallback to json).
	ct := res.Header.Get("Content-Type")
	if ct == "" {
		ct = "application/json; charset=utf-8"
	}
	w.Header().Set("Content-Type", ct)
	w.WriteHeader(res.StatusCode)
	_, _ = io.Copy(w, res.Body)
}

// --- /api/v1 proxies ---

func (s *Server) handleSiteOptions(w http.ResponseWriter, r *http.Request) {
	setSiteProxyCORSHeaders(w)
	w.WriteHeader(http.StatusNoContent)
}

// employeeMarketItem 与官网 API 返回格式兼容，id 可为 number（远程）或 string（本地 "local:xxx"）
type employeeMarketItem struct {
	ID          interface{} `json:"id"` // number 或 "local:xxx"
	Name        string      `json:"name"`
	Description string      `json:"description,omitempty"`
	LogoURL     string      `json:"logo_url,omitempty"`
	Category    string      `json:"category,omitempty"`
	Status      string      `json:"status,omitempty"`
	Tags        string      `json:"tags,omitempty"`
	Enabled     *bool       `json:"enabled,omitempty"`   // 本地员工启用状态
	Installed   bool        `json:"installed,omitempty"` // 从远程安装后刷新仍可识别
	LocalID     string      `json:"localId,omitempty"`   // 安装后的本地 id
}

func (s *Server) handleSiteEmployees(w http.ResponseWriter, r *http.Request) {
	// /api/v1/employees：合并远程 + 本地自建员工
	setSiteProxyCORSHeaders(w)
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/employees"
	u.RawQuery = r.URL.RawQuery

	var remote []employeeMarketItem
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	if res, err := client.Do(req); err == nil {
		_ = json.NewDecoder(res.Body).Decode(&remote)
		res.Body.Close()
	}
	if remote == nil {
		remote = []employeeMarketItem{}
	}

	env := func(k string) string { return os.Getenv(k) }
	empInstallMap := installmetadata.EmployeeInstallMap(env)
	// 已由远程安装覆盖的本地 id 集合（以 id 为主去重，避免同一员工展示两次）
	installedLocalIDs := make(map[string]struct{})
	for i := range remote {
		rid := remoteIDFromItem(remote[i].ID)
		if rid != "" {
			if localID, ok := empInstallMap[rid]; ok {
				remote[i].Installed = true
				remote[i].LocalID = localID
				installedLocalIDs[localID] = struct{}{}
			}
		}
	}

	localList, _ := employees.ListSummaries(env)
	localItems := make([]employeeMarketItem, 0, len(localList))
	for _, e := range localList {
		if _, covered := installedLocalIDs[e.ID]; covered {
			continue // 该本地员工已由远程项展示（Installed+LocalID），不再重复
		}
		enabled := e.Enabled
		localItems = append(localItems, employeeMarketItem{
			ID:          "local:" + e.ID,
			Name:        e.Name,
			Description: e.Description,
			Category:    e.Type,
			Status:      "open",
			Enabled:     &enabled,
		})
	}

	merged := append(remote, localItems...)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(merged)
}

func (s *Server) handleSiteEmployeeDetail(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimSpace(r.PathValue("id"))
	if id == "" || strings.Contains(id, "/") {
		http.NotFound(w, r)
		return
	}
	if strings.HasPrefix(id, "local:") {
		localID := strings.TrimPrefix(id, "local:")
		env := func(k string) string { return os.Getenv(k) }
		m, err := employees.LoadManifest(localID, env)
		if err != nil || m == nil {
			http.NotFound(w, r)
			return
		}
		typeVal := strings.TrimSpace(m.Type)
		if typeVal == "" {
			typeVal = "其它"
		}
		enabled := m.Enabled
		detail := employeeMarketItem{
			ID:          id,
			Name:        m.Name,
			Description: m.Description,
			Category:    typeVal,
			Status:      "open",
			Enabled:     &enabled,
		}
		setSiteProxyCORSHeaders(w)
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(detail)
		return
	}
	// 远程员工详情：代理后合并 installed/localId
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/employees/" + url.PathEscape(id)
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	var detail employeeMarketItem
	if err := json.Unmarshal(body, &detail); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(res.StatusCode)
		_, _ = w.Write(body)
		return
	}
	env := func(k string) string { return os.Getenv(k) }
	empMap := installmetadata.EmployeeInstallMap(env)
	if localID, ok := empMap[id]; ok {
		detail.Installed = true
		detail.LocalID = localID
	}
	setSiteProxyCORSHeaders(w)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(detail)
}

func (s *Server) handleSiteEmployeeDownload(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimSpace(r.PathValue("id"))
	if id == "" || strings.Contains(id, "/") {
		http.NotFound(w, r)
		return
	}
	if strings.HasPrefix(id, "local:") {
		// 本地员工已存在，无需下载
		setSiteProxyCORSHeaders(w)
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(map[string]string{
			"error": "本地员工无需下载，已获取",
		})
		return
	}
	s.proxySiteGET(w, r, "/api/v1/employees/"+url.PathEscape(id)+"/download")
}

func (s *Server) handleSiteMcps(w http.ResponseWriter, r *http.Request) {
	// 代理 MCP 列表并合并 .install-metadata.json 中的已安装状态
	setSiteProxyCORSHeaders(w)
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/mcps"
	u.RawQuery = r.URL.RawQuery
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	var mcps []map[string]interface{}
	if err := json.Unmarshal(body, &mcps); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(res.StatusCode)
		_, _ = w.Write(body)
		return
	}
	env := func(k string) string { return os.Getenv(k) }
	mcpInstallMap := installmetadata.McpInstallMap(env)
	for i := range mcps {
		if id, ok := mcps[i]["id"]; ok {
			rid := fmt.Sprint(id)
			if serverKey, ok := mcpInstallMap[rid]; ok {
				mcps[i]["installed"] = true
				mcps[i]["serverKey"] = serverKey
			}
		}
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(mcps)
}

func (s *Server) handleSiteMcpDetail(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimSpace(r.PathValue("id"))
	if id == "" || strings.Contains(id, "/") {
		http.NotFound(w, r)
		return
	}
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/mcps/" + url.PathEscape(id)
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	var detail map[string]interface{}
	if err := json.Unmarshal(body, &detail); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(res.StatusCode)
		_, _ = w.Write(body)
		return
	}
	env := func(k string) string { return os.Getenv(k) }
	mcpMap := installmetadata.McpInstallMap(env)
	if serverKey, ok := mcpMap[id]; ok {
		detail["installed"] = true
		detail["serverKey"] = serverKey
	}
	setSiteProxyCORSHeaders(w)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(detail)
}

func (s *Server) handleSiteMcpDownload(w http.ResponseWriter, r *http.Request) {
	// /api/v1/mcps/{id}/download
	id := strings.TrimSpace(r.PathValue("id"))
	if id == "" || strings.Contains(id, "/") {
		http.NotFound(w, r)
		return
	}
	s.proxySiteGET(w, r, "/api/v1/mcps/"+url.PathEscape(id)+"/download")
}

func (s *Server) handleSiteSkills(w http.ResponseWriter, r *http.Request) {
	// 代理技能列表并合并 .install-metadata.json 中的已安装状态
	setSiteProxyCORSHeaders(w)
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/skills"
	u.RawQuery = r.URL.RawQuery
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	var skills []map[string]interface{}
	if err := json.Unmarshal(body, &skills); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(res.StatusCode)
		_, _ = w.Write(body)
		return
	}
	env := func(k string) string { return os.Getenv(k) }
	skillInstallSet := installmetadata.SkillInstallSet(env)
	for i := range skills {
		if folder, ok := skills[i]["folder"].(string); ok && folder != "" {
			if _, ok := skillInstallSet[folder]; ok {
				skills[i]["installed"] = true
			}
		}
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(skills)
}

func (s *Server) handleSiteSkillDetail(w http.ResponseWriter, r *http.Request) {
	folder := strings.TrimSpace(r.PathValue("folder"))
	if folder == "" || strings.Contains(folder, "/") {
		http.NotFound(w, r)
		return
	}
	base := s.siteAPIBaseURL()
	u, err := url.Parse(base)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, "invalid site api base url", base)
		return
	}
	u.Path = strings.TrimRight(u.Path, "/") + "/api/v1/skills/" + url.PathEscape(folder)
	req, _ := http.NewRequestWithContext(r.Context(), http.MethodGet, u.String(), nil)
	req.Header.Set("Accept", "application/json")
	client := &http.Client{Timeout: 8 * time.Second}
	res, err := client.Do(req)
	if err != nil {
		writeSiteProxyFailure(w, http.StatusBadGateway, err.Error(), u.String())
		return
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	var detail map[string]interface{}
	if err := json.Unmarshal(body, &detail); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(res.StatusCode)
		_, _ = w.Write(body)
		return
	}
	env := func(k string) string { return os.Getenv(k) }
	skillSet := installmetadata.SkillInstallSet(env)
	if _, ok := skillSet[folder]; ok {
		detail["installed"] = true
	}
	setSiteProxyCORSHeaders(w)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(detail)
}

func (s *Server) handleSiteSkillDownload(w http.ResponseWriter, r *http.Request) {
	// /api/v1/skills/{folder}/download
	folder := strings.TrimSpace(r.PathValue("folder"))
	if folder == "" || strings.Contains(folder, "/") {
		http.NotFound(w, r)
		return
	}
	s.proxySiteGET(w, r, "/api/v1/skills/"+url.PathEscape(folder)+"/download")
}

func (s *Server) handleSiteEduCategories(w http.ResponseWriter, r *http.Request) {
	s.proxySiteGET(w, r, "/api/v1/edu/categories")
}

func (s *Server) handleSiteEduLessonDetail(w http.ResponseWriter, r *http.Request) {
	// /api/v1/edu/lessons/{id}
	id := strings.TrimSpace(r.PathValue("id"))
	if id == "" || strings.Contains(id, "/") {
		http.NotFound(w, r)
		return
	}
	s.proxySiteGET(w, r, "/api/v1/edu/lessons/"+url.PathEscape(id))
}

// handleSiteUploads 代理官网的静态资源（如 logo），将 /api/v1/site/uploads/{path...} 转发到 {base}/uploads/{path}
func (s *Server) handleSiteUploads(w http.ResponseWriter, r *http.Request) {
	path := strings.TrimSpace(r.PathValue("path"))
	if path == "" || strings.Contains(path, "..") {
		http.NotFound(w, r)
		return
	}
	s.proxySiteGET(w, r, "/uploads/"+path)
}
