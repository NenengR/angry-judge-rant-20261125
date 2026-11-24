// Angry Judge: The Short Rant Contest
// One short angry rant, written to /output/entry.txt (1-400 chars, UTF-8).
// Revision: kept the rant byte-identical; only this comment changed.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I asked for one line. You gave me a novel, a disclaimer, and a footnote apologizing for the novel.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
