package handlers

import (
	"encoding/json"
	"os"
	"time"

	"github.com/openclaw/openclaw/pkg/config"
	"github.com/openclaw/openclaw/pkg/gateway/protocol"
	"github.com/openclaw/openclaw/pkg/paths"
	"github.com/openclaw/openclaw/pkg/version"
)

// ConfigSnapshot is the config.get response (compatible with protocol).
type ConfigSnapshot struct {
	Path         string                  `json:"path"`
	Exists       bool                    `json:"exists"`
	Raw          string                  `json:"raw,omitempty"`
	Parsed       interface{}             `json:"parsed,omitempty"`
	Valid        bool                    `json:"valid"`
	Config       *config.OpenClawConfig  `json:"config"`
	Hash         string                  `json:"hash,omitempty"`
	Issues       []ConfigValidationIssue `json:"issues"`
	Warnings     []ConfigValidationIssue `json:"warnings"`
	LegacyIssues []LegacyConfigIssue     `json:"legacyIssues"`
}

// ConfigValidationIssue is a validation error.
type ConfigValidationIssue struct {
	Path    string `json:"path"`
	Message string `json:"message"`
}

// LegacyConfigIssue is a legacy config issue.
type LegacyConfigIssue struct {
	Path    string `json:"path"`
	Message string `json:"message"`
}

// ConfigGetHandler handles "config.get".
func ConfigGetHandler(opts HandlerOpts) error {
	ctx := opts.Context
	if ctx == nil || ctx.LoadConfigSnapshot == nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: "config context not configured",
		}, nil)
		return nil
	}
	snap, err := ctx.LoadConfigSnapshot()
	if err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInternal,
			Message: err.Error(),
		}, nil)
		return nil
	}
	opts.Respond(true, snap, nil, nil)
	return nil
}

// ConfigSchemaResponse is the config.schema response (compatible with protocol).
// Frontend expects { schema, uiHints, version, generatedAt }.
type ConfigSchemaResponse struct {
	Schema      map[string]interface{} `json:"schema"`
	UIHints     map[string]interface{} `json:"uiHints"`
	Version     string                 `json:"version"`
	GeneratedAt string                 `json:"generatedAt"`
}

// ConfigSchemaHandler handles "config.schema".
func ConfigSchemaHandler(opts HandlerOpts) error {
	// Phase 2e: return ConfigSchemaResponse format (schema wrapped, not raw).
	// Frontend applyConfigSchema expects res.schema, res.uiHints, res.version.
	schema := map[string]interface{}{
		"type":       "object",
		"title":      "OpenClawConfig",
		"properties": map[string]interface{}{},
	}
	res := ConfigSchemaResponse{
		Schema:      schema,
		UIHints:     map[string]interface{}{},
		Version:     version.Version,
		GeneratedAt: time.Now().UTC().Format(time.RFC3339),
	}
	opts.Respond(true, res, nil, nil)
	return nil
}

// loadConfigSnapshot loads config and returns a snapshot (used by Context).
func LoadConfigSnapshot(env func(string) string) (*ConfigSnapshot, error) {
	stateDir := paths.ResolveStateDir(env)
	configPath := paths.ResolveConfigPath(env, stateDir)
	data, err := os.ReadFile(configPath)
	exists := err == nil
	raw := ""
	if exists {
		raw = string(data)
	} else if !os.IsNotExist(err) {
		return nil, err
	}
	cfg, err := config.Load(env)
	if err != nil {
		return &ConfigSnapshot{
			Path:         configPath,
			Exists:       exists,
			Raw:          raw,
			Valid:        false,
			Config:       &config.OpenClawConfig{},
			Issues:       []ConfigValidationIssue{{Path: "", Message: err.Error()}},
			Warnings:     []ConfigValidationIssue{},
			LegacyIssues: []LegacyConfigIssue{},
		}, nil
	}
	var parsed interface{}
	if len(raw) > 0 {
		_ = json.Unmarshal([]byte(raw), &parsed)
	}
	return &ConfigSnapshot{
		Path:         configPath,
		Exists:       exists,
		Raw:          raw,
		Parsed:       parsed,
		Valid:        true,
		Config:       cfg,
		Issues:       []ConfigValidationIssue{},
		Warnings:     []ConfigValidationIssue{},
		LegacyIssues: []LegacyConfigIssue{},
	}, nil
}
