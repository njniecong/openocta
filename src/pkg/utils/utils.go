package utils

import (
	"encoding/json"
	"math"
	"regexp"
	"strings"
)

// Clamp constrains value between min and max.
func Clamp(value, min, max float64) float64 {
	return math.Max(min, math.Min(max, value))
}

// ClampInt constrains an integer value between min and max.
func ClampInt(value, min, max int) int {
	v := int(math.Floor(float64(value)))
	if v < min {
		return min
	}
	if v > max {
		return max
	}
	return v
}

// EscapeRegExp escapes special regex characters for use in a regex.
func EscapeRegExp(s string) string {
	return regexp.QuoteMeta(s)
}

// SafeParseJSON parses JSON, returning nil on error instead of panicking.
func SafeParseJSON[T any](raw string) (*T, bool) {
	var v T
	if err := json.Unmarshal([]byte(raw), &v); err != nil {
		return nil, false
	}
	return &v, true
}

// IsTruthyEnvValue returns true if the env value is truthy (1, true, yes, on).
func IsTruthyEnvValue(v string) bool {
	switch strings.ToLower(strings.TrimSpace(v)) {
	case "1", "true", "yes", "on":
		return true
	}
	return false
}
