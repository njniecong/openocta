# OpenOcta Go 代码架构文档

## 1. 项目概述

**OpenOcta** 是一个 AI Agent/ChatOps 平台，支持：
- 桌面应用 (Wails)
- CLI 工具 (Cobra)
- 多渠道消息集成（飞书、钉钉、Slack、微信、企业微信、QQ、Telegram、Discord 等）
- Agent 运行时
- HTTP/WebSocket 网关
- 定时任务
- 会话管理
- 插件系统

## 2. 入口文件（3个）

| 入口 | 路径 | 用途 |
|------|------|------|
| **桌面应用** | `src/main.go` | Wails 桌面应用，内置 Gateway (端口 18900) |
| **CLI 程序** | `src/cmd/openocta/main.go` | 命令行工具 (`./openocta gateway/agent/node`) |
| **桌面启动器** | `src/cmd/openocta-launcher/main.go` | 启动 Gateway 并打开浏览器 |

### 2.1 桌面应用入口 (`src/main.go`)

- 启动 Gateway 在 goroutine 中
- 加载 Wails WebView 界面
- 监听端口 18900
- 使用 `desktop.StartGateway()` 启动服务

### 2.2 CLI 入口 (`src/cmd/openocta/main.go`)

- 使用 Cobra 框架
- 加载 `.env` 配置
- 调用 `commands.Execute()` 执行命令

## 3. 编译方式

### 3.1 Makefile 构建

```bash
# 构建 CLI（最常用）
make build        # = ui + embed + go

# 构建桌面应用
make wails        # 构建 Wails 桌面应用

# 开发模式运行
make run          # 构建后运行 Gateway (./openocta gateway run)
make run-ui       # 仅启动前端开发服务器

# 清理
make clean
```

### 3.2 Go 编译命令

```bash
# 构建 CLI 程序
cd src && go build -ldflags "-s -w" -o ../openocta ./cmd/openocta

# 构建桌面启动器
cd src && go build -ldflags "-s -w" -o ../openocta-launcher ./cmd/openocta-launcher

# Wails 开发模式
cd src && wails dev

# Wails 生产构建
cd src && wails build -skipbindings
```

### 3.3 Docker 构建

```bash
make docker
```

## 4. 业务代码结构

```
src/pkg/
├── agent/                  # Agent 核心
│   └── runtime/           # Agent 运行时（runtime.go:38-284 创建 Runtime）
│
├── gateway/               # HTTP/WebSocket 网关服务
│   ├── http/             # HTTP 服务器、认证、API 处理器
│   ├── ws/              # WebSocket hub
│   └── handlers/        # 各类 Handler (chat, auth, config, files...)
│
├── channels/             # 多渠道集成
│   ├── feishu/          # 飞书
│   ├── dingtalk/        # 钉钉
│   ├── slack/
│   ├── wecom/           # 企业微信
│   ├── wxpwork/         # 微信企业版
│   └── ...
│
├── session/              # 会话管理
├── cron/                 # 定时任务调度
├── employees/            # 员工/用户管理
├── memory/               # 记忆/上下文存储
├── acp/                  # ACP 协议处理
├── mcp/                  # MCP (Model Context Protocol) 支持
├── autoreply/           # 自动回复
├── outbound/            # 出站消息处理
├── hooks/               # 钩子机制
├── config/              # 配置管理
├── security/            # 安全相关
├── plugin-sdk/          # 插件 SDK
├── desktop/             # 桌面模式支持
├── paths/               # 路径解析
├── logging/             # 日志
├── init/                # 初始化
└── utils/               # 工具函数
```

## 5. 快速定位业务逻辑

### 5.1 消息处理流程

1. 消息进入 → `pkg/channels/` → 选择对应渠道 → handler 处理
2. 业务逻辑 → `pkg/gateway/handlers/` → HTTP handlers
3. Agent 执行 → `pkg/agent/runtime/runtime.go` 的 `Run()` 方法

### 5.2 关键文件索引

| 文件 | 说明 | 关键位置 |
|------|------|----------|
| `src/main.go` | 桌面应用 main | 第 47 行：main 函数 |
| `src/cmd/openocta/commands/root.go` | CLI 根命令 | 命令定义 |
| `pkg/gateway/handlers/` | HTTP API handlers | 请求处理 |
| `pkg/agent/runtime/runtime.go` | Agent 运行时 | `New()` 创建，`Run()` 执行 |
| `pkg/config/` | 配置管理 | 配置加载和验证 |
| `pkg/session/` | 会话管理 | 会话创建和追踪 |

### 5.3 依赖关系

```
main.go
├── desktop.StartGateway()
│   └── gatewayhttp.Server
│       ├── http.Handler
│       │   └── handlers (chat, auth, config, files...)
│       └── ws.Hub
└── agent runtime
    └── channels (feishu, dingtalk, slack, ...)
```

## 6. 配置

- 模块名: `github.com/openocta/openocta`
- Go 版本: `1.25`
- 配置文件: `src/openocta.json.example`
- 环境变量: `.env`

## 7. 主要依赖

| 依赖 | 版本 | 用途 |
|------|------|------|
| wailsapp/wails/v2 | v2.11.0 | 桌面应用框架 |
| gorilla/websocket | v1.5.3 | WebSocket |
| spf13/cobra | v1.8.1 | CLI 命令 |
| labstack/echo/v4 | v4.13.3 | HTTP 框架 |
| modernc.org/sqlite | v1.46.1 | SQLite 数据库 |
| larksuite/oapi-sdk-go/v3 | v3.5.3 | 飞书 SDK |
| anthropic/anthropic-sdk-go | v1.18.0 | Anthropic AI |
| open-dingtalk/dingtalk-stream-sdk-go | v0.9.1 | 钉钉 SDK |
| tencent-connect/botgo | v0.2.1 | QQ 机器人 SDK |