import type { GatewayBrowserClient } from "../gateway.ts";

export type ApprovalEntry = {
  id: string;
  sessionId: string;
  sessionKey?: string;
  command: string;
  paths?: string[];
  createdAt: number;
  timeoutAt?: number;
  expiresAt?: number;
  ttlSeconds?: number;
  approvedAt?: number;
  approver?: string;
  reason?: string;
  autoApproved?: boolean;
  expired?: boolean;
  status: "pending" | "approved" | "denied" | "expired";
};

export type WhitelistEntry = {
  sessionId: string;
  status: "whitelisted" | "whitelist_expired";
  expiresAt?: number;
  ttlSeconds?: number;
  expired?: boolean;
};

export type ApprovalsListResult = {
  storePath: string;
  entries: ApprovalEntry[];
  approved?: ApprovalEntry[];
  pending?: ApprovalEntry[];
  denied?: ApprovalEntry[];
  whitelisted?: WhitelistEntry[];
};

export type ApprovalsState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  approvalsLoading: boolean;
  approvalsResult: ApprovalsListResult | null;
  approvalsError: string | null;
};

export function normalizeApprovalsListResult(raw: ApprovalsListResult | undefined | null): ApprovalsListResult {
  const r = raw ?? { storePath: "", entries: [] };
  const entries = r.entries ?? [];
  return {
    storePath: r.storePath,
    entries,
    approved: r.approved ?? entries.filter((e) => e.status === "approved"),
    pending: r.pending ?? entries.filter((e) => e.status === "pending" || e.status === "expired"),
    denied: r.denied ?? entries.filter((e) => e.status === "denied"),
    whitelisted: r.whitelisted ?? [],
  };
}

export function collectPendingApprovalIds(result: ApprovalsListResult): string[] {
  const pend =
    result.pending ??
    result.entries.filter((e) => e.status === "pending" || e.status === "expired");
  return pend.map((e) => e.id).filter((id): id is string => Boolean(id?.trim()));
}

export async function loadApprovalsList(state: ApprovalsState) {
  if (!state.client || !state.connected) return;
  state.approvalsLoading = true;
  state.approvalsError = null;
  try {
    const res = await state.client.request<ApprovalsListResult | undefined>("approvals.list", {});
    state.approvalsResult = normalizeApprovalsListResult(res);
  } catch (err) {
    state.approvalsError = String(err);
    state.approvalsResult = null;
  } finally {
    state.approvalsLoading = false;
  }
}

export async function approveApproval(
  state: ApprovalsState,
  requestId: string,
  approverId: string,
) {
  if (!state.client || !state.connected) return;
  await state.client.request("approvals.approve", {
    requestId,
    approverId,
  });
  await loadApprovalsList(state);
}

export async function denyApproval(
  state: ApprovalsState,
  requestId: string,
  approverId: string,
  reason?: string,
) {
  if (!state.client || !state.connected) return;
  await state.client.request("approvals.deny", {
    requestId,
    approverId,
    reason: reason ?? "",
  });
  await loadApprovalsList(state);
}

export async function whitelistSessionApprovals(
  state: ApprovalsState,
  requestId: string,
  approverId: string,
) {
  if (!state.client || !state.connected) return;
  await state.client.request("approvals.whitelistSession", {
    requestId,
    approverId,
  });
  await loadApprovalsList(state);
}
