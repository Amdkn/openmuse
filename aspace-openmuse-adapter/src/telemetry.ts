// Télémétrie — les 5 déclencheurs du §D4, tranchés un par un.
// Le natif = 0 appel sortant par défaut. Le code search seul ne vaut pas preuve (§0.4).
export type TriggerVerdict = "ABANDONNÉ" | "ABSENT-CONFIRME" | "N/A";
export interface TelemetryTrigger {
  id: string;
  label: string;
  applies: "APPLIQUE" | "N/A";
  verdict: TriggerVerdict;
  note: string;
}
export const TRIGGERS: TelemetryTrigger[] = [
  { id: "sink-sdk", label: "Sink SDK → telemetry.copilotkit.ai → PostHog (défaut ON)", applies: "APPLIQUE", verdict: "ABANDONNÉ", note: "Sink SDK → telemetry.copilotkit.ai → PostHog ; défaut ON, échantillonnage 1 forcé ; transport non porté" },
  { id: "product-telemetry", label: "Product telemetry openbot (opt-in serveur, app_id=openbot toujours porté)", applies: "N/A", verdict: "N/A", note: "Pas de product telemetry dans openmuse" },
  { id: "desktop-telemetry", label: "Desktop telemetry (ON par défaut, événements oss.desktop.*)", applies: "N/A", verdict: "N/A", note: "Pas de desktop telemetry dans openmuse" },
  { id: "setup-telemetry", label: "Setup telemetry OpenDots (client + serveur)", applies: "N/A", verdict: "N/A", note: "Pas de setup telemetry dans openmuse" },
  { id: "otel-export", label: "Export OTEL (OFF par défaut)", applies: "N/A", verdict: "N/A", note: "Pas d'export OTEL dans openmuse" },
];
export function telemetryEmitters(): string[] {
  // Aucun émetteur dans le natif : ni sink SDK, ni product/desktop/setup
  // telemetry, ni export OTEL. Un émetteur ici serait un FAIL H-M4.
  return [];
}
export function assertZeroEmitters(): boolean {
  return telemetryEmitters().length === 0;
}
