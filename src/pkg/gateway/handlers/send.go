package handlers

import (
	"context"
	"strings"

	"github.com/openclaw/openclaw/pkg/gateway/protocol"
	"github.com/openclaw/openclaw/pkg/outbound"
)

// DefaultChatChannel is the default channel for send (matches TS).
const DefaultChatChannel = "whatsapp"

// SendHandler handles "send".
func SendHandler(opts HandlerOpts) error {
	to, _ := opts.Params["to"].(string)
	to = strings.TrimSpace(to)
	if to == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInvalidRequest,
			Message: "send params: to (string) required",
		}, nil)
		return nil
	}

	message, _ := opts.Params["message"].(string)
	message = strings.TrimSpace(message)
	mediaUrl, _ := opts.Params["mediaUrl"].(string)
	mediaUrl = strings.TrimSpace(mediaUrl)
	channel, _ := opts.Params["channel"].(string)
	channel = strings.TrimSpace(channel)
	if channel == "" {
		channel = DefaultChatChannel
	}
	accountId, _ := opts.Params["accountId"].(string)
	accountId = strings.TrimSpace(accountId)

	if message == "" && mediaUrl == "" {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeInvalidRequest,
			Message: "send params: text or media is required",
		}, nil)
		return nil
	}

	hctx := opts.Context
	if hctx == nil || hctx.OutboundRegistry == nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    "method_not_implemented",
			Message: "send requires outbound registry",
		}, nil)
		return nil
	}

	oc := &outbound.OutboundContext{
		To:        to,
		Text:      message,
		MediaURL:  mediaUrl,
		AccountID: accountId,
	}

	reqCtx := context.Background()
	var result *outbound.DeliveryResult
	var err error
	if mediaUrl != "" {
		result, err = hctx.OutboundRegistry.DeliverMedia(reqCtx, channel, oc)
	} else {
		result, err = hctx.OutboundRegistry.DeliverText(reqCtx, channel, oc)
	}
	if err != nil {
		opts.Respond(false, nil, &protocol.ErrorShape{
			Code:    protocol.ErrCodeServiceUnavailable,
			Message: err.Error(),
		}, nil)
		return nil
	}

	payload := map[string]interface{}{
		"channel":   result.Channel,
		"messageId": result.MessageID,
	}
	if result.ChatID != "" {
		payload["chatId"] = result.ChatID
	}
	opts.Respond(true, payload, nil, nil)
	return nil
}
