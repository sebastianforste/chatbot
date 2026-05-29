# Contributing to GC Copilot

This scaffold is meant to be additive: it should work with the upstream https://github.com/vercel/chatbot repository without breaking the main demo.

## Workflow
- Keep changes inside `gc-copilot/` unless absolutely necessary.
- Prefer documentation + configuration first; wire plumbing later.
- Use a consistent JSON output schema for: intake, decisions, controls, evidence.

## PR hygiene
- Small, reviewable changes.
- Describe the legal workflow you are enabling (e.g., product launch review, MiCAR authorization review).
- Include example prompts/workflows and expected output formats.

## Security & privacy
This scaffold is for *internal* counsel workflows. Do not commit real client data, secrets, or regulated content.

## Style
- Markdown docs in British English.
- Use explicit headings and output sections (Input → Reasoning → Output).
