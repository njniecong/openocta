// Package feishu provides the Feishu (飞书) channel plugin.
package feishu

import (
	"github.com/openclaw/openclaw/pkg/channels"
)

const channelID = "feishu"

// Plugin is the Feishu channel plugin.
var Plugin = &channels.BasePlugin{
	Id:       channelID,
	MetaData: meta,
}

var meta = channels.ChannelMeta{
	ID:             channelID,
	Label:          "Feishu",
	SelectionLabel: "Feishu/Lark (飞书)",
	DocsPath:       "/channels/feishu",
	DocsLabel:      "feishu",
	Blurb:          "飞书/Lark 企业通讯，支持 IM 消息与卡片。",
	SystemImage:    "message-square",
	Order:          70,
}
