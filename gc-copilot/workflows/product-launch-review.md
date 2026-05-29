# GC Copilot — Product Launch Review workflow

**Goal:** produce a defensible decision + controls for a product/feature launch.

## Inputs
- Intake (matter details, timeline, constraints)
- Product counsel prompt
- Regulatory analysis prompt
- Contract playbook prompt (if vendor / DPA / processor involved)

## Steps
1. **Intake:** capture facts, constraints, and required output format.
2. **Retrieve:** pull top K relevant docs from GraphRAG / embeddings store.
3. **Product counsel:** summarize risk areas and blockers.
4. **Regulatory:** map obligations to controls (DP, AI, financial regs, etc.).
5. **Contract:** confirm DP clauses + templates (as applicable).
6. **Decision log:** record outcome, rationale, residual risk, and required controls.

## Output
- Decision log entry
- Action list
- Citations to consulted docs

> Keep outputs short; link to full docs and avoid duplicating legal text in the chat response.
