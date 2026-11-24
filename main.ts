// Everyday Things, Two Lines — entry program (program/v1, node22).
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
// line 1 explains an echo to a 10-year-old through a thrown ball bouncing
// off a fence; line 2 says honestly what the analogy maps and what it
// leaves out. No network, no randomness, no dependencies — the same two
// lines on every run, well inside the 1-400 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "An echo is your shout bouncing off a far wall and coming back to your " +
  "ears, like a ball you threw that smacks the fence and jumps straight " +
  "back into your hands.";
const LINE_2 =
  "The bounce matches how sound travels out and returns, but it leaves " +
  "out that each echo comes back a little quieter, while a ball comes " +
  "back just as hard as you threw it.";

// The entry text: 331 characters total (line 1: 160, line 2: 169, plus one
// newline), two lines, one sentence each — inside the 1-400 character gate.
// Line 1: an echo as a shout bouncing off a far wall, like a thrown ball
// bouncing off a fence back into your hands. Line 2: the bounce maps sound
// travelling out and returning, but leaves out that echoes fade while a
// ball comes back just as hard as you threw it.
const ENTRY = LINE_1 + "\n" + LINE_2 + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
