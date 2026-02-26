package memory

import (
	"database/sql"
	"strings"
)

// Search runs FTS query on chunks_fts and returns matching chunks (keyword search).
// query is sanitized for FTS5 (e.g. prefix*); limit caps the number of results.
func Search(db *sql.DB, query string, limit int) ([]SearchResult, error) {
	if limit <= 0 {
		limit = 20
	}
	terms := strings.Fields(query)
	var b strings.Builder
	for i, t := range terms {
		if i > 0 {
			b.WriteString(" ")
		}
		t = strings.TrimSpace(t)
		if t == "" {
			continue
		}
		if !strings.ContainsAny(t, "\"*") {
			b.WriteString(t)
			b.WriteString("*")
		} else {
			b.WriteString(t)
		}
	}
	ftsQuery := b.String()
	if ftsQuery == "" {
		ftsQuery = query
	}

	rows, err := db.Query(`
		SELECT id, path, source, text, start_line, end_line
		FROM `+FTSTable+`
		WHERE `+FTSTable+` MATCH ?
		ORDER BY rank
		LIMIT ?`, ftsQuery, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var out []SearchResult
	for rows.Next() {
		var id, path, source, text string
		var startLine, endLine int
		err := rows.Scan(&id, &path, &source, &text, &startLine, &endLine)
		if err != nil {
			return out, err
		}
		out = append(out, SearchResult{
			Path:      path,
			StartLine: startLine,
			EndLine:   endLine,
			Score:     0,
			Snippet:   text,
			Source:    Source(source),
		})
	}
	return out, rows.Err()
}
