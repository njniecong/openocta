package handlers

import (
	"github.com/openclaw/openclaw/pkg/gateway/protocol"
)

// UpdateRunHandler handles "update.run".
func UpdateRunHandler(opts HandlerOpts) error {
	opts.Respond(false, nil, &protocol.ErrorShape{
		Code:    "method_not_implemented",
		Message: "update.run not implemented",
	}, nil)
	return nil
}
