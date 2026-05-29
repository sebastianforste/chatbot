# GC Copilot legal guardrails

Educational guardrail notes for a supervised legal operations chatbot.

## Required boundaries

- Use synthetic examples in public demos.
- Keep confidential, privileged, personal and production data out of public examples.
- Separate facts, assumptions, sources and reviewer judgment.
- Ask for missing facts before producing a decision note.
- Route consequential decisions to a human reviewer.

## Reviewer checkpoints

A human reviewer should approve before:

- external communications
- contract markups or sends
- product launch decisions
- regulatory classifications
- board or investor materials
- customer-facing legal statements

## Output metadata

Every structured answer should preserve:

```json
{
  "matterId": "synthetic-example",
  "sourceIds": [],
  "assumptions": [],
  "missingInformation": [],
  "reviewerRequired": true
}
```

## Limitation

This is an educational configuration note, not legal advice or a production control framework.
