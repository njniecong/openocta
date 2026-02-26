package cron

import (
	"encoding/json"
	"os"
	"path/filepath"
)

// LoadStore reads the cron store from path.
func LoadStore(storePath string) (*StoreFile, error) {
	data, err := os.ReadFile(storePath)
	if err != nil {
		if os.IsNotExist(err) {
			return &StoreFile{Version: 1, Jobs: []CronJob{}}, nil
		}
		return nil, err
	}
	var store StoreFile
	if err := json.Unmarshal(data, &store); err != nil {
		return nil, err
	}
	if store.Jobs == nil {
		store.Jobs = []CronJob{}
	}
	return &store, nil
}

// SaveStore writes the cron store to path.
func SaveStore(storePath string, store *StoreFile) error {
	if err := os.MkdirAll(filepath.Dir(storePath), 0755); err != nil {
		return err
	}
	data, err := json.MarshalIndent(store, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(storePath, data, 0644)
}
