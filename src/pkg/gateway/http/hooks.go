package http

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/openclaw/openclaw/pkg/config"
	"github.com/openclaw/openclaw/pkg/gateway/handlers"
	"github.com/openclaw/openclaw/pkg/logging"
)

var hooksLog = logging.Sub("hooks")

// hooksPayloadWake is the body for POST /hooks/wake.
type hooksPayloadWake struct {
	Text string `json:"text"`
	Mode string `json:"mode"` // "now" | "next-heartbeat"
}

// hooksPayloadAgent is the body for POST /hooks/agent.
type hooksPayloadAgent struct {
	Message        string `json:"message"`
	Name           string `json:"name"`
	WakeMode       string `json:"wakeMode"`
	SessionKey     string `json:"sessionKey"`
	Deliver        bool   `json:"deliver"`
	Channel        string `json:"channel"`
	To             string `json:"to"`
	Model          string `json:"model"`
	Thinking       string `json:"thinking"`
	TimeoutSeconds *int   `json:"timeoutSeconds"`
}

func (s *Server) handleHooks(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	ctx := s.ctx
	if ctx == nil || ctx.Config == nil || ctx.Config.Hooks == nil {
		http.Error(w, "hooks not configured", http.StatusNotFound)
		return
	}
	cfg := ctx.Config.Hooks
	if cfg.Enabled != nil && !*cfg.Enabled {
		http.Error(w, "hooks disabled", http.StatusNotFound)
		return
	}
	token := ""
	if cfg.Token != nil {
		token = strings.TrimSpace(*cfg.Token)
	}
	if token != "" {
		auth := r.Header.Get("Authorization")
		got := ""
		if strings.HasPrefix(auth, "Bearer ") {
			got = strings.TrimSpace(strings.TrimPrefix(auth, "Bearer "))
		}
		if got == "" {
			got = strings.TrimSpace(r.Header.Get("X-OpenClaw-Token"))
		}
		if got != token {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			_, _ = w.Write([]byte(`{"error":"unauthorized"}`))
			return
		}
	}

	pathPrefix := "/hooks"
	if cfg.Path != nil && *cfg.Path != "" {
		pathPrefix = strings.TrimSuffix(*cfg.Path, "/")
	}
	path := r.URL.Path
	if pathPrefix != "" && !strings.HasPrefix(path, pathPrefix) {
		http.Error(w, "not found", http.StatusNotFound)
		return
	}
	subpath := strings.TrimPrefix(path, pathPrefix)
	subpath = strings.TrimPrefix(subpath, "/")
	subpath = strings.ToLower(subpath)

	switch subpath {
	case "wake":
		s.handleHooksWake(w, r, ctx)
		return
	case "agent":
		s.handleHooksAgent(w, r, ctx)
		return
	}
	// Try mapping by path (config.HookMappingConfig)
	if cfg.Mappings != nil {
		for i := range cfg.Mappings {
			m := &cfg.Mappings[i]
			if m.Match != nil && m.Match.Path != nil && *m.Match.Path == subpath {
				action := "wake"
				if m.Action != nil {
					action = *m.Action
				}
				if action == "agent" {
					s.handleHooksAgentWithMapping(w, r, ctx, m)
					return
				}
				s.handleHooksWakeWithMapping(w, r, ctx, m)
				return
			}
		}
	}
	http.Error(w, "not found", http.StatusNotFound)
}

func (s *Server) handleHooksWake(w http.ResponseWriter, r *http.Request, ctx *handlers.Context) {
	var body hooksPayloadWake
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}
	text := strings.TrimSpace(body.Text)
	mode := body.Mode
	if mode == "" {
		mode = "next-heartbeat"
	}
	if mode != "now" && mode != "next-heartbeat" {
		mode = "next-heartbeat"
	}
	if ctx.HooksWake != nil {
		ctx.HooksWake(text, mode)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"ok":true}`))
		return
	}
	hooksLog.Warn("hooks wake not implemented (no HooksWake callback)")
	w.WriteHeader(http.StatusNotImplemented)
}

func (s *Server) handleHooksWakeWithMapping(w http.ResponseWriter, r *http.Request, ctx *handlers.Context, m *config.HookMappingConfig) {
	// Simplified: use text from body or template
	var body struct {
		Text string `json:"text"`
	}
	_ = json.NewDecoder(r.Body).Decode(&body)
	text := body.Text
	if m.TextTemplate != nil {
		text = *m.TextTemplate
	}
	mode := "next-heartbeat"
	if m.WakeMode != nil {
		mode = *m.WakeMode
	}
	if ctx.HooksWake != nil {
		ctx.HooksWake(text, mode)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"ok":true}`))
		return
	}
	w.WriteHeader(http.StatusNotImplemented)
}

func (s *Server) handleHooksAgent(w http.ResponseWriter, r *http.Request, ctx *handlers.Context) {
	var body hooksPayloadAgent
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}
	message := strings.TrimSpace(body.Message)
	if message == "" {
		http.Error(w, "message required", http.StatusBadRequest)
		return
	}
	if ctx.HooksAgent != nil {
		runID := ctx.HooksAgent(handlers.HooksAgentParams{
			Message:        message,
			Name:           body.Name,
			WakeMode:       body.WakeMode,
			SessionKey:     body.SessionKey,
			Deliver:        body.Deliver,
			Channel:        body.Channel,
			To:             body.To,
			Model:          body.Model,
			Thinking:       body.Thinking,
			TimeoutSeconds: body.TimeoutSeconds,
		})
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		_, _ = w.Write([]byte(`{"runId":"` + runID + `"}`))
		return
	}
	hooksLog.Warn("hooks agent not implemented (no HooksAgent callback)")
	w.WriteHeader(http.StatusNotImplemented)
}

func (s *Server) handleHooksAgentWithMapping(w http.ResponseWriter, r *http.Request, ctx *handlers.Context, m *config.HookMappingConfig) {
	var body struct {
		Message string `json:"message"`
	}
	_ = json.NewDecoder(r.Body).Decode(&body)
	message := body.Message
	if m.MessageTemplate != nil {
		message = *m.MessageTemplate
	}
	if message == "" {
		http.Error(w, "message required", http.StatusBadRequest)
		return
	}
	if ctx.HooksAgent != nil {
		p := handlers.HooksAgentParams{Message: message}
		if m.Name != nil {
			p.Name = *m.Name
		}
		if m.WakeMode != nil {
			p.WakeMode = *m.WakeMode
		}
		if m.SessionKey != nil {
			p.SessionKey = *m.SessionKey
		}
		if m.Deliver != nil {
			p.Deliver = *m.Deliver
		}
		if m.Channel != nil {
			p.Channel = *m.Channel
		}
		if m.To != nil {
			p.To = *m.To
		}
		if m.Model != nil {
			p.Model = *m.Model
		}
		if m.Thinking != nil {
			p.Thinking = *m.Thinking
		}
		runID := ctx.HooksAgent(p)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		_, _ = w.Write([]byte(`{"runId":"` + runID + `"}`))
		return
	}
	w.WriteHeader(http.StatusNotImplemented)
}
