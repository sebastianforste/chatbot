# Matter workspace workflow

Goal: Keep a single log for context, docs, decisions, outputs for each matter.

## Setup
- Create a `/matters/{matter_name}` folder with intake + source docs.
- Link to GraphRAG index + retrieval config.

## Runbook
1. Intake: gather matter details from intake template.
2. Retrieval: specify where to run GraphRAG / index path.
3. Prompt selection: choose prompt (product-counsel, regulatory-analysis, contract-review).
4. Decision log: use `workflows/decision-log.md`; always add citations.
5. Export: copy answer + citations into the matter workspace.

## Output
- `answer.md` + citations
- decision-log entry
- next actions / owners
