#!/usr/bin/env bash
set -euo pipefail

# 使用 Wails 构建 macOS 桌面应用，并打包为 .dmg
# 用法: ./deploy/macos/build-app.sh [--no-dmg]
# --no-dmg: 仅构建 .app，不生成 .dmg

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
BUILD_DMG=1

[[ "${1:-}" = "--no-dmg" ]] && BUILD_DMG=0

cd "${ROOT}"
echo "==> Wails 构建 macOS 应用..."
make wails

APP="${ROOT}/src/build/bin/OpenOcta.app"
if [[ ! -d "${APP}" ]]; then
  echo "未找到 OpenOcta.app，构建可能失败" >&2
  exit 1
fi

mkdir -p "${ROOT}/dist"
cp -R "${APP}" "${ROOT}/dist/"
echo "Built: ${ROOT}/dist/OpenOcta.app"

if [[ "${BUILD_DMG}" -eq 1 ]]; then
  VERSION=$(git describe --tags --always 2>/dev/null | sed 's/^v//' || echo "SNAPSHOT")
  DMG="${ROOT}/dist/OpenOcta-${VERSION}.dmg"
  DMG_TMP="${ROOT}/dist/OpenOcta-dmg-tmp"
  rm -rf "${DMG_TMP}" "${DMG}"
  mkdir -p "${DMG_TMP}"
  cp -R "${APP}" "${DMG_TMP}/"
  # 右侧「应用程序」入口：用户可将 OpenOcta 拖入系统应用程序文件夹
  ln -sf /Applications "${DMG_TMP}/Applications"
  cat > "${DMG_TMP}/安装说明.txt" << 'EOF'
OpenOcta 安装说明
================

1. 将左侧「OpenOcta」图标拖入右侧「应用程序」文件夹；或
2. 双击打开 OpenOcta，在弹出对话框中选择「安装」以复制到「应用程序」（需输入本机密码）。

安装完成后可从「启动台」或「应用程序」打开；可将磁盘映像推出。
EOF
  # 卷名避免与「已安装应用」混淆；挂载后为 /Volumes/OpenOcta-Installer（只读映像，不是 /Applications）
  hdiutil create -volname "OpenOcta-Installer" -srcfolder "${DMG_TMP}" -ov -format UDZO "${DMG}"
  rm -rf "${DMG_TMP}"
  echo "Built: ${DMG}"
  echo ""
  echo "用户使用：双击 .dmg → Finder 打开安装窗口 → 拖入「应用程序」或双击应用并按提示安装"
fi
