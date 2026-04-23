#!/bin/bash
set -e

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
BINARY="$APP_DIR/openocta"
LOG_FILE="$APP_DIR/gateway.log"
PID_FILE="$APP_DIR/gateway.pid"

start() {
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
        echo "Gateway 已在运行 (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    echo "启动 Gateway..."
    nohup "$BINARY" gateway run > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    
    sleep 2
    if curl -s --connect-timeout 2 http://127.0.0.1:18900/health > /dev/null 2>&1; then
        echo "✅ Gateway 启动成功 (PID: $(cat "$PID_FILE"))"
        echo "   Web UI: http://127.0.0.1:18900"
    else
        echo "❌ Gateway 启动失败，请查看日志: $LOG_FILE"
        rm -f "$PID_FILE"
        exit 1
    fi
}

stop() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 "$PID" 2>/dev/null; then
            echo "停止 Gateway (PID: $PID)..."
            kill "$PID" 2>/dev/null || kill -9 "$PID" 2>/dev/null
            sleep 1
        fi
        rm -f "$PID_FILE"
    fi
    
    # 确保端口释放
    if lsof -ti :18900 > /dev/null 2>&1; then
        echo "强制关闭占用端口的进程..."
        lsof -ti :18900 | xargs kill -9 2>/dev/null || true
    fi
    
    echo "✅ Gateway 已停止"
}

status() {
    if curl -s --connect-timeout 1 http://127.0.0.1:18900/health > /dev/null 2>&1; then
        echo "✅ Gateway 运行中"
        curl -s http://127.0.0.1:18900/health
    else
        echo "❌ Gateway 未运行"
    fi
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        sleep 1
        start
        ;;
    status)
        status
        ;;
    log)
        tail -f "$LOG_FILE"
        ;;
    *)
        echo "用法: $0 {start|stop|restart|status|log}"
        exit 1
        ;;
esac
