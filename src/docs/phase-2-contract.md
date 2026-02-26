# Phase 2 Contract (Gateway Protocol + HTTP)

## Completed (2a, 2b)

### pkg/gateway/protocol

- `PROTOCOL_VERSION` — 3
- `RequestFrame`, `ResponseFrame`, `EventFrame`, `GatewayFrame` — WebSocket frame types
- `ConnectParams`, `ConnectClientInfo`, `ConnectDevice`, `ConnectAuth` — handshake
- `HelloOk`, `HelloServer`, `HelloFeatures`, `HelloPolicy`, `HelloAuth` — server hello
- `Snapshot`, `PresenceEntry`, `StateVersion`, `SessionDefaults` — initial state
- `ErrorShape` — error payload
- `TickEvent`, `ShutdownEvent` — event types
- Client IDs and modes in `constants.go`
- Error codes in `constants.go`

### pkg/gateway/http

- `Server` — HTTP server with routes
- `GET /health`, `GET /api/health` — health check
- `POST /v1/chat/completions`, `POST /v1/responses` — placeholders (501)
- `GET /ws` — WebSocket upgrade placeholder (501)
- `MakeHelloOk` — builds hello-ok frame for handshake
- `ListenAndServe`, `Shutdown`

## Completed (2c, 2d)

### pkg/gateway/handlers

- `health` — health method handler (returns HealthSnapshot or cached)
- `status` — status method handler (returns StatusSummary)
- `NewRegistry` — registry with health/status
- `Dispatch` — request dispatch to handlers

### pkg/gateway/ws

- `Hub` — WebSocket client management
- `ServeWS` — HTTP upgrade to WebSocket
- `connect` handshake — connect params validation, hello-ok response
- `req`/`res` — frame parsing and dispatch

### gateway run

- `openclaw gateway run` — starts HTTP server + WebSocket on port 18789

## Pending (2e)

- Gateway core handlers (config, sessions, models)
