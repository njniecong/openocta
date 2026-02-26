#!/bin/sh
# RPM/DEB 安装后：重载 systemd 使 .service 生效
if command -v systemctl >/dev/null 2>&1; then
  systemctl daemon-reload || true
fi
