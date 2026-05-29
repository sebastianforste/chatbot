# GC Copilot scaffold

This folder contains prompt templates, configuration scaffolding and a small synthetic intake artifact to adapt the Vercel chatbot into a supervised legal operations copilot.

It is designed to pair with the `legal-graphrag` work in `sebastianforste/graphrag` and the legal MCP source server in `sebastianforste/typescript-sdk`.

## Included

| File or folder | Purpose |
|---|---|
| `architecture.md` | Mermaid diagram for the GC Copilot intake and reviewer flow |
| `intake-schema.ts` | Zod schema for a synthetic legal intake object and reviewer queue note |
| `prompts/` | Product counsel, regulatory analysis and contract review prompt templates |
| `config/` | Legal-specific guardrail notes and retrieval settings |
| `workflows/` | Intake and decision-log templates |

## Minimal goals

- Keep changes additive with no breaking changes to upstream.
- Make the app easier to understand as a GC Copilot product surface.
- Keep all examples synthetic and safe.
- Route consequential legal decisions to a human reviewer.

## Workflow shape

```text
chat intake -> structured matter fields -> source lookup -> reviewer queue -> human decision -> response note
```

## Limitation

Educational scaffold only. It does not provide legal advice or production-ready implementation.
