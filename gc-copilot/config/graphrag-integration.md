# GraphRAG integration notes

This GC Copilot scaffold assumes you also have an indexed legal corpus built with GraphRAG.

## Recommended wiring
- Build the index in your GraphRAG fork (see `legal-graphrag/config/legal-graphrag-config.yaml`).
- Export a retrieval endpoint (or CLI wrapper) that accepts: `prompt`, `workspace_id`, `filters` and returns: `answer` + `citations`.
- In GC Copilot, add a backend route that calls the GraphRAG endpoint and injects citations into the final response.

## Practical defaults
- Start with small corpus shards (5-20 docs), iterate on prompts, then scale.
- Keep citation format consistent: `[Source: ...] (link)`.
- Avoid mixing obligations and opinions in the same node; extract facts first, then synthesize.

## Open questions
- How will you deploy GraphRAG (local, internal service, or hosted)?
- What is the privacy model for indexing sensitive matter docs?

Document the above decisions in your `gc-copilot/workflows/matter-workspace.md` so they are repeatable.
