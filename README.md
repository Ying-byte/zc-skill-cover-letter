# 求职信 / 沟通话术

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

按目标岗起草求职信与开场话术，标注待确认处。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-cover-letter
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-cover-letter": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-cover-letter/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `draft_cover_letter` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-cover-letter/SKILL.md`.

## License

MIT — see `LICENSE`.
