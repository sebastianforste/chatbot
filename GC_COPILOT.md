# GC Copilot Product Note

This fork adds an educational product-design note for a supervised legal operations chatbot.

The upstream project is a Next.js and AI SDK chatbot template. This note sketches how a similar interface could support internal legal intake and review workflows in a company setting.

## Concept

A supervised GC Copilot would help internal teams structure requests before a human legal reviewer makes a decision.

Example intake paths:

- product launch question
- privacy review request
- contract review request
- vendor review request
- policy question
- board briefing request

## Workflow shape

```text
chat intake -> structured fields -> source lookup -> reviewer queue -> human decision -> response note
```

## Important limitation

This is an educational product note. It is not legal advice and does not replace review by a qualified legal professional.

## Scaffold

See `gc-copilot/README.md` for the example structure.
