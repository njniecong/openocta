package memory

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"

	_ "modernc.org/sqlite"
)

// OpenDB opens a SQLite database at path (created if not exists).
func OpenDB(path string) (*sql.DB, error) {
	if path == "" {
		return nil, fmt.Errorf("memory store path is required")
	}
	dir := filepath.Dir(path)
	_ = ensureDir(dir)
	db, err := sql.Open("sqlite", path)
	if err != nil {
		return nil, err
	}
	if err := db.Ping(); err != nil {
		_ = db.Close()
		return nil, err
	}
	_, _ = db.Exec("PRAGMA journal_mode=WAL;")
	return db, nil
}

func ensureDir(dir string) error {
	return os.MkdirAll(dir, 0750)
}
