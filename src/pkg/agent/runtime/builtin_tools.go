// Package runtime: builtin tools from agentsdk-go (bash, file_read, grep, etc.).
package runtime

import (
	"github.com/cexll/agentsdk-go/pkg/runtime/tasks"
	"github.com/cexll/agentsdk-go/pkg/tool"
	toolbuiltin "github.com/cexll/agentsdk-go/pkg/tool/builtin"
)

// BuiltinTools returns the list of built-in tools from agentsdk-go, rooted at projectRoot.
// Includes: Bash, Read, Write, Edit, Grep, Glob, WebFetch, WebSearch, BashOutput, BashStatus,
// KillTask, TaskCreate, TaskList, TaskGet, TaskUpdate, AskUserQuestion.
// TaskStore is created in-memory and shared by task_* tools. Skill, SlashCommand, and Task
// are not included (they require runtime registry/executor or runner wiring).
func BuiltinTools(projectRoot string) []tool.Tool {
	if projectRoot == "" {
		projectRoot = "."
	}
	taskStore := tasks.NewTaskStore()

	return []tool.Tool{
		toolbuiltin.NewBashToolWithRoot(projectRoot),
		toolbuiltin.NewReadToolWithRoot(projectRoot),
		toolbuiltin.NewWriteToolWithRoot(projectRoot),
		toolbuiltin.NewEditToolWithRoot(projectRoot),
		toolbuiltin.NewGrepToolWithRoot(projectRoot),
		toolbuiltin.NewGlobToolWithRoot(projectRoot),
		toolbuiltin.NewWebFetchTool(nil),
		toolbuiltin.NewWebSearchTool(nil),
		toolbuiltin.NewBashOutputTool(nil),
		toolbuiltin.NewBashStatusTool(),
		toolbuiltin.NewKillTaskTool(),
		toolbuiltin.NewTaskCreateTool(taskStore),
		toolbuiltin.NewTaskListTool(taskStore),
		toolbuiltin.NewTaskGetTool(taskStore),
		toolbuiltin.NewTaskUpdateTool(taskStore),
		toolbuiltin.NewAskUserQuestionTool(),
	}
}
