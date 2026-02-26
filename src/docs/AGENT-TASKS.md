# 多 Agent 协同任务清单

本文档用于多 Agent 并行迁移时的任务派发与状态追踪。每个 Agent 认领任务后，将状态更新为 `in_progress`，完成后改为 `done`。

**状态说明**：`pending` | `in_progress` | `done` | `blocked`

## 快速开始

1. **选择 Agent 角色**：B(Gateway)、C(Agent)、D(Channels)、E(Plugins)、F1/F2/F3(业务)、G(CLI)、H(集成)
2. **查看批次**：批次 1 可立即开始；批次 2 等 T2；批次 3 等 T2+T3；批次 4 等全部
3. **认领任务**：将对应任务状态改为 `in_progress`，在任务行末注明 `<!-- Agent X -->`
4. **完成**：改状态为 `done`，更新 `phase-N-contract.md` 中接口

---

## 批次 1：可立即开始（依赖 Phase 0 ✓）

### T2-GATEWAY: Agent B — Gateway 协议层

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T2-1 | WebSocket 协议帧、握手 schema | `src/gateway/protocol/` | `src_go/pkg/gateway/protocol/` | pending |
| T2-2 | HTTP 路由、auth 中间件 | `src/gateway/server-http.ts` | `src_go/pkg/gateway/http/` | pending |
| T2-3 | health、config、logs 等基础 handlers | `src/gateway/server-methods/health.ts` 等 | `src_go/pkg/gateway/handlers/` | pending |
| T2-4 | WebSocket 连接管理、方法路由 | `src/gateway/server.impl.ts` | `src_go/pkg/gateway/server/` | pending |

### T3-AGENT: Agent C — Agent 核心

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T3-1 | 引入 agentsdk-go，ModelFactory 适配 | - | `src_go/pkg/agent/runtime.go` | pending |
| T3-2 | 嵌入 runner（session、history） | `src/agents/pi-embedded-runner/` | `src_go/pkg/agent/embedded/` | pending |
| T3-3 | 工具注册、schema 适配 | `src/agents/pi-tools.ts` | `src_go/pkg/agent/tools/` | pending |
| T3-4 | 模型配置、auth | `src/agents/models-config*.ts` | `src_go/pkg/agent/models/` | pending |

### T7-CLI: Agent G — CLI 骨架

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T7-1 | Cobra 根命令、子命令注册 | `src/cli/program/build-program.ts` | `src_go/cmd/openclaw/root.go` | pending |
| T7-2 | gateway 子命令（run/stop/install） | `src/cli/gateway-cli/` | `src_go/cmd/openclaw/gateway/` | pending |
| T7-3 | agent 子命令 | `src/cli/program/register.agent.ts` | `src_go/cmd/openclaw/agent/` | pending |
| T7-4 | node 子命令 | `src/cli/node-cli/` | `src_go/cmd/openclaw/node/` | pending |

---

## 批次 2：依赖 T2 完成

### T4-CHANNELS: Agent D — 通道层

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T4-1 | channels-core、registry、types | `src/channels/` | `src_go/pkg/channels/` | pending |
| T4-2 | Discord | `src/discord/` | `src_go/pkg/channels/discord/` | pending |
| T4-3 | Telegram | `src/telegram/` | `src_go/pkg/channels/telegram/` | pending |
| T4-4 | Slack | `src/slack/` | `src_go/pkg/channels/slack/` | pending |
| T4-5 | WhatsApp | `src/web/` + `src/whatsapp/` | `src_go/pkg/channels/whatsapp/` | pending |

### T5-PLUGINS: Agent E — 插件扩展

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T5-1 | plugin-sdk 类型、接口 | `src/plugin-sdk/` | `src_go/pkg/plugin-sdk/` | pending |
| T5-2 | 插件加载、registry | `src/plugins/` | `src_go/pkg/plugins/` | pending |

---

## 批次 3：依赖 T2、T3 完成

### T6-F1: Agent F1 — Auto-Reply、Routing、Pairing、Infra、Media

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T6-F1-1 | routing | `src/routing/` | `src_go/pkg/routing/` | pending |
| T6-F1-2 | pairing | `src/pairing/` | `src_go/pkg/pairing/` | pending |
| T6-F1-3 | infra | `src/infra/` | `src_go/pkg/infra/` | pending |
| T6-F1-4 | media | `src/media/` | `src_go/pkg/media/` | pending |
| T6-F1-5 | auto-reply 核心、queue、dispatch | `src/auto-reply/` | `src_go/pkg/auto-reply/` | pending |

### T6-F2: Agent F2 — Hooks、ACP

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T6-F2-1 | hooks-core、loader、config | `src/hooks/` | `src_go/pkg/hooks/` | pending |
| T6-F2-2 | bundled hooks | `src/hooks/bundled/` | `src_go/pkg/hooks/bundled/` | pending |
| T6-F2-3 | ACP server、client、translator | `src/acp/` | `src_go/pkg/acp/` | pending |

### T6-F3: Agent F3 — Cron、Memory

| 任务 ID | 描述 | 源路径 | 目标路径 | 状态 |
|---------|------|--------|----------|------|
| T6-F3-1 | cron service、schedule、store | `src/cron/` | `src_go/pkg/cron/` | pending |
| T6-F3-2 | memory manager、embeddings、search | `src/memory/` | `src_go/pkg/memory/` | pending |

---

## 批次 4：依赖全部完成

### T8-INTEG: Agent H — 集成

| 任务 ID | 描述 | 状态 |
|---------|------|------|
| T8-1 | 端到端 Gateway 启动、WebSocket 握手 | pending |
| T8-2 | 前端 UI 对接验证 | pending |
| T8-3 | CLI 命令全链路测试 | pending |
| T8-4 | 文档、README 更新 | pending |

---

## 认领与更新流程

1. **认领**：将对应任务的 `status` 改为 `in_progress`，在注释中注明 Agent 标识（如 `Agent B`）
2. **完成**：将 `status` 改为 `done`，更新 `src_go/docs/phase-N-contract.md` 中相关接口
3. **阻塞**：若依赖未就绪，设为 `blocked` 并写明依赖任务 ID

---

## 并行示意

```
批次 1（并行）:  [T2] [T3] [T7]
        ↓
批次 2（并行）:  [T4] [T5]   (等 T2)
        ↓
批次 3（并行）:  [T6-F1] [T6-F2] [T6-F3]   (等 T2,T3)
        ↓
批次 4:          [T8]   (等全部)
```
