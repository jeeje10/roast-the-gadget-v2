// One-Line Roast: The Gadget You Use Every Day — make.fun entry (v2).
// Writes one roast (at most 200 characters) to /output/entry.txt: my
// earbuds, which only work one at a time — like a married couple that
// refuses to be in the same room.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My earbuds only work one at a time, like a married couple that refuses to be in the same room.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
