---
name: zc-skill-cover-letter
description: >-
  按目标岗起草求职信与开场话术，标注待确认处。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-cover-letter.
---

# 求职信 / 沟通话术 · Skill

## When to use

- User asks for: 求职信 / 沟通话术
- 按目标岗起草求职信与开场话术，标注待确认处。

## Tools (`zc-skill-cover-letter`)

| Tool | Args |
|------|------|
| `draft_cover_letter` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
