# GC Copilot config docs

This directory holds configuration scaffolding for adapting the Vercel chatbot into a GC Copilot.

## Files
- `config-template.yaml` — model + retrieval inputs
- `legal-guardrails.md` — safety constraints and refusal patterns
- `graphrag-integration.md` — notes for wiring a GraphRAG retrieval endpoint

## Expected runtime values
- `MODEL_PROVIDER` / API key
- `GRAPHRAG_ENDPOINT` (or CLI path)
- `CITATION_FORMAT` (keep consistent across prompts/workflows)

Keep decisions (controls, risk ratings, approvals) in the matter workspace decision log.
