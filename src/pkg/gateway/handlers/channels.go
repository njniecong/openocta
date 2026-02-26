package handlers

// ChannelsStatusResult is the channels.status response format.
type ChannelsStatusResult struct {
	Channels     map[string]interface{} `json:"channels"`
	ChannelOrder []string               `json:"channelOrder"`
}

// ChannelsStatusHandler handles "channels.status".
func ChannelsStatusHandler(opts HandlerOpts) error {
	ctx := opts.Context
	if ctx == nil || ctx.ChannelRegistry == nil {
		opts.Respond(true, &ChannelsStatusResult{
			Channels:     map[string]interface{}{},
			ChannelOrder: []string{},
		}, nil, nil)
		return nil
	}
	plugins := ctx.ChannelRegistry.List()
	ch := make(map[string]interface{})
	order := make([]string, 0, len(plugins))
	for _, p := range plugins {
		id := p.ID()
		meta := p.Meta()
		ch[id] = map[string]interface{}{
			"id":       meta.ID,
			"label":    meta.Label,
			"order":    meta.Order,
			"accounts": map[string]interface{}{},
		}
		order = append(order, id)
	}
	opts.Respond(true, &ChannelsStatusResult{
		Channels:     ch,
		ChannelOrder: order,
	}, nil, nil)
	return nil
}
