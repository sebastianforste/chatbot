# GC Copilot architecture

Educational architecture sketch for a supervised internal legal operations chatbot.

```mermaid
flowchart LR
  A[Business user] --> B[Chat intake]
  B --> C[Structured matter fields]
  C --> D[Source lookup]
  D --> E[Draft review note]
  E --> F[Reviewer queue]
  F --> G[Human legal reviewer]
  G --> H{Decision}
  H --> I[Respond to requester]
  H --> J[Ask for more facts]
  H --> K[Escalate]
  I --> L[Decision log]
  J --> B
  K --> M[GC or board review]
```

## Product goal

The chatbot should make legal intake easier for the business and more structured for the legal team. It should collect facts, identify missing information and route matters to a reviewer.

## Source layer

A production version could connect to approved policies, legal sources and playbooks through a permissioned retrieval layer or MCP server.

## Limitation

Educational architecture diagram only. It is not legal advice or production implementation guidance.
