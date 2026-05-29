# GC Copilot scaffold

This folder contains prompt templates and configuration scaffolding to adapt the Vercel chatbot into a legal/GC copilot. It is designed to pair with the `legal-graphrag` work in `microsoft/graphrag`.

## Included (to be added next)
- prompts/ (Product counsel, regulatory analysis, contract review)
- config/ (provider + retrieval settings, legal-specific guardrails)
- workflows/ (intake + decision log templates)

## Minimal goals
- Keep changes additive (no breaking changes to upstream)
- Make the app demo-ready with sample prompts and seed documents
- Keep it easy to swap model providers via environment variables.
