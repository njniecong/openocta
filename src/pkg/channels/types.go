// Package channels provides channel abstraction and registry.
package channels

// ChannelId identifies a channel (e.g. "telegram", "whatsapp", "discord").
type ChannelId = string

// ChannelMeta holds channel metadata.
type ChannelMeta struct {
	ID             string   `json:"id"`
	Label          string   `json:"label"`
	SelectionLabel string   `json:"selectionLabel,omitempty"`
	DocsPath       string   `json:"docsPath,omitempty"`
	DocsLabel      string   `json:"docsLabel,omitempty"`
	Blurb          string   `json:"blurb,omitempty"`
	Order          int      `json:"order,omitempty"`
	Aliases        []string `json:"aliases,omitempty"`
	SystemImage    string   `json:"systemImage,omitempty"`
}

// ChannelAccountSnapshot is a per-account status snapshot.
type ChannelAccountSnapshot struct {
	AccountID       string `json:"accountId"`
	Name            string `json:"name,omitempty"`
	Enabled         *bool  `json:"enabled,omitempty"`
	Configured      *bool  `json:"configured,omitempty"`
	Linked          *bool  `json:"linked,omitempty"`
	Running         *bool  `json:"running,omitempty"`
	Connected       *bool  `json:"connected,omitempty"`
	LastConnectedAt *int64 `json:"lastConnectedAt,omitempty"`
	LastError       string `json:"lastError,omitempty"`
}

// ChannelPlugin is the minimal plugin interface for Phase 4a.
type ChannelPlugin interface {
	ID() ChannelId
	Meta() ChannelMeta
	GatewayMethods() []string
}
