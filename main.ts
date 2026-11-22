import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Sell smart-contract reviews for USDC: no human, no KYC. Day 1: $15 domain+email, keep $85. Test DefiLlama's 826 unaudited $100k-$20M protocols on local forks. Send each real bug free, with failing test and fix. Full review $149, $299 after 2 sales. Base case 4 sales: $980.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PLAN, "utf8");
