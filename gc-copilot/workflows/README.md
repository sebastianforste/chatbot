# GC Copilot workflows

This folder contains workflow docs used by GC Copilot to structure conversations, evidence, and decision-making.

Workflows are meant to be:
- predictable (always emit the same fields)
- citeable (include GraphRAG IDs / source URLs)
- loggable (link into decision log + matter workspace)

## Workflows
- `intake.md`: capture the legal question / context + dataset selection + disclosure/limitations.
- `product-launch-review.md`: feature review framing, risk triage, controls, and decisions to log.
- `contract-review.md`: structured contract review output (issues list + risk register + controls).
- `regulatory-review.md`: regulatory analysis + obligations + evidence bundle.
- `decision-log.md`: write-once decision records with controls, owners, and dates.
- `matter-workspace.md`: glue for storing outputs, linking to artifacts, and tracking state.

## Output expectations
Each workflow should produce:
- an output object (JSON/YAML-like) with required fields
- a short narrative summary
- citations (if retrieval is used)

## Extending
Copy an existing workflow and define:
- required inputs
- required outputs
- acceptance criteria

Keep it additive and demo-ready.
