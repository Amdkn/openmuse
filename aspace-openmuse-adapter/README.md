# aspace-openmuse-adapter

Adapter A'Space pour `Amdkn/openmuse` — gel `a4944f4` (`a4944f4c471d3dc93b8bfc060b5da309b5216ab2`),
version amont 0.1.0, statut amont Alpha, 231 fichiers au gel.

- Bind Cordis Fiber : `01d57a787946abf04dc15db521ead0e3cf1ecd3c` (blob `0ccaccc`), re-appliqué
  verbatim sur `main` (§D8) ; l'adapter est le commit qui suit le bind.
- Skin : **OpenMuse** (skin) — agent personnel : travail qui continue, reprise en main de la même session navigateur.
- Triage : 5 portés / 3 surfaces / 4 abandonnés
  (total 12), vérifié mécaniquement par la suite.
- Gateway modèle : `http://127.0.0.1:31415/v1/chat/completions` seul, chaîne modelPool, retest 15 min.
- Computer-service : `:4100`, en-tête `x-openbot-bot-id` verbatim.
- Télémétrie : 0 émetteur ; les 5 déclencheurs §D4 sont tranchés dans
  `src/telemetry.ts`.
- Dépendance pas 6 NOMMÉE (§D9) : `/refine` conditionnel au merge de `9050a1f`.

Suite : `bun test` / `node --test` selon le `package.json` (stdlib seule).
