# OpenOcta 前后端分离 Vue3 重构方案

## 一、目标

将现有基于 Lit Web Components 的前端改为 **Vue3 + TypeScript + Element Plus**，实现前后端分离部署，后端逻辑保持不变。

## 二、架构设计

```
┌─────────────────────────────────┐    ┌─────────────────────────────────┐
│       Vue3 Frontend (NEW)        │    │       Go Backend               │
│   ┌─────────────────────────┐   │    │   ┌─────────────────────────┐   │
│   │  Vue3 + TypeScript      │   │    │   │  Gateway HTTP Server    │   │
│   │  Element Plus           │◄──┼────┼──►│  :18900 REST + WS       │   │
│   │  Pinia                  │   │    │   │                         │   │
│   │  Vue Router              │   │    │   │  Agent Runtime          │   │
│   └─────────────────────────┘   │    │   │  Channels (飞书/钉钉等)   │   │
│            ▲                   │    │   └─────────────────────────┘   │
│            │                   │    └─────────────────────────────────┘
│   ┌────────┴─────────┐        │
│   │  前端独立部署    │        │
│   │  (nginx/容器)    │        │
└───┴──────────────────┴────────┘
```

## 三、需要新增的文件

### 3.1 项目脚手架

| 文件路径 | 说明 |
|----------|------|
| `frontend/package.json` | Vue3 项目依赖 |
| `frontend/vite.config.ts` | Vite 构建配置 |
| `frontend/tsconfig.json` | TypeScript 配置 |
| `frontend/index.html` | 入口 HTML |
| `frontend/src/main.ts` | 应用入口 |
| `frontend/src/App.vue` | 根组件 |

### 3.2 路由系统

| 文件路径 | 说明 |
|----------|------|
| `frontend/src/router/index.ts` | Vue Router 路由定义 |
| `frontend/src/router/routes.ts` | 路由配置表 |

路由映射表：

| 路径 | 视图组件 | 功能 |
|------|----------|------|
| `/message` | MessageView.vue | 消息中心 |
| `/overview` | OverviewView.vue | 系统概览 |
| `/channels` | ChannelsView.vue | 渠道管理 |
| `/sessions` | SessionsView.vue | 会话管理 |
| `/skills` | SkillsView.vue | 技能管理 |
| `/config` | ConfigView.vue | 配置编辑 |
| `/models` | ModelsView.vue | 模型配置 |
| `/nodes` | NodesView.vue | 节点管理 |
| `/digital-employee` | DigitalEmployeeView.vue | 数字员工 |
| `/mcp` | McpView.vue | MCP 服务 |
| `/cron` | CronView.vue | 定时任务 |
| `/usage` | UsageView.vue | 用量统计 |
| `/logs` | LogsView.vue | 日志查看 |
| `/security` | SecurityView.vue | 安全配置 |
| `/skill-library` | SkillLibraryView.vue | 技能库市场 |
| `/tool-library` | ToolLibraryView.vue | 工具库市场 |
| `/employee-market` | EmployeeMarketView.vue | 员工市场 |
| `/model-library` | ModelLibraryView.vue | 模型库 |
| `/tutorials` | TutorialsView.vue | 教程 |
| `/about` | AboutView.vue | 关于 |

### 3.3 状态管理 (Pinia Stores)

| 文件路径 | 说明 |
|----------|------|
| `frontend/src/stores/gateway.ts` | WebSocket 连接状态、认证 |
| `frontend/src/stores/chat.ts` | 聊天消息、会话 |
| `frontend/src/stores/config.ts` | 应用配置 |
| `frontend/src/stores/sessions.ts` | 会话列表 |
| `frontend/src/stores/channels.ts` | 渠道状态 |

### 3.4 通信层 (Composables)

| 文件路径 | 说明 |
|----------|------|
| `frontend/src/composables/useGateway.ts` | Gateway WebSocket 请求封装 |
| `frontend/src/composables/useWebSocket.ts` | WebSocket 连接管理 |
| `frontend/src/services/api.ts` | HTTP API 封装 |

核心 API 方法：

| 方法 | 功能 |
|------|------|
| `chat.send` | 发送聊天消息 |
| `chat.history` | 加载历史消息 |
| `chat.abort` | 中止运行 |
| `channels.status` | 获取渠道状态 |
| `config.get` | 获取配置 |
| `config.patch` | 部分更新配置 |
| `sessions.list` | 列出会话 |
| `cron.status` | 定时任务状态 |
| `agents.list` | Agent 列表 |

### 3.5 视图组件

```
frontend/src/views/
├── message/
│   ├── MessageView.vue          # 消息主视图
│   ├── ChatSidebar.vue          # 会话列表侧边栏
│   ├── ChatInput.vue            # 消息输入框
│   └── MessageList.vue          # 消息列表
├── channels/
│   ├── ChannelsView.vue         # 渠道管理主视图
│   ├── WeWorkConfig.vue         # 企微配置
│   └── WeixinConfig.vue         # 微信配置
├── config/
│   ├── ConfigView.vue           # 配置主视图
│   └── ConfigForm.vue           # 配置表单
├── skills/
│   └── SkillsView.vue           # 技能管理
├── overview/
│   └── OverviewView.vue         # 系统概览
└── ... (其他视图)
```

### 3.6 布局组件

| 文件路径 | 说明 |
|----------|------|
| `frontend/src/components/AppLayout.vue` | 主布局（顶栏+侧边+内容） |
| `frontend/src/components/TopTabs.vue` | 顶部 Tab 导航 |
| `frontend/src/components/NavSidebar.vue` | 侧边导航 |
| `frontend/src/components/TopBar.vue` | 顶部栏 |

### 3.7 样式文件

| 文件路径 | 说明 |
|----------|------|
| `frontend/src/styles/variables.css` | CSS 变量（颜色、字体） |
| `frontend/src/styles/theme.css` | 主题样式（保持现有蓝色科技风） |
| `frontend/src/styles/layout.css` | 布局样式 |

### 3.8 部署配置

| 文件路径 | 说明 |
|----------|------|
| `deploy/nginx.conf` | Nginx 配置 |
| `Dockerfile.frontend` | 前端 Docker 镜像 |
| `docker-compose.yml` | 前后端分离部署 |

## 四、需要修改的后端

### 4.1 添加 CORS 支持

**文件**: `src/pkg/gateway/http/server.go`

需要添加 CORS 中间件，允许前端域名访问 API：

```go
// 添加 CORS 头，允许前端开发服务器访问
w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
w.Header().Set("Access-Control-Allow-Credentials", "true")
```

### 4.2 更新配置

**文件**: `src/config-schema.json`

如需新增前端相关配置项（如 CORS 白名单）。

### 4.3 修改 Makefile

**文件**: `Makefile`

添加前端开发命令：

```makefile
.PHONY: run-frontend
run-frontend:
	cd frontend && npm run dev

.PHONY: build-frontend
build-frontend:
	cd frontend && npm run build
```

## 五、实施步骤

### Phase 1: 项目初始化

1. 创建 `frontend/` 目录
2. 初始化 Vue3 + Vite 项目
3. 安装依赖：
   ```bash
   npm install vue vue-router pinia element-plus @element-plus/icons
   ```
4. 配置 Vite 代理转发到后端 `:18900`
5. 配置 TypeScript

### Phase 2: 通信层

1. 实现 `useGateway` Composable
2. 封装 WebSocket 连接管理
3. 实现 request 方法（复用现有 JSON-RPC 风格）
4. 实现认证逻辑（token / device-signature）

### Phase 3: 布局和路由

1. 创建 AppLayout 组件（复刻现有 shell 布局）
2. 配置 Vue Router
3. 实现 TopTabs 组件
4. 实现 NavSidebar 组件

### Phase 4: 视图开发

按优先级开发：

| 优先级 | 视图 | 说明 |
|--------|------|------|
| P0 | MessageView | 核心聊天功能 |
| P0 | ChannelsView | 渠道配置 |
| P0 | ConfigView | JSON 配置编辑 |
| P1 | OverviewView | 系统概览 |
| P1 | SessionsView | 会话管理 |
| P1 | SkillsView | 技能管理 |
| P2 | UsageView | 用量统计 |
| P2 | CronView | 定时任务 |
| P2 | NodesView | 节点管理 |
| P3 | 其他视图 | 安全/日志/MCP 等 |

### Phase 5: 样式适配

1. 迁移现有 CSS 变量
2. 确保 Element Plus 主题与现有风格协调
3. 适配深色/浅色主题切换

### Phase 6: 部署配置

1. 配置 Nginx 或 Docker
2. 更新后端 CORS 配置
3. 编写部署文档

## 六、组件映射表（Lit → Vue3）

| 现有 Lit 组件 | Vue3 等价组件 |
|--------------|---------------|
| `OpenClawApp` | `App.vue` + `AppLayout.vue` |
| `app-render.ts` 视图函数 | 各 `View.vue` 组件 |
| `@state()` 响应式状态 | `ref()` / `reactive()` |
| `navigation.ts` Tab 定义 | Vue Router routes |
| `gateway.ts` WebSocket 客户端 | `useGateway.ts` Composable |
| 各 `controllers/*.ts` | Pinia Stores |

## 七、关键设计决策

1. **部署方式**: 前后端分离独立部署
2. **API 前缀**: 保持 `/api/v1` 不变
3. **认证机制**: 保持现有 token/device-signature 方式
4. **UI 风格**: 保持现有蓝色科技风格
5. **状态管理**: 使用 Pinia 替代 Lit 的响应式系统
6. **路由**: 使用 Vue Router 管理视图切换

## 八、环境要求

- Node.js >= 18
- npm >= 9 或 pnpm >= 8
- Go >= 1.21（后端）
- Nginx >= 1.20（生产部署）