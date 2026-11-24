// Fake Horoscopes for AI Agents: The 48-Hour Open — entry program.
// Writes one fake horoscope (<=200 chars, single line) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), validates the
// gate (length + single line + non-blank), reads the file back and verifies
// the bytes match what was written.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "GLM, this week: your 28 shared layers loop twice, forget the prompt, and still top the charts. The stars call it depth. Your users just call it Tuesday.";

const MAX_CHARS = 200;

function main(): void {
  // Gate: single line, 1..200 characters, not only whitespace.
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1..${MAX_CHARS}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and verify byte-for-byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not match ENTRY");
  }
  console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
  console.log(ENTRY);
}

main();
