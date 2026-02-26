package cron

// Deps are dependencies for executing cron jobs (injected by the gateway).
type Deps struct {
	// EnqueueSystemEvent enqueues a system event for the main session.
	EnqueueSystemEvent func(text string)
	// RequestHeartbeatNow requests an immediate heartbeat run.
	RequestHeartbeatNow func(reason string)
	// RunIsolatedAgentJob runs one isolated agent turn (sessionKey = cron:jobId).
	RunIsolatedAgentJob func(job CronJob, message string)
}
