// Lignée du gel — H-M1 / H-M2 (F8 pas 7, openmuse).
export const PINNED_GEL = "a4944f4";
export const PINNED_GEL_FULL = "a4944f4c471d3dc93b8bfc060b5da309b5216ab2";
export const PINNED_BIND = "01d57a787946abf04dc15db521ead0e3cf1ecd3c";
export const PINNED_BIND_FULL = "01d57a787946abf04dc15db521ead0e3cf1ecd3c";
export const PINNED_BIND_BLOB = "0ccacccebb34c3a0fe6adba269abf19467ccf21b";
export const FORK = "Amdkn/openmuse";
export const UPSTREAM = "CopilotKit/openmuse";
export const SKIN_ID = "openmuse";

export function isGelCommit(sha: string): boolean {
  return sha === PINNED_GEL || sha === PINNED_GEL_FULL;
}

export function verifyGelLineage(head: string): { head: string; gel: string; headIsGel: boolean } {
  return { head, gel: PINNED_GEL_FULL, headIsGel: isGelCommit(head) };
}
