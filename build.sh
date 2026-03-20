#!/bin/bash
# OpenOcta 构建脚本
# 用法: ./build.sh [ui|embed|go|build|clean|snapshot|release|docker|wails|wails-nsis]
# 默认: build（完整构建）

set -e
cd "$(dirname "$0")"

do_ui() {
  echo "==> 构建前端..."
  cd ui && npm install && npm run build && cd ..
}

do_embed() {
  echo "==> 从 git tag 设置版本..."
  ./scripts/set-version.sh
  do_ui
  echo "==> 复制 embed 资源..."
  cp src/config-schema.json src/openocta.json.example src/.env src/embed/
}

do_go() {
  do_embed
  echo "==> 构建 Go 二进制..."
  cd src && go build -ldflags "-s -w" -o ../openocta ./cmd/openocta && cd ..
  echo "==> 完成: ./openocta"
}

do_build() {
  do_go
}

do_clean() {
  echo "==> 清理..."
  rm -rf dist src/embed/frontend openocta openocta.exe
  echo "==> 清理完成"
}

do_snapshot() {
  echo "==> GoReleaser 快照构建..."
  goreleaser release --snapshot --clean --skip=publish
  do_after
}

do_release() {
  echo "==> GoReleaser 正式发布..."
  goreleaser release --clean
  do_after
}

do_docker() {
  echo "==> Docker 构建..."
  docker build -f deploy/Dockerfile -t openocta:local .
}

do_after() {
  cp deploy/dist-README.md dist/
  echo "==> 构建完成"
}

do_wails() {
  echo "==> Wails 桌面应用构建（当前平台）..."
  make wails
  if [[ -d src/build/bin ]]; then
    mkdir -p dist
    cp -R src/build/bin/* dist/ 2>/dev/null || true
    echo "==> 产物已复制到 dist/"
  fi
}

do_wails_nsis() {
  echo "==> Wails Windows 安装器构建（需在 Windows 上执行）..."
  make embed
  cd src && wails build -platform windows/amd64 -nsis -skipbindings && cd ..
  if [[ -d src/build/bin ]]; then
    mkdir -p dist
    cp src/build/bin/*.exe dist/ 2>/dev/null || true
    echo "==> 安装器已复制到 dist/"
  fi
}

case "${1:-build}" in
  ui)     do_ui ;;
  embed)  do_embed ;;
  go)     do_go ;;
  build)  do_build ;;
  clean)  do_clean ;;
  snapshot) do_snapshot ;;
  release) do_release ;;
  docker) do_docker ;;
  wails) do_wails ;;
  wails-nsis) do_wails_nsis ;;
  *)
    echo "用法: $0 [ui|embed|go|build|clean|snapshot|release|docker|wails|wails-nsis]"
    echo "  ui       - 仅构建前端"
    echo "  embed    - 构建前端并复制 embed 资源"
    echo "  go       - 完整构建（前端+embed+Go）"
    echo "  build    - 同 go（默认）"
    echo "  clean    - 清理构建产物"
    echo "  snapshot   - GoReleaser 快照（Linux rpm/deb）"
    echo "  release    - GoReleaser 正式发布"
    echo "  docker     - Docker 镜像构建"
    echo "  wails      - Wails 桌面应用（macOS .app / Windows .exe）"
    echo "  wails-nsis - Wails Windows 安装器（需在 Windows 上执行）"
    exit 1
    ;;
esac
