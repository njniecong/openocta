package memory

import (
	"database/sql"
	"sync"
)

// Manager holds the memory index DB and provides Sync and Search.
type Manager struct {
	db           *sql.DB
	model        string
	ftsEnabled   bool
	workspaceDir string
	extraPaths   []string
	agentID      string
	env          func(string) string
	mu           sync.Mutex
}

// ManagerOptions configures the memory manager.
type ManagerOptions struct {
	StorePath    string
	Model        string
	FTSEnabled   bool
	WorkspaceDir string
	ExtraPaths   []string
	AgentID      string
	Env          func(string) string
}

// NewManager opens the DB and ensures schema. Caller must call Close when done.
func NewManager(opts ManagerOptions) (*Manager, error) {
	if opts.StorePath == "" {
		return nil, nil
	}
	db, err := OpenDB(opts.StorePath)
	if err != nil {
		return nil, err
	}
	if err := EnsureSchema(db, opts.FTSEnabled); err != nil {
		_ = db.Close()
		return nil, err
	}
	return &Manager{
		db:           db,
		model:        opts.Model,
		ftsEnabled:   opts.FTSEnabled,
		workspaceDir: opts.WorkspaceDir,
		extraPaths:   opts.ExtraPaths,
		agentID:      opts.AgentID,
		env:          opts.Env,
	}, nil
}

// Close closes the database.
func (m *Manager) Close() error {
	if m == nil || m.db == nil {
		return nil
	}
	return m.db.Close()
}

// Sync runs SyncMemoryFiles and SyncSessionFiles (incremental unless needsFullReindex).
func (m *Manager) Sync(needsFullReindex bool) error {
	if m == nil || m.db == nil {
		return nil
	}
	m.mu.Lock()
	defer m.mu.Unlock()
	if err := SyncMemoryFiles(m.db, m.workspaceDir, m.extraPaths, m.model, m.ftsEnabled, needsFullReindex); err != nil {
		return err
	}
	if m.agentID != "" && m.env != nil {
		if err := SyncSessionFiles(m.db, m.agentID, m.model, m.ftsEnabled, needsFullReindex, m.env); err != nil {
			return err
		}
	}
	return nil
}

// Search runs FTS search and returns results.
func (m *Manager) Search(query string, limit int) ([]SearchResult, error) {
	if m == nil || m.db == nil {
		return nil, nil
	}
	return Search(m.db, query, limit)
}

// DB returns the underlying DB for advanced use (e.g. embedding writes). Do not close it.
func (m *Manager) DB() *sql.DB {
	return m.db
}
