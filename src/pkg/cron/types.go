// Package cron provides cron job scheduling and storage.
package cron

// CronSchedule defines when a job runs.
type CronSchedule struct {
	Kind     string `json:"kind"` // "at" | "every" | "cron"
	At       string `json:"at,omitempty"`
	EveryMs  int64  `json:"everyMs,omitempty"`
	AnchorMs *int64 `json:"anchorMs,omitempty"`
	Expr     string `json:"expr,omitempty"`
	Tz       string `json:"tz,omitempty"`
}

// CronDelivery defines how to deliver job output.
type CronDelivery struct {
	Mode       string `json:"mode"` // "none" | "announce"
	Channel    string `json:"channel,omitempty"`
	To         string `json:"to,omitempty"`
	BestEffort bool   `json:"bestEffort,omitempty"`
}

// CronPayload is the job payload.
type CronPayload struct {
	Kind    string `json:"kind"` // "systemEvent" | "agentTurn"
	Text    string `json:"text,omitempty"`
	Message string `json:"message,omitempty"`
}

// CronJobState holds runtime state.
type CronJobState struct {
	NextRunAtMs       *int64 `json:"nextRunAtMs,omitempty"`
	RunningAtMs       *int64 `json:"runningAtMs,omitempty"`
	LastRunAtMs       *int64 `json:"lastRunAtMs,omitempty"`
	LastStatus        string `json:"lastStatus,omitempty"`
	LastError         string `json:"lastError,omitempty"`
	LastDurationMs    *int64 `json:"lastDurationMs,omitempty"`
	ConsecutiveErrors int    `json:"consecutiveErrors,omitempty"`
}

// CronJob is a scheduled job.
type CronJob struct {
	ID             string        `json:"id"`
	AgentID        string        `json:"agentId,omitempty"`
	Name           string        `json:"name"`
	Description    string        `json:"description,omitempty"`
	Enabled        bool          `json:"enabled"`
	DeleteAfterRun bool          `json:"deleteAfterRun,omitempty"`
	CreatedAtMs    int64         `json:"createdAtMs"`
	UpdatedAtMs    int64         `json:"updatedAtMs"`
	Schedule       CronSchedule  `json:"schedule"`
	SessionTarget  string        `json:"sessionTarget"`
	WakeMode       string        `json:"wakeMode"`
	Payload        CronPayload   `json:"payload"`
	Delivery       *CronDelivery `json:"delivery,omitempty"`
	State          CronJobState  `json:"state"`
}

// StoreFile is the persistent store format.
type StoreFile struct {
	Version int       `json:"version"`
	Jobs    []CronJob `json:"jobs"`
}
