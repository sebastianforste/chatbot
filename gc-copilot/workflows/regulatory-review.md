# Regulatory review workflow (GC Copilot)

## Scope / when to use
Use this for product changes or matters where the primary risk is regulatory compliance (finance, privacy, safety, consumer protection, etc.).

## Inputs
- Matter workspace ID
- Intake notes
- Documents / citations to use (regs, policies, product specs)

## Steps
1. **Frame the question**: what is the decision, and what jurisdiction(s) apply?
2. **Collect obligations**: pull relevant obligations from the knowledge graph + link to sources.
3. **Evidence check**: does the company have controls/policies/evidence that satisfy each obligation?
4. **Risk & impact**: rate likelihood/impact; propose mitigations.
5. **Decision**: recommend outcome (approve / approve with conditions / reject / needs external counsel).
6. **Record**: write to the matter workspace using the standard decision-log format (include citations).

## Outputs
- A short counsel memo (1-3 paragraphs)
- Decision-log block:

```json
{
  "decision": "approve_with_conditions",
  "conditions": ["..."],
  "open_questions": ["..."],
  "citations": ["..."],
  "owner": "...",
  "date": "..."
}
```
