// Package handlers provides trace.list and trace.content for LLM trace viewing.
package handlers

import (
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"github.com/openocta/openocta/pkg/agent"
	"github.com/openocta/openocta/pkg/config"
	"github.com/openocta/openocta/pkg/gateway/protocol"
)

// TraceListEntry is one row in trace.list response.
type TraceListEntry struct {
	SessionKey string `json:"sessionKey"`
	SessionID  string `json:"sessionId"`
	UpdatedAt  *int64 `json:"updatedAt,omitempty"`
	File       string `json:"file"`               // path or "-" if not found
	FileSize   *int64 `json:"fileSize,omitempty"` // bytes, omit if unknown
}

// TraceListResult is the response for trace.list.
type TraceListResult struct {
	TraceDir string           `json:"traceDir"`
	Entries  []TraceListEntry `json:"entries"`
}

// traceSanitizeSessionID sanitizes sessionID for trace filename.
func traceSanitizeSessionID(sessionID string) string {
	const fallback = "default"
	trimmed := strings.TrimSpace(sessionID)
	if trimmed == "" {
		return fallback
	}
	var b strings.Builder
	b.Grow(len(trimmed))
	for _, r := range trimmed {
		switch {
		case r >= 'a' && r <= 'z',
			r >= 'A' && r <= 'Z',
			r >= '0' && r <= '9',
			r == '-', r == '_':
			b.WriteRune(r)
		default:
			b.WriteByte('-')
		}
	}
	sanitized := strings.Trim(b.String(), "-")
	if sanitized == "" {
		return fallback
	}
	return sanitized
}

type traceFileMeta struct {
	modTime int64
	size    int64
}

// findTraceFileForSessionID looks up the actual trace file for a sessionID.
// Tries <sessionId>.html and log-<sessionId>.html (agentsdk-go format).
func findTraceFileForSessionID(sessionID string, existingFiles map[string]traceFileMeta) (string, traceFileMeta) {
	san := traceSanitizeSessionID(sessionID)
	if m, ok := existingFiles[san+".html"]; ok {
		return san + ".html", m
	}
	logName := "log-" + san + ".html"
	if m, ok := existingFiles[logName]; ok {
		return logName, m
	}
	return "", traceFileMeta{}
}

// resolveTraceDir returns the .trace directory for the default agent workspace.
func resolveTraceDir(cfg *config.OpenOctaConfig, env func(string) string) string {
	workspaceDir := agent.ResolveAgentWorkspaceDir(cfg, "main", env)
	if workspaceDir == "" {
		workspaceDir = "."
	}
	return filepath.Join(workspaceDir, ".trace")
}

// TraceListHandler handles "trace.list".
// Params: mode (string) - "active" | "all". active = sessions from store; all = all html files in trace dir.
func TraceListHandler(opts HandlerOpts) error {
	cfg := loadConfigFromContext(opts.Context)
	if cfg == nil {
		cfg = &config.OpenOctaConfig{}
	}
	env := func(k string) string { return os.Getenv(k) }
	traceDir := resolveTraceDir(cfg, env)

	mode := "active"
	if m, ok := opts.Params["mode"].(string); ok && (m == "active" || m == "all") {
		mode = m
	}

	// sessionId -> sessionKey, updatedAt (always load for both active and all modes, so all mode can associate files with sessionKeys)
	sessionIDToKey := make(map[string]struct {
		key       string
		updatedAt *int64
	})
	storePath, store := loadCombinedSessionStoreForGateway(cfg, env)
	_ = storePath
	for key, entry := range store {
		if entry.SessionID == "" {
			continue
		}
		sessionIDToKey[entry.SessionID] = struct {
			key       string
			updatedAt *int64
		}{key, &entry.UpdatedAt}
	}

	// Scan trace dir for *.html files
	type fileInfo struct {
		filename string
		modTime  int64
		size     int64
	}
	existingFiles := make(map[string]traceFileMeta) // filename -> meta
	var traceFiles []fileInfo
	entries, err := os.ReadDir(traceDir)
	if err == nil {
		for _, e := range entries {
			if e.IsDir() {
				continue
			}
			name := e.Name()
			if !strings.HasSuffix(name, ".html") {
				continue
			}
			info, ierr := e.Info()
			var modTime, size int64
			if ierr == nil && info != nil {
				modTime = info.ModTime().UnixMilli()
				size = info.Size()
			}
			existingFiles[name] = traceFileMeta{modTime: modTime, size: size}
			traceFiles = append(traceFiles, fileInfo{filename: name, modTime: modTime, size: size})
		}
	}

	// Build sessionID -> best matching sessionKey (sessions use same sanitization for SessionID)
	idToKey := make(map[string]struct {
		key       string
		updatedAt *int64
	})
	for sid, v := range sessionIDToKey {
		san := traceSanitizeSessionID(sid)
		idToKey[san] = v
	}

	var result []TraceListEntry
	if mode == "active" {
		// For each session in store, check if trace file exists (try <sessionId>.html and log-<sessionId>.html)
		for sessionID, v := range sessionIDToKey {
			fname, meta := findTraceFileForSessionID(sessionID, existingFiles)
			fileVal := "-"
			var updatedAt *int64
			var fileSize *int64
			if fname != "" {
				fileVal = fname
				updatedAt = &meta.modTime
				if meta.size > 0 {
					fileSize = &meta.size
				}
			}
			if updatedAt == nil {
				updatedAt = v.updatedAt
			}
			result = append(result, TraceListEntry{
				SessionKey: v.key,
				SessionID:  sessionID,
				UpdatedAt:  updatedAt,
				File:       fileVal,
				FileSize:   fileSize,
			})
		}
	} else {
		// For each trace file from scan, try to find sessionKey
		for _, tf := range traceFiles {
			fname := tf.filename
			id := strings.TrimSuffix(fname, ".html")
			san := id
			if strings.HasPrefix(id, "log-") {
				san = strings.TrimPrefix(id, "log-")
			}
			v, found := idToKey[san]
			sessionKey := "-"
			var updatedAt *int64
			if found {
				sessionKey = v.key
				if v.updatedAt != nil {
					updatedAt = v.updatedAt
				}
			}
			if updatedAt == nil {
				updatedAt = &tf.modTime
			}
			var fileSize *int64
			if tf.size > 0 {
				fileSize = &tf.size
			}
			result = append(result, TraceListEntry{
				SessionKey: sessionKey,
				SessionID:  id, // use for trace.content fetch (file basename without .html)
				UpdatedAt:  updatedAt,
				File:       fname,
				FileSize:   fileSize,
			})
		}
	}

	// Sort by UpdatedAt desc
	sort.Slice(result, func(i, j int) bool {
		a, b := int64(0), int64(0)
		if result[i].UpdatedAt != nil {
			a = *result[i].UpdatedAt
		}
		if result[j].UpdatedAt != nil {
			b = *result[j].UpdatedAt
		}
		return a > b
	})

	opts.Respond(true, &TraceListResult{
		TraceDir: traceDir,
		Entries:  result,
	}, nil, nil)
	return nil
}

// TraceContentHandler handles "trace.content".
// Params: sessionId (string) - session ID or file basename (without .html). Tries <id>.html and log-<id>.html.
func TraceContentHandler(opts HandlerOpts) error {
	sessionID, _ := opts.Params["sessionId"].(string)
	sessionID = strings.TrimSpace(sessionID)
	if sessionID == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInvalidRequest,
			Message: "sessionId required",
		}, nil)
		return nil
	}

	cfg := loadConfigFromContext(opts.Context)
	if cfg == nil {
		cfg = &config.OpenOctaConfig{}
	}
	env := func(k string) string { return os.Getenv(k) }
	traceDir := resolveTraceDir(cfg, env)

	// Try <sessionId>.html, log-<sessionId>.html (agentsdk-go format)
	san := traceSanitizeSessionID(sessionID)
	candidates := []string{
		sessionID + ".html",
		san + ".html",
		"log-" + san + ".html",
	}
	seen := make(map[string]bool)
	var unique []string
	for _, c := range candidates {
		if !seen[c] {
			seen[c] = true
			unique = append(unique, c)
		}
	}
	var data []byte
	var fname string
	for _, c := range unique {
		fpath := filepath.Join(traceDir, c)
		var err error
		data, err = os.ReadFile(fpath)
		if err == nil {
			fname = c
			break
		}
	}
	if fname == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeNotFound,
			Message: fmt.Sprintf("trace file not found for sessionId: %s", sessionID),
		}, nil)
		return nil
	}

	opts.Respond(true, map[string]interface{}{
		"content": string(data),
		"file":    fname,
	}, nil, nil)
	return nil
}
