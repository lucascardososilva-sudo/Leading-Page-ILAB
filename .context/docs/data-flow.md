---
status: unfilled
generated: 2026-01-23
---

# Data Flow & Integrations

Explain how data enters, moves through, and exits the system, including interactions with external services.

## Module Dependencies
- **constants.ts/** → `types.ts`
- **index.tsx/** → `App.tsx`
- **App.tsx/** → `components\ui\CookieConsent.tsx`, `components\ui\FloatingMascot.tsx`, `components\ui\GlassNav.tsx`, `components\ui\SmoothScrollLayout.tsx`, `constants.ts`
- **components\Squads.tsx/** → `components\ui\BentoGrid.tsx`, `components\ui\SquadsIllustration.tsx`, `components\ui\SquadsIllustrationMobile.tsx`, `constants.ts`
- **components\Reynart.tsx/** → `components\ui\FoxLogo.tsx`
- **components\PartnersCTA.tsx/** → `components\ui\InfiniteMarquee.tsx`
- **components\Hero.tsx/** → `components\ui\InfiniteMarquee.tsx`, `components\ui\Magnetic.tsx`, `components\ui\NFTExhibition.tsx`, `components\ui\ScrollReveal.tsx`
- **components\Education.tsx/** → `constants.ts`
- **components\ui\GlassNav.tsx/** → `components\ui\FoxLogo.tsx`, `components\ui\Magnetic.tsx`
- **components\ui\BentoGrid.tsx/** → `components\ui\GlassCard.tsx`

## Service Layer
- *No service classes detected.*

## High-level Flow

Summarize the primary pipeline from input to output. Reference diagrams or embed Mermaid definitions when available.

## Internal Movement

Describe how modules within `AGENTS.md`, `App.tsx`, `components`, `constants.ts`, `help.txt`, `index.html`, `index.tsx`, `logins`, `metadata.json`, `opencode_help.txt`, `package-lock.json`, `package.json`, `public`, `README.md`, `tsconfig.json`, `types.ts`, `vite.config.ts` collaborate (queues, events, RPC calls, shared databases).

## External Integrations

Document each integration with purpose, authentication, payload shapes, and retry strategy.

## Observability & Failure Modes

Describe metrics, traces, or logs that monitor the flow. Note backoff, dead-letter, or compensating actions when downstream systems fail.
