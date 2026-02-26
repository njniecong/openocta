# Phase 1 Contract

Phase 1 extends Phase 0 with full config schema, validation, and types.

## Expansions

### pkg/config

- Full `OpenOctaConfig` schema (agents, channels, cron, hooks, memory, etc.)
- JSON5 parsing (or JSON with comment stripping)
- Schema validation
- Config hot-reload watcher (optional)

### pkg/types

- Common shared types used across packages
- ChannelId, SessionKey, etc.

### pkg/logging

- Subsystem loggers
- Log levels
- Redaction helpers
