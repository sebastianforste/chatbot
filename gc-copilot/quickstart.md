# GC Copilot quickstart

This repo contains a GC Copilot scaffold built on top of the Vercel Chatbot starter.

## Steps
1. Configure credentials in `.env.local` (copy from `.env.example`).
2. Configure retrieval / GraphRAG endpoint (see `gc-copilot/config/graphrag-integration.md`).
3. Wire workflows into the app’s chatbot routes.
4. Run: `pnpm install` then `pnpm dev`.

## Key folders
- `gc-copilot/config/`
- `gc-copilot/prompts/`
- `gc-copilot/workflows/`
