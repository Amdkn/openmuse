// Triage openmuse — porté / surface / abandonné (§D14, §D2).
// Vérifié mécaniquement par la suite (comptes = table, écart 0).
export type TriageVerdict = "ported" | "surface" | "abandoned";
export interface TriageItem { id: string; item: string; verdict: TriageVerdict }
export const TRIAGE: TriageItem[] = [
  { id: "personal-agent", item: "Agent personnel : plan suivi, relecture des actions, travail qui continue, retour au résultat", verdict: "ported" },
  { id: "openbot-bridge", item: "Pont d'enregistrement openmuse → openbot (workspace.ts:357, openbotConfigured: false) : généralisé en mécanisme par lequel un skin s'enregistre sur la plateforme (id, nom, capacités, état configuré) ; openbotConfigured devient platformConfigured", verdict: "ported" },
  { id: "computer-service", item: "Ordinateur (apps/computer, docker / e2b-desktop) : replié dans le computer-service unique :4100 + x-openbot-bot-id", verdict: "ported" },
  { id: "worker-job-loop", item: "Worker (apps/server/src/worker-entry.ts) : survit comme job du job loop du daemon unique", verdict: "ported" },
  { id: "plan-review", item: "Relecture des actions et plan suivi : portées comme fonction de revue du skin", verdict: "ported" },
  { id: "mobile-rn", item: "Mobile React Native (iOS/Android/web) — surface, re-pointée", verdict: "surface" },
  { id: "web", item: "Web — surface, re-pointée", verdict: "surface" },
  { id: "apps-computer", item: "apps/computer comme surface d'accès — le moteur est le computer-service natif", verdict: "surface" },
  { id: "sdk-telemetry-sink", item: "Sink SDK → telemetry.copilotkit.ai → PostHog, défaut ON (échantillonnage 1 forcé, config.ts:28) ; transport non porté", verdict: "abandoned" },
  { id: "jev-model", item: "Modèle Jev épinglé (defaultJevModel jev-1.13.0) : remplacé par le gateway :31415 + chaîne modelPool", verdict: "abandoned" },
  { id: "cpk-intelligence", item: "CopilotKit Intelligence (threads + mémoire) : remplacée par gateway :31415 + Shared Brain ; CPK_INTELLIGENCE_API_KEY et CPK_TELEMETRY_ID absents du natif", verdict: "abandoned" },
  { id: "clerk-signup-telemetry", item: "Événement intelligence_signup (distinct_id = Clerk user ID) : non porté ; pas de Clerk dans le natif", verdict: "abandoned" }
];
export function triageCounts(): { ported: number; surfaces: number; abandoned: number; total: number } {
  const ported = TRIAGE.filter((t) => t.verdict === "ported").length;
  const surfaces = TRIAGE.filter((t) => t.verdict === "surface").length;
  const abandoned = TRIAGE.filter((t) => t.verdict === "abandoned").length;
  return { ported, surfaces, abandoned, total: TRIAGE.length };
}
