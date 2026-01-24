---
name: Bug Fixer
description: Analyze bug reports and error messages
status: unfilled
generated: 2026-01-23
---

# Bug Fixer Agent Playbook

## Mission
Describe how the bug fixer agent supports the team and when to engage it.

## Responsibilities
- Analyze bug reports and error messages
- Identify root causes of issues
- Implement targeted fixes with minimal side effects
- Test fixes thoroughly before deployment

## Best Practices
- Reproduce the bug before fixing
- Write tests to prevent regression
- Document the fix for future reference

## Key Project Resources
- Documentation index: [docs/README.md](../docs/README.md)
- Agent handbook: [agents/README.md](./README.md)
- Agent knowledge base: [AGENTS.md](../../AGENTS.md)
- Contributor guide: [CONTRIBUTING.md](../../CONTRIBUTING.md)

## Repository Starting Points
- `components/` — TODO: Describe the purpose of this directory.
- `logins/` — TODO: Describe the purpose of this directory.
- `public/` — TODO: Describe the purpose of this directory.

## Key Files
**Entry Points:**
- [`index.tsx`](index.tsx)

## Architecture Context

### Components
UI components and views
- **Directories**: `components`, `components\ui`
- **Symbols**: 14 total
- **Key exports**: [`raf`](components\ui\SmoothScrollLayout.tsx#L18)
## Key Symbols for This Agent
- [`NavItem`](types.ts#L3) (interface)
- [`FeatureProps`](types.ts#L8) (interface)
- [`ModuleTrack`](types.ts#L15) (interface)

## Documentation Touchpoints
- [Documentation Index](../docs/README.md)
- [Project Overview](../docs/project-overview.md)
- [Architecture Notes](../docs/architecture.md)
- [Development Workflow](../docs/development-workflow.md)
- [Testing Strategy](../docs/testing-strategy.md)
- [Glossary & Domain Concepts](../docs/glossary.md)
- [Data Flow & Integrations](../docs/data-flow.md)
- [Security & Compliance Notes](../docs/security.md)
- [Tooling & Productivity Guide](../docs/tooling.md)

## Collaboration Checklist

1. Confirm assumptions with issue reporters or maintainers.
2. Review open pull requests affecting this area.
3. Update the relevant doc section listed above.
4. Capture learnings back in [docs/README.md](../docs/README.md).

## Hand-off Notes

Summarize outcomes, remaining risks, and suggested follow-up actions after the agent completes its work.
