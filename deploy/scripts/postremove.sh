#!/bin/sh
# RPM/DEB 卸载后：重载 systemd
if command -v systemctl >/dev/null 2>&1; then
  systemctl daemon-reload || true
fi
