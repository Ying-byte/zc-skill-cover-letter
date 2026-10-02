#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "cover-letter",
  "titleZh": "求职信 / 沟通话术",
  "summary": "按目标岗起草求职信与开场话术，标注待确认处。",
  "tools": [
    "draft_cover_letter"
  ],
  "proxyTools": {
    "draft_cover_letter": "zc_apply_prepare"
  },
  "localKind": "draft"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
