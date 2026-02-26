// Package feishu provides outbound adapter for Feishu IM messages.
// Uses larksuite/oapi-sdk-go/v3 Client.Im for message create.
// Config: channels.feishu.appId, appSecret (or accounts.<id>.*)
package feishu

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	lark "github.com/larksuite/oapi-sdk-go/v3"
	larkim "github.com/larksuite/oapi-sdk-go/v3/service/im/v1"
	"github.com/openclaw/openclaw/pkg/config"
	"github.com/openclaw/openclaw/pkg/outbound"
)

// Adapter sends messages via Feishu IM API.
type Adapter struct {
	loadConfig func() (*config.OpenClawConfig, error)
}

// NewAdapter creates a Feishu outbound adapter.
func NewAdapter(loadConfig func() (*config.OpenClawConfig, error)) *Adapter {
	return &Adapter{loadConfig: loadConfig}
}

func (a *Adapter) getCreds() (appId, appSecret string, err error) {
	cfg, err := a.loadConfig()
	if err != nil || cfg == nil || cfg.Channels == nil || cfg.Channels.Feishu == nil {
		return "", "", fmt.Errorf("feishu not configured")
	}
	m := extractFeishuCreds(cfg.Channels.Feishu)
	if m == nil {
		return "", "", fmt.Errorf("feishu credentials not found")
	}
	appId, _ = m["appId"].(string)
	appSecret, _ = m["appSecret"].(string)
	if appId == "" || appSecret == "" {
		return "", "", fmt.Errorf("feishu appId and appSecret required")
	}
	return appId, appSecret, nil
}

func extractFeishuCreds(f map[string]interface{}) map[string]interface{} {
	if f == nil {
		return nil
	}
	if _, ok := f["appId"]; ok {
		return f
	}
	if acc, ok := f["accounts"].(map[string]interface{}); ok {
		if m, ok := acc["default"].(map[string]interface{}); ok {
			return m
		}
		for _, v := range acc {
			if m, ok := v.(map[string]interface{}); ok {
				return m
			}
		}
	}
	return nil
}

// resolveReceiveIdType infers open_id, user_id, or chat_id from the target string.
func resolveReceiveIdType(to string) string {
	to = strings.TrimSpace(strings.ToLower(to))
	if strings.HasPrefix(to, "chat:") || strings.HasPrefix(to, "oc_") {
		return "chat_id"
	}
	if strings.HasPrefix(to, "user:") || strings.HasPrefix(to, "ou_") {
		return "open_id"
	}
	// Default: open_id (most common for DMs)
	return "open_id"
}

// normalizeTarget strips user:/chat: prefix and returns the raw ID.
func normalizeTarget(to string) string {
	to = strings.TrimSpace(to)
	for _, prefix := range []string{"user:", "chat:", "open_id:"} {
		if strings.HasPrefix(strings.ToLower(to), prefix) {
			return strings.TrimSpace(to[len(prefix):])
		}
	}
	return to
}

// buildPostContent creates Feishu post message content (markdown).
func buildPostContent(text string) string {
	body := map[string]interface{}{
		"zh_cn": map[string]interface{}{
			"content": [][]map[string]string{
				{{"tag": "md", "text": text}},
			},
		},
	}
	b, _ := json.Marshal(body)
	return string(b)
}

// SendText sends a text message to the given receive_id (open_id, user_id, or chat_id).
func (a *Adapter) SendText(ctx context.Context, c *outbound.OutboundContext) (*outbound.DeliveryResult, error) {
	appId, appSecret, err := a.getCreds()
	if err != nil {
		return nil, err
	}
	to := normalizeTarget(c.To)
	if to == "" {
		return nil, fmt.Errorf("feishu: to (receive_id) required")
	}
	receiveIdType := resolveReceiveIdType(c.To)
	if strings.HasPrefix(strings.ToLower(strings.TrimSpace(c.To)), "chat:") {
		receiveIdType = "chat_id"
	}

	client := lark.NewClient(appId, appSecret)
	content := buildPostContent(c.Text)

	req := larkim.NewCreateMessageReqBuilder().
		ReceiveIdType(receiveIdType).
		Body(larkim.NewCreateMessageReqBodyBuilder().
			ReceiveId(to).
			MsgType("post").
			Content(content).
			Build()).
		Build()

	resp, err := client.Im.V1.Message.Create(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("feishu send: %w", err)
	}
	if !resp.Success() {
		return nil, fmt.Errorf("feishu send failed: %s", resp.Msg)
	}
	if resp.Data == nil {
		return nil, fmt.Errorf("feishu send: no message_id in response")
	}

	msgId := ""
	if resp.Data.MessageId != nil {
		msgId = *resp.Data.MessageId
	}
	return &outbound.DeliveryResult{
		Channel:   channelID,
		MessageID: msgId,
		ChatID:    to,
	}, nil
}

// SendMedia sends media - Feishu supports image/file via different APIs; fallback to text with URL.
func (a *Adapter) SendMedia(ctx context.Context, c *outbound.OutboundContext) (*outbound.DeliveryResult, error) {
	if c.MediaURL == "" {
		return nil, fmt.Errorf("feishu: mediaUrl required for SendMedia")
	}
	text := c.Text
	if text == "" {
		text = c.MediaURL
	} else {
		text = text + "\n" + c.MediaURL
	}
	oc := &outbound.OutboundContext{
		To:   c.To,
		Text: text,
	}
	return a.SendText(ctx, oc)
}
