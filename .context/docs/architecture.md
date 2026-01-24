---
status: unfilled
generated: 2026-01-23
---

# Architecture Notes

Describe how the system is assembled and why the current design exists.

## System Architecture Overview

Summarize the top-level topology (monolith, modular service, microservices) and deployment model. Highlight how requests traverse the system and where control pivots between layers.

## Architectural Layers
### Components
UI components and views
- **Directories**: `components`, `components\ui`
- **Symbols**: 14 total, 1 exported
- **Key exports**:
  - [`raf`](components\ui\SmoothScrollLayout.tsx#L18) (function)


## Detected Design Patterns
- *No design patterns detected yet.*

## Entry Points
- [`index.tsx`](index.tsx)

## Public API
| Symbol | Type | Location |
| --- | --- | --- |
| [`FeatureProps`](types.ts#L8) | interface | types.ts:8 |
| [`ModuleTrack`](types.ts#L15) | interface | types.ts:15 |
| [`NavItem`](types.ts#L3) | interface | types.ts:3 |
| [`raf`](components\ui\SmoothScrollLayout.tsx#L18) | function | components\ui\SmoothScrollLayout.tsx:18 |

## Internal System Boundaries

Document seams between domains, bounded contexts, or service ownership. Note data ownership, synchronization strategies, and shared contract enforcement.

## External Service Dependencies

List SaaS platforms, third-party APIs, or infrastructure services the system relies on. Describe authentication methods, rate limits, and failure considerations for each dependency.

## Key Decisions & Trade-offs

Summarize architectural decisions, experiments, or ADR outcomes that shape the current design. Reference supporting documents and explain why selected approaches won over alternatives.

## Diagrams

Link architectural diagrams or add mermaid definitions here.

## Risks & Constraints

Document performance constraints, scaling considerations, or external system assumptions.

## Top Directories Snapshot
- `AGENTS.md/` — approximately 1 files
- `App.tsx/` — approximately 1 files
- `components/` — approximately 27 files
- `constants.ts/` — approximately 1 files
- `help.txt/` — approximately 1 files
- `index.html/` — approximately 1 files
- `index.tsx/` — approximately 1 files
- `logins/` — approximately 0 files
- `metadata.json/` — approximately 1 files
- `opencode_help.txt/` — approximately 1 files
- `package-lock.json/` — approximately 1 files
- `package.json/` — approximately 1 files
- `public/` — approximately 6 files
- `README.md/` — approximately 1 files
- `tsconfig.json/` — approximately 1 files
- `types.ts/` — approximately 1 files
- `vite.config.ts/` — approximately 1 files

## Related Resources

- [Project Overview](./project-overview.md)
- Update [agents/README.md](../agents/README.md) when architecture changes.
