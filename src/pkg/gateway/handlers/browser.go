package handlers

import (
	"github.com/openclaw/openclaw/pkg/gateway/protocol"
)

// BrowserRequestHandler handles "browser.request".
func BrowserRequestHandler(opts HandlerOpts) error {
	opts.Respond(false, nil, &protocol.ErrorShape{
		Code:    "method_not_implemented",
		Message: "browser.request not implemented",
	}, nil)
	return nil
}
