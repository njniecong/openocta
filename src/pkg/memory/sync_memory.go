package memory

import (
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

// SyncMemoryFiles scans workspaceDir (and extraPaths) for .md files, hashes, and upserts into files/chunks/FTS.
// model is stored per chunk for FTS; needsFullReindex forces re-indexing even when hash matches.
func SyncMemoryFiles(db *sql.DB, workspaceDir string, extraPaths []string, model string, ftsEnabled bool, needsFullReindex bool) error {
	files, err := listMemoryFiles(workspaceDir, extraPaths)
	if err != nil {
		return err
	}
	for _, absPath := range files {
		relPath, err := filepath.Rel(workspaceDir, absPath)
		if err != nil {
			relPath = absPath
		}
		relPath = filepath.ToSlash(relPath)

		content, err := os.ReadFile(absPath)
		if err != nil {
			continue
		}
		text := string(content)
		hash := hashText(text)
		info, err := os.Stat(absPath)
		if err != nil {
			continue
		}
		mtime := info.ModTime().Unix()
		size := info.Size()

		var existingHash string
		_ = db.QueryRow(`SELECT hash FROM files WHERE path = ? AND source = ?`, relPath, "memory").Scan(&existingHash)
		if !needsFullReindex && existingHash == hash {
			continue
		}

		tx, err := db.Begin()
		if err != nil {
			return err
		}
		_, _ = tx.Exec(`INSERT OR REPLACE INTO files (path, source, hash, mtime, size) VALUES (?, ?, ?, ?, ?)`,
			relPath, "memory", hash, mtime, size)
		_, _ = tx.Exec(`DELETE FROM chunks WHERE path = ? AND source = ?`, relPath, "memory")
		if ftsEnabled {
			_, _ = tx.Exec(`DELETE FROM `+FTSTable+` WHERE path = ? AND source = ? AND model = ?`, relPath, "memory", model)
		}

		chunks := chunkText(text)
		for i, c := range chunks {
			id := fmt.Sprintf("%s:%s:%d", relPath, hash, i)
			_, err = tx.Exec(`INSERT INTO chunks (id, path, source, start_line, end_line, hash, model, text, embedding, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				id, relPath, "memory", c.startLine, c.endLine, c.hash, model, c.text, nil, mtime)
			if err != nil {
				_ = tx.Rollback()
				return err
			}
			if ftsEnabled {
				_, err = tx.Exec(`INSERT INTO `+FTSTable+` (text, id, path, source, model, start_line, end_line) VALUES (?, ?, ?, ?, ?, ?, ?)`,
					c.text, id, relPath, "memory", model, c.startLine, c.endLine)
				if err != nil {
					_ = tx.Rollback()
					return err
				}
			}
		}
		if err := tx.Commit(); err != nil {
			return err
		}
	}
	// Delete stale files (in DB but not in current file list)
	activePaths := make(map[string]bool)
	for _, absPath := range files {
		rel, _ := filepath.Rel(workspaceDir, absPath)
		activePaths[filepath.ToSlash(rel)] = true
	}
	rows, _ := db.Query(`SELECT path FROM files WHERE source = ?`, "memory")
	if rows != nil {
		defer rows.Close()
		for rows.Next() {
			var p string
			if rows.Scan(&p) == nil && !activePaths[p] {
				_, _ = db.Exec(`DELETE FROM files WHERE path = ? AND source = ?`, p, "memory")
				_, _ = db.Exec(`DELETE FROM chunks WHERE path = ? AND source = ?`, p, "memory")
				if ftsEnabled {
					_, _ = db.Exec(`DELETE FROM `+FTSTable+` WHERE path = ? AND source = ? AND model = ?`, p, "memory", model)
				}
			}
		}
	}
	return nil
}

func listMemoryFiles(workspaceDir string, extraPaths []string) ([]string, error) {
	var out []string
	add := func(absPath string) {
		info, err := os.Stat(absPath)
		if err != nil || info.IsDir() || info.Mode()&os.ModeSymlink != 0 {
			return
		}
		if !strings.HasSuffix(strings.ToLower(absPath), ".md") {
			return
		}
		out = append(out, absPath)
	}
	add(filepath.Join(workspaceDir, "MEMORY.md"))
	add(filepath.Join(workspaceDir, "memory.md"))
	dir := filepath.Join(workspaceDir, "memory")
	if info, err := os.Stat(dir); err == nil && info.IsDir() {
		_ = filepath.Walk(dir, func(p string, info os.FileInfo, err error) error {
			if err != nil || info.IsDir() {
				return nil
			}
			if strings.HasSuffix(strings.ToLower(p), ".md") {
				out = append(out, p)
			}
			return nil
		})
	}
	for _, p := range extraPaths {
		p = strings.TrimSpace(p)
		if p == "" {
			continue
		}
		info, err := os.Stat(p)
		if err != nil {
			continue
		}
		if info.IsDir() {
			_ = filepath.Walk(p, func(path string, i os.FileInfo, err error) error {
				if err != nil || i.IsDir() {
					return nil
				}
				if strings.HasSuffix(strings.ToLower(path), ".md") {
					out = append(out, path)
				}
				return nil
			})
		} else {
			add(p)
		}
	}
	return out, nil
}

func hashText(s string) string {
	h := sha256.Sum256([]byte(s))
	return hex.EncodeToString(h[:])
}

type textChunk struct {
	startLine, endLine int
	text, hash         string
}

func chunkText(text string) []textChunk {
	lines := strings.Split(text, "\n")
	if len(lines) == 0 {
		return nil
	}
	const maxChars = 1200
	const overlapLines = 2
	var chunks []textChunk
	start := 0
	for start < len(lines) {
		n := 0
		chars := 0
		for i := start; i < len(lines) && chars < maxChars; i++ {
			chars += len(lines[i]) + 1
			n = i - start + 1
		}
		if n == 0 {
			n = 1
		}
		block := strings.Join(lines[start:start+n], "\n")
		chunks = append(chunks, textChunk{
			startLine: start + 1,
			endLine:   start + n,
			text:      block,
			hash:      hashText(block),
		})
		start += n
		if overlapLines > 0 && start < len(lines) {
			start -= overlapLines
			if start < 0 {
				start = 0
			}
		}
	}
	return chunks
}
