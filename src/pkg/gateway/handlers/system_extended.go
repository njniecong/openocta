package handlers

import (
	"time"

	"github.com/openclaw/openclaw/pkg/gateway/protocol"
)

// LastHeartbeatHandler handles "last-heartbeat".
func LastHeartbeatHandler(opts HandlerOpts) error {
	opts.Respond(true, map[string]interface{}{
		"ts": time.Now().UnixMilli(),
	}, nil, nil)
	return nil
}

// SystemPresenceHandler handles "system-presence".
func SystemPresenceHandler(opts HandlerOpts) error {
	opts.Respond(true, []interface{}{}, nil, nil)
	return nil
}

// WakeHandler handles "wake".
func WakeHandler(opts HandlerOpts) error {
	opts.Respond(true, map[string]interface{}{"ok": true}, nil, nil)
	return nil
}

// ConfigApplyHandler handles "config.apply".
func ConfigApplyHandler(opts HandlerOpts) error {
	opts.Respond(false, nil, &protocol.ErrorShape{
		Code:    "method_not_implemented",
		Message: "config.apply not implemented",
	}, nil)
	return nil
}
