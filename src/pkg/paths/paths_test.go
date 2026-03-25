package paths

import (
	"os"
	"path/filepath"
	"testing"
)

func TestResolveStateDir(t *testing.T) {
	env := func(key string) string {
		return os.Getenv(key)
	}
	dir := ResolveStateDir(env)
	if dir == "" {
		t.Fatal("expected non-empty state dir")
	}
	// Default should be ~/.openocta or contain .openocta
	if !filepath.IsAbs(dir) {
		t.Errorf("expected absolute path, got %q", dir)
	}
}

func TestResolveStateDirOverride(t *testing.T) {
	tmp := t.TempDir()
	os.Setenv("OPENOCTA_STATE_DIR", tmp)
	defer os.Unsetenv("OPENOCTA_STATE_DIR")
	env := func(key string) string { return os.Getenv(key) }
	dir := ResolveStateDir(env)
	if dir != tmp {
		t.Errorf("expected %q, got %q", tmp, dir)
	}
}

func TestDefaultGatewayPort(t *testing.T) {
	if DefaultGatewayPort() != 18900 {
		t.Errorf("expected 18900, got %d", DefaultGatewayPort())
	}
}

func TestResolveGatewayAddrWithBind_LoopbackAliases(t *testing.T) {
	runMode := "service"
	localhost := "localhost"
	loopback := "loopback"

	addr1 := ResolveGatewayAddrWithBind(18900, runMode, &localhost)
	if addr1 != "127.0.0.1:18900" {
		t.Fatalf("expected localhost bind to resolve loopback, got %q", addr1)
	}

	addr2 := ResolveGatewayAddrWithBind(18900, runMode, &loopback)
	if addr2 != "127.0.0.1:18900" {
		t.Fatalf("expected loopback bind to resolve loopback, got %q", addr2)
	}
}

func TestResolveGatewayAddrWithBind_AllInterfacesAliases(t *testing.T) {
	runMode := "desktop"
	lan := "lan"
	anyV4 := "0.0.0.0"

	addr1 := ResolveGatewayAddrWithBind(18900, runMode, &lan)
	if addr1 != ":18900" {
		t.Fatalf("expected lan bind to resolve all interfaces, got %q", addr1)
	}

	addr2 := ResolveGatewayAddrWithBind(18900, runMode, &anyV4)
	if addr2 != ":18900" {
		t.Fatalf("expected 0.0.0.0 bind to resolve all interfaces, got %q", addr2)
	}
}
