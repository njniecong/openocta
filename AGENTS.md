# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

OpenOcta is an open-source enterprise AI agent platform (single Go binary + embedded Lit/Vite frontend). The Gateway serves the Control UI and WebSocket API on port 18900.

### System requirements

- **Go 1.25+** (the `go.mod` declares `go 1.25`; Go 1.22 will NOT work)
- **Node >= 18** (only needed for frontend build/dev)

### Building

See `Makefile` targets. The primary build flow:

- `make build` — builds frontend → embeds into Go binary → compiles `openocta`
- `make run` — builds + starts Gateway on `:18900`
- `make run-ui` — starts Vite dev server on `:5173`

### Running services for development

1. **Gateway** (backend): `OPENOCTA_SKIP_CHANNELS=1 OPENOCTA_SKIP_CRON=1 ./openocta gateway run` — starts on `127.0.0.1:18900`. Skip channels/cron avoids needing external messaging credentials.
2. **Frontend dev server**: `cd ui && npm run dev` — Vite dev server on `:5173` with hot reload. Connect to the Gateway via WebSocket.

A gateway auth token is auto-generated in `~/.openocta/openocta.json` on first run.

### Testing

- **Go backend**: `cd src && go test ./...` — unit tests pass; the 3 tests in `test/gateway_protocol_test.go` are integration tests that require a running Gateway with valid auth config and may fail without it.
- **Frontend**: `cd ui && npm test` — runs Vitest with Playwright (Chromium). Requires `npx playwright install --with-deps chromium` first.

### Linting

- **Go**: `cd src && go vet ./...`
- **TypeScript**: `cd ui && npx tsc --noEmit` (pre-existing type errors exist in the codebase)
- No ESLint or golangci-lint configurations are present.

### Key env vars

| Variable | Purpose |
|---|---|
| `OPENOCTA_SKIP_CHANNELS` | Set to `1` to skip loading messaging channels (avoids needing Discord/Telegram/etc. tokens) |
| `OPENOCTA_SKIP_CRON` | Set to `1` to skip cron service |
| `ANTHROPIC_API_KEY` | Required for agent chat functionality (LLM calls) |

### Gotchas

- The Makefile `ui` target uses `npm install && npm run build`; the `ui/README.md` recommends pnpm. Both `package-lock.json` and `pnpm-lock.yaml` exist. Use npm to match the Makefile.
- The frontend build output goes to `src/embed/frontend/` and is embedded into the Go binary via `go:embed`.
- SQLite, Bleve search, and BoltDB are all embedded pure-Go libraries — no external database processes needed.
- State directory defaults to `~/.openocta/`. Config is at `~/.openocta/openocta.json`.
