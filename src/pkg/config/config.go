package config

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"os"
	"time"

	"github.com/openclaw/openclaw/pkg/paths"
)

// EnvGetter returns an environment variable value by name.
type EnvGetter func(string) string

// DefaultEnv uses os.Getenv.
func DefaultEnv(key string) string {
	return os.Getenv(key)
}

// Load reads and parses the config file.
// Loads .env from the current working directory first so declared env vars are visible.
// Returns default config if file does not exist or is empty.
func Load(env EnvGetter) (*OpenClawConfig, error) {
	_ = LoadEnvFromCurrentDir() // best-effort: .env from cwd
	if env == nil {
		env = DefaultEnv
	}
	stateDir := paths.ResolveStateDir(env)
	configPath := paths.ResolveConfigPath(env, stateDir)
	data, err := os.ReadFile(configPath)
	if err != nil {
		if os.IsNotExist(err) {
			return &OpenClawConfig{}, nil
		}
		return nil, err
	}
	var cfg OpenClawConfig
	if len(data) == 0 {
		return &cfg, nil
	}
	if err := json.Unmarshal(data, &cfg); err != nil {
		return nil, err
	}
	return &cfg, nil
}

// EnsureDefaultConfig ensures ~/.openclaw/openclaw.json exists; if not, creates the dir and writes minimal default config with a generated token.
func EnsureDefaultConfig(env EnvGetter) error {
	if env == nil {
		env = DefaultEnv
	}
	stateDir := paths.ResolveStateDir(env)
	configPath := paths.ResolveCanonicalConfigPath(env, stateDir)
	if _, err := os.Stat(configPath); err == nil {
		return nil
	}
	if err := os.MkdirAll(stateDir, 0700); err != nil {
		return err
	}
	token, err := generateToken(24)
	if err != nil {
		return err
	}
	modeToken := "token"
	modeLocal := "local"
	bindLoopback := "loopback"
	modeOff := "off"
	port := 18789
	resetOnExit := false
	cfg := &OpenClawConfig{
		Meta: &ConfigMeta{
			LastTouchedVersion: "2026.2.9",
			LastTouchedAt:      time.Now().UTC().Format(time.RFC3339Nano),
		},
		Gateway: &GatewayConfig{
			Port: &port,
			Mode: &modeLocal,
			Bind: &bindLoopback,
			Auth: &GatewayAuthConfig{
				Mode:  &modeToken,
				Token: token,
			},
			Tailscale: &GatewayTailscaleConfig{
				Mode:        &modeOff,
				ResetOnExit: &resetOnExit,
			},
		},
	}
	data, err := json.MarshalIndent(cfg, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(configPath, data, 0600)
}

// generateToken returns a hex string of length 2*n (n random bytes).
func generateToken(n int) (string, error) {
	b := make([]byte, n)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}
