# Octopus

基于 [OpenClaw](https://github.com/openclaw/openclaw) 的 Go 后端 + Control UI 前端一体化项目。后端由 TypeScript/Node.js 迁移至 Go，与 Gateway WebSocket 协议及官方 Control UI 行为兼容。

---

## 为什么基于 OpenClaw 迁移

### OpenClaw 为何不适合企业级应用

- **技术栈与运维成本**：Node.js/TypeScript 运行时依赖多、进程模型偏重，在企业无桌面服务器上部署与资源占用不如单一 Go 二进制友好；企业环境更倾向可审计、易打包（如单一二进制、容器镜像）的部署形态。
- **扩展与集成方式**：原有架构面向桌面与多通道（Slack、飞书等）的「个人助理」场景，插件与 Skill 体系偏消费端；企业级需要与内部系统、监控、工单、API 深度集成，需要更可控的后端扩展点和标准化接口。
- **安全与合规**：企业部署通常要求无桌面、最小化暴露面、集中管控；OpenClaw 的桌面/多端能力与这类「仅服务器、仅 CLI/API」的需求不完全对齐，迁移到 Go 体系便于做权限、审计与部署形态的收敛。

### 为何迁移到 Go + agentsdk-go

- **统一运行时**：Go 单一二进制，无额外 Node 运行时，适合无桌面 Linux/容器化部署，启动快、内存占用可控。
- **与官方 SDK 对齐**：后端 Agent 使用 [agentsdk-go](https://github.com/cexll/agentsdk-go)（Anthropic API 的 Go SDK 生态），与官方模型与 API 演进一致，便于跟进、减少自维护协议层。
- **协议兼容**：保留与 OpenClaw Gateway 的 WebSocket 协议及 Control UI 的兼容，便于从现有 OpenClaw 部署平滑迁移或并存。

### 优缺点概览

| 维度 | 优点 | 缺点 / 注意点 |
|------|------|----------------|
| **部署与运维** | 单一二进制、无 Node 依赖、易容器化、适合无桌面服务器 | 需重新构建/发布 Go 版本，与上游 OpenClaw 功能需主动同步 |
| **性能与资源** | 内存与 CPU 占用更可控，启动快 | 复杂 UI/前端仍为独立前端项目，后端仅负责 Gateway/Agent |
| **企业集成** | 便于对接内部 API、监控、CLI，扩展点更清晰 | 企业定制需在本仓库内维护，与上游功能分叉需有策略 |
| **生态与协议** | agentsdk-go 与官方对齐，Gateway 协议兼容现有 Control UI | 部分 OpenClaw 原生的桌面/多通道能力不在此项目主路径，需按需裁剪或替代 |

### 与其他方案对比：Go + langchaingo / Python + LangChain

- **Go + langchaingo**：langchaingo 是通用 LLM 编排库，抽象层较高，适合接多家模型与工具，但在 Anthropic Agent 场景下仍需自定义较多封装，特别是对工具调用、会话状态、流式输出等；同时，Gateway 协议与 Control UI 行为需要额外适配层来桥接。
- **Python + LangChain**：生态成熟、示例众多，适合快速原型与科研类应用，但在企业无桌面服务器上的长期运维会引入更多依赖与环境管理复杂度（虚拟环境、依赖冲突、启动开销等），与本仓库的 Go 代码与部署策略也会形成双语言栈割裂。
- **本项目选择：Go + agentsdk-go**：在语言层面与 Gateway/后端完全统一，同时直接对接 Anthropic 官方 API 生态（agentsdk-go），减少自建编排框架与 glue code 的成本；在保持足够扩展性的前提下，优先满足企业场景下的**可维护性、可部署性与协议兼容**，更符合本仓库「企业级、以运维/可观测为核心」的长期定位。

---

## 后续关注领域与业务

本项目后续将**重点放在运维与可观测领域**，以及**多维度数据整合与利用**的业务场景：

- **运维 / 可观测**：围绕日志、指标、链路、告警、变更等可观测数据，让 Agent 能理解系统状态、参与排障与决策（如与 Prometheus、Grafana、日志平台、工单系统对接）。
- **多维度数据整合**：将多源数据（监控、日志、配置、CMDB、工单、知识库等）接入同一套 Agent 能力，形成「集中大脑」——更多数据源、更多数据碰撞，支撑根因分析、影响面评估、合规检查等**企业级价值**场景。
- **价值目标**：通过统一入口（CLI/API）与可扩展的 Skill/工具，让企业在一个可控的后端上实现「可观测数据 + AI」的闭环，而不是分散的、仅桌面端的助手。

---

## 项目范围与部署目标

- **不关注桌面端操作**：不主打 macOS/Windows 桌面 UI 自动化、本地应用控制等；这些能力不在本项目主路径。
- **侧重命令行与接口**：主要交互方式为 **CLI**（如 `openclaw agent -m "..."`、子命令与管道）以及 **HTTP/WebSocket 接口**（Gateway API、未来可能的 REST/Webhook），便于被脚本、流水线、其他服务调用。
- **部署目标**：**面向无桌面环境的企业服务器**——如 Linux 服务器、容器、K8s 内 Pod、跳板机或内网 API 服务，以 headless 方式运行 Gateway 与 Agent，通过 CLI 与 API 对外提供服务。

---

## 项目结构

```
OctopusClaw/
├── src/                    # Go 后端（Gateway、Agent、Channels、Cron 等）
│   ├── cmd/openclaw/       # CLI 入口与子命令
│   ├── pkg/                # 核心模块
│   └── README.md           # 后端详细说明
├── ui/                     # Control UI 前端（Lit + Vite，WebSocket 控制面）
│   └── README.md           # 前端详细说明
├── dist/control-ui/        # 前端构建产物（可由 Gateway 托管）
└── docs/                   # 文档与迁移计划
```

- **后端**：Go 1.24+，提供 Gateway HTTP + WebSocket、Agent、Channels、Cron、Config 等能力。
- **前端**：Control UI，通过 WebSocket 连接 Gateway，管理会话、配置、通道、Cron、Skills、Nodes 等。

## 要求

- **Go 1.24+**（后端）
- **Node ≥18**（前端开发，可选；生产可仅使用已构建的 `dist/control-ui`）
- 环境变量 **`ANTHROPIC_API_KEY`**（仅在使用 `agent` 命令时需要）

## 快速开始

### 1. 构建与运行后端

```bash
# 进入后端目录
cd src

# 构建
go build -o openclaw ./cmd/openclaw

# 启动 Gateway（默认端口 18789）
go run ./cmd/openclaw gateway run
# 或
./openclaw gateway run
```

Gateway 启动后，默认在 `http://127.0.0.1:18789` 提供 HTTP 与 WebSocket。若已将 Control UI 构建产物放到 Gateway 的静态目录，则可通过同一端口访问 Control UI。

### 2. 开发 / 运行前端（可选）

```bash
# 进入前端目录
cd ui

# 安装依赖（pnpm 推荐）
pnpm install

# 开发模式（默认 http://localhost:5173，可配置连接后端 Gateway）
pnpm dev

# 构建（输出到 dist/control-ui）
pnpm build
```

前端开发服务器可配置 Gateway WebSocket URL，与本地或远程 Gateway 联调。

### 3. 运行 Agent（需 ANTHROPIC_API_KEY）

```bash
cd src
export ANTHROPIC_API_KEY=your-key
go run ./cmd/openclaw agent -m "Hello, echo test"
```

## 主要命令（后端）

| 命令 | 说明 |
|------|------|
| `gateway run` | 启动 Gateway HTTP + WebSocket 服务（默认端口 18789） |
| `agent -m <msg>` | 本地执行 Agent（agentsdk-go + DefaultTools） |
| `node` | Node 控制（占位） |

## 环境变量

| 变量 | 说明 |
|------|------|
| `OPENCLAW_STATE_DIR` | 状态目录（默认 `~/.openclaw`） |
| `OPENCLAW_CONFIG_PATH` | 配置文件路径 |
| `OPENCLAW_SKIP_CHANNELS` | 设为 `1` 跳过 channel 加载 |
| `OPENCLAW_SKIP_CRON` | 设为 `1` 跳过 Cron 服务 |
| `OPENCLAW_SKIP_PROVIDERS` | 同 `SKIP_CHANNELS` 的兼容别名 |
| `ANTHROPIC_API_KEY` | Agent 模型认证（`agent` 命令必填） |

## 子项目说明

| 子项目 | 路径 | 说明 |
|--------|------|------|
| **Go 后端** | [src/](src/) | Gateway、Agent、Channels、Cron、Config 等，详见 [src/README.md](src/README.md) |
| **Control UI** | [ui/](ui/) | Lit + Vite 单页应用，WebSocket 连接 Gateway，详见 [ui/README.md](ui/README.md) |

## 测试

```bash
# 后端测试
cd src && go test ./...

# 前端测试
cd ui && pnpm test
```

后端协议兼容性测试位于 `src/test/gateway_protocol_test.go`，覆盖 connect/hello-ok、health 及 frame 序列化。

## 文档与参考

- [OpenClaw 官方](https://github.com/openclaw/openclaw) — 上游项目
- [docs.openclaw.ai](https://docs.openclaw.ai) — 官方文档
- [Gateway 协议](https://docs.openclaw.ai/gateway) — WebSocket 握手与 req/res 格式
- [src/README.md](src/README.md) — 后端模块、迁移状态与文档链接
- [ui/README.md](ui/README.md) — Control UI 功能、脚本与结构说明

## 迁移状态

Go 迁移任务已完成，详见仓库内：

- `docs/refactor/GO-MIGRATION-PLAN.md` — 迁移计划
- `docs/refactor/GO-MIGRATION-TASKS.md` — 任务派发表
