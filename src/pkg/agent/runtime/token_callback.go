// Package runtime: token usage logging via middleware (agentsdk-go v2 移除了 TokenCallback).
package runtime

import (
	"context"
	"path/filepath"
	"strings"
	"time"

	"github.com/openocta/openocta/pkg/logging"
	"github.com/openocta/openocta/pkg/session"
	"github.com/stellarlinkco/agentsdk-go/pkg/middleware"
	"github.com/stellarlinkco/agentsdk-go/pkg/model"
)

// NewTokenUsageMiddleware appends model usage to the session transcript after each model turn.
func NewTokenUsageMiddleware(agentID string, env func(string) string) middleware.Middleware {
	if env == nil {
		env = func(string) string { return "" }
	}
	if strings.TrimSpace(agentID) == "" {
		agentID = session.DefaultAgentID
	}
	sessionsDir := session.ResolveAgentSessionsDir(agentID, env)
	return middleware.Funcs{
		Identifier: "openocta-token-usage",
		OnAfterAgent: func(_ context.Context, st *middleware.State) error {
			if st == nil {
				return nil
			}
			usage, ok := st.Values["model.usage"].(model.Usage)
			if !ok {
				return nil
			}
			sid, _ := st.Values["session_id"].(string)
			if sid == "" {
				return nil
			}
			rid, _ := st.Values["request_id"].(string)
			path := filepath.Join(sessionsDir, sid+".jsonl")
			line := logging.TokenUsageSessionLine{
				Timestamp:     time.Now().UTC().Format(time.RFC3339),
				SessionID:     sid,
				RequestID:     rid,
				Model:         "",
				Input:         int64(usage.InputTokens),
				Output:        int64(usage.OutputTokens),
				CacheRead:     int64(usage.CacheReadTokens),
				CacheCreation: int64(usage.CacheCreationTokens),
				TotalTokens:   int64(usage.TotalTokens),
			}
			_ = logging.AppendTokenUsageToSession(path, line)
			return nil
		},
	}
}
