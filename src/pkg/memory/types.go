// Package memory provides memory manager and embeddings (Phase 6e skeleton).
package memory

// Source identifies memory source.
type Source string

const (
	SourceMemory   Source = "memory"
	SourceSessions Source = "sessions"
)

// SearchResult is a single memory search hit.
type SearchResult struct {
	Path      string  `json:"path"`
	StartLine int     `json:"startLine"`
	EndLine   int     `json:"endLine"`
	Score     float64 `json:"score"`
	Snippet   string  `json:"snippet"`
	Source    Source  `json:"source"`
	Citation  string  `json:"citation,omitempty"`
}

// EmbeddingProbeResult indicates embedding availability.
type EmbeddingProbeResult struct {
	OK    bool   `json:"ok"`
	Error string `json:"error,omitempty"`
}

// SyncProgressUpdate reports sync progress.
type SyncProgressUpdate struct {
	Completed int    `json:"completed"`
	Total     int    `json:"total"`
	Label     string `json:"label,omitempty"`
}

// ProviderStatus describes the memory provider state.
type ProviderStatus struct {
	Backend      string   `json:"backend"`
	Provider     string   `json:"provider"`
	Model        string   `json:"model,omitempty"`
	Files        int      `json:"files,omitempty"`
	Chunks       int      `json:"chunks,omitempty"`
	Dirty        bool     `json:"dirty,omitempty"`
	WorkspaceDir string   `json:"workspaceDir,omitempty"`
	DBPath       string   `json:"dbPath,omitempty"`
	ExtraPaths   []string `json:"extraPaths,omitempty"`
}
