import { gatewayHttpBase } from "./gateway-url.ts";

function normalizeExternalHref(url: string): string | null {
  const raw = (url ?? "").trim();
  if (!raw) return null;
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.href;
  } catch {
    return null;
  }
}

/**
 * Open an http(s) URL: new browser tab when possible; in desktop WebView fall back to
 * POST /api/desktop/open-url (system default browser). Wails runtime is used when present.
 */
export async function openExternalUrl(
  url: string,
  opts?: { gatewayHost?: string; gatewayToken?: string },
): Promise<void> {
  const href = normalizeExternalHref(url);
  if (!href) return;

  const wails = (globalThis as unknown as { runtime?: { BrowserOpenURL?: (u: string) => void } })
    .runtime;
  if (typeof wails?.BrowserOpenURL === "function") {
    wails.BrowserOpenURL(href);
    return;
  }

  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (opened) {
    try {
      opened.opener = null;
    } catch {
      /* ignore */
    }
    return;
  }

  const base = gatewayHttpBase((opts?.gatewayHost ?? "").trim());
  const token = (opts?.gatewayToken ?? "").trim();
  if (!base || !token) {
    window.location.assign(href);
    return;
  }

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/api/desktop/open-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "X-Gateway-Token": token,
      },
      body: JSON.stringify({ url: href }),
    });
    if (res.ok) {
      const data = (await res.json()) as { ok?: boolean };
      if (data.ok === true) {
        return;
      }
    }
  } catch {
    // fall through
  }

  window.location.assign(href);
}
