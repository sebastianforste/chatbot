# Model provider notes

Keep this scaffold provider-agnostic. Choose the provider via env/config, not code. Examples:

- `MODEL_PROVIDER=openai` with `OPENAI_API_KEY`
- `MODEL_PROVIDER=anthropic` with `ANTHROPIC_API_KEY`
- `MODEL_PROVIDER=azure` with Azure OpenAI endpoint + key

**Best practice:** keep model family + version in prompts as a variable, and log the exact model used per decision entry.
