# Contract review workflow

**Goal:** run an end-to-end contract review in the GC Copilot UI, using the contract playbook prompt + decision log.

## Inputs
- Contract (PDF/Word) uploaded to the chat session
- Prompt: `gc-copilot/prompts/contract-review.md`
- Decision log template

## Steps
1. Confirm contract type and jurisdiction.
2. Run extraction (facts), then a risk tagging pass.
3. Draft edits + rationale.
4. Record decisions, owner, evidence link.

## Output
- Facts
- Risks
- Recommendations
- Open questions
- Decision log entry reference
