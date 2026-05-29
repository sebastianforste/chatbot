# GC Copilot risk register

Keep this lightweight and consistently linked into workflows.

## Fields
- **Risk ID** (RR-001)
- **Domain** (Privacy, Security, Product)
- **Description**
- **Likelihood / Impact** (1-5)
- **Owner**
- **Mitigation**
- **Status** (Open/Accepted/Closed)
- **Evidence** (GraphRAG source nodes + matter workspace file)
- **Decision log link**
- **Opened / Closed dates**

## Example
- RR-001 — Privacy — New tracking feature may conflict with consent requirements.
  - Likelihood/Impact: 3/4
  - Owner: Product counsel
  - Mitigation: Update UI copy + opt-in flow; add monitoring.
  - Evidence: MI/CR nodes; policy statement.
  - Decision log: `/gc-copilot/workflows/decision-log.md` entry.

## How to use
1. Open a new risk when a workflow surfaces a material issue.
2. Tie the risk to a **Matter** in `matter-workspace.md`.
3. Close the risk only when the decision log documents mitigation and evidence.
