// Package runtime: builtin tools from agentsdk-go (bash, file_read, grep, etc.).
package runtime

import (
	"github.com/cexll/agentsdk-go/pkg/runtime/tasks"
	"github.com/cexll/agentsdk-go/pkg/security"
	"github.com/cexll/agentsdk-go/pkg/tool"
	toolbuiltin "github.com/cexll/agentsdk-go/pkg/tool/builtin"
)

// BuiltinTools returns the list of built-in tools from agentsdk-go, rooted at projectRoot.
// Includes: Bash, Read, Write, Edit, Grep, Glob, WebFetch, WebSearch, BashOutput, BashStatus,
// KillTask, TaskCreate, TaskList, TaskGet, TaskUpdate, AskUserQuestion.
// TaskStore is created in-memory and shared by task_* tools. Skill, SlashCommand, and Task
// are not included (they require runtime registry/executor or runner wiring).
// When sandboxDisabled is true, tools use security.NewDisabledSandbox() so path/permission
// validation is skipped (matches config.security.sandbox.enabled: false).
func BuiltinTools(projectRoot string, sandboxDisabled bool) []tool.Tool {
	if projectRoot == "" {
		projectRoot = "."
	}
	taskStore := tasks.NewTaskStore()

	// When sandbox disabled, use NewDisabledSandbox so tools skip path validation.
	bash := toolbuiltin.NewBashToolWithRoot(projectRoot)
	read := toolbuiltin.NewReadToolWithRoot(projectRoot)
	write := toolbuiltin.NewWriteToolWithRoot(projectRoot)
	edit := toolbuiltin.NewEditToolWithRoot(projectRoot)
	grep := toolbuiltin.NewGrepToolWithRoot(projectRoot)
	glob := toolbuiltin.NewGlobToolWithRoot(projectRoot)
	if sandboxDisabled {
		disabled := security.NewDisabledSandbox()
		bash = toolbuiltin.NewBashToolWithSandbox(projectRoot, disabled)
		read = toolbuiltin.NewReadToolWithSandbox(projectRoot, disabled)
		write = toolbuiltin.NewWriteToolWithSandbox(projectRoot, disabled)
		edit = toolbuiltin.NewEditToolWithSandbox(projectRoot, disabled)
		grep = toolbuiltin.NewGrepToolWithSandbox(projectRoot, disabled)
		grep.SetRespectGitignore(true)
		glob = toolbuiltin.NewGlobToolWithSandbox(projectRoot, disabled)
		glob.SetRespectGitignore(true)
	}

	return []tool.Tool{
		bash,
		read,
		write,
		edit,
		grep,
		glob,
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
