# Phase 0 Contract

## Package Interfaces

### pkg/paths

- `ResolveStateDir(env func(string) string) string` — state directory
- `ResolveConfigPath(env, stateDir) string` — config file path
- `ResolveCanonicalConfigPath(env, stateDir) string` — canonical config path
- `DefaultGatewayPort() int` — 18789
- `ResolveGatewayPort(portFromConfig *int, env) int` — resolved port
- `ResolveOAuthDir(env, stateDir) string` — OAuth credentials dir

### pkg/config

- `Load(env EnvGetter) (*OpenOctaConfig, error)` — load config
- `OpenOctaConfig` — root config struct (minimal)
- `GatewayConfig` — gateway.port

### pkg/utils

- `Clamp`, `ClampInt` — numeric clamping
- `EscapeRegExp` — regex escape
- `SafeParseJSON[T]` — safe JSON parse
- `IsTruthyEnvValue` — env truthiness

### pkg/logging

- `Logger` — New, Sub, Info, Warn, Error, Debug

### pkg/version

- `Version` — string, from OPENCLAW_BUNDLED_VERSION or "0.0.0-dev"

## Env Vars

- `OPENCLAW_STATE_DIR`, `CLAWDBOT_STATE_DIR`
- `OPENCLAW_CONFIG_PATH`, `CLAWDBOT_CONFIG_PATH`
- `OPENCLAW_GATEWAY_PORT`, `CLAWDBOT_GATEWAY_PORT`
- `OPENCLAW_OAUTH_DIR`
- `OPENCLAW_HOME`, `HOME`, `USERPROFILE`
- `OPENCLAW_BUNDLED_VERSION`
