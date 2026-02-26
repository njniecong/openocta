// Package memory provides SQLite-backed memory index and search (FTS, optional vector).
package memory

import (
	"database/sql"
)

const (
	VectorTable = "chunks_vec"
	FTSTable    = "chunks_fts"
	MetaKey     = "memory_index_meta_v1"
)

// EnsureSchema creates meta, files, chunks, and chunks_fts (FTS5) if not present.
// Vector table (chunks_vec) is omitted unless vec extension is loaded separately.
func EnsureSchema(db *sql.DB, ftsEnabled bool) error {
	_, err := db.Exec(`
		CREATE TABLE IF NOT EXISTS meta (
			key TEXT PRIMARY KEY,
			value TEXT NOT NULL
		);
	`)
	if err != nil {
		return err
	}
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS files (
			path TEXT PRIMARY KEY,
			source TEXT NOT NULL DEFAULT 'memory',
			hash TEXT NOT NULL,
			mtime INTEGER NOT NULL,
			size INTEGER NOT NULL
		);
	`)
	if err != nil {
		return err
	}
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS chunks (
			id TEXT PRIMARY KEY,
			path TEXT NOT NULL,
			source TEXT NOT NULL DEFAULT 'memory',
			start_line INTEGER NOT NULL,
			end_line INTEGER NOT NULL,
			hash TEXT NOT NULL,
			model TEXT NOT NULL,
			text TEXT NOT NULL,
			embedding BLOB,
			updated_at INTEGER NOT NULL
		);
	`)
	if err != nil {
		return err
	}
	_, _ = db.Exec(`CREATE INDEX IF NOT EXISTS idx_chunks_path ON chunks(path);`)
	_, _ = db.Exec(`CREATE INDEX IF NOT EXISTS idx_chunks_source ON chunks(source);`)

	if ftsEnabled {
		_, err = db.Exec(`
			CREATE VIRTUAL TABLE IF NOT EXISTS ` + FTSTable + ` USING fts5(
				text,
				id UNINDEXED,
				path UNINDEXED,
				source UNINDEXED,
				model UNINDEXED,
				start_line UNINDEXED,
				end_line UNINDEXED
			);
		`)
		if err != nil {
			return err
		}
	}
	return nil
}
