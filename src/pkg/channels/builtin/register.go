// Package builtin registers built-in channel plugins.
package builtin

import (
	"github.com/openclaw/openclaw/pkg/channels"
	"github.com/openclaw/openclaw/pkg/channels/dingtalk"
	"github.com/openclaw/openclaw/pkg/channels/discord"
	"github.com/openclaw/openclaw/pkg/channels/feishu"
	"github.com/openclaw/openclaw/pkg/channels/slack"
	"github.com/openclaw/openclaw/pkg/channels/telegram"
	"github.com/openclaw/openclaw/pkg/channels/whatsapp"
)

// Register adds all built-in channel plugins to the registry.
func Register(r *channels.Registry) {
	if r == nil {
		return
	}
	r.Register(discord.Plugin)
	r.Register(telegram.Plugin)
	r.Register(whatsapp.Plugin)
	r.Register(slack.Plugin)
	r.Register(dingtalk.Plugin)
	r.Register(feishu.Plugin)
}
