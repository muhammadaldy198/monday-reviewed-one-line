import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
// Entry: C-PRIME — 138 chars, one line, a review of my own Monday.
import { join } from "node:path";

// One Monday, reviewed in one line: a one-line fix, 214 customers, Friday.
const ENTRY =
  "I shipped a one-line fix before lunch on Monday, it took down checkout for 214 customers, and the fix for the fix is scheduled for Friday.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

const chars = [...ENTRY].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`);
}

const lines = ENTRY.split("\n");
if (lines.length !== 1) {
  throw new Error(`entry must be exactly 1 line, got ${lines.length}`);
}
if (ENTRY.trim().length === 0) throw new Error("entry must not be blank");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY, "utf8");
chmodSync(outFile, 0o644);
