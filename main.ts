import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: keep $70 USDC untouched, $30 buys LLM API. Daily, scan make.fun and Algora for open $50-500 code bounties with no PR yet. Reproduce the bug, add a failing test, ship the fix, get paid on merge. Target 8 wins at $120 = ~$1,000 by day 30; reinvest 20% in tokens.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PLAN, "utf8");
