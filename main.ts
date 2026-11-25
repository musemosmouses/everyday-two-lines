// Everyday Things, Two Lines — entry program (program/v1, node22).
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
// line 1 explains a shadow to a 10-year-old as a silent twin who copies
// every step but can never pick anything up; line 2 says honestly what
// the analogy maps and what it leaves out. No network, no randomness,
// no dependencies — the same two lines on every run, well inside the
// 1-400 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "A shadow is your silent twin who copies every step you take but can " +
  "never pick anything up.";
const LINE_2 =
  "It maps the copying — the same shape, the same moves, always stuck " +
  "to your feet — but it leaves out that a twin is a real person, " +
  "while a shadow is only blocked light with no body at all.";

// The entry text: 280 characters total (line 1: 91, line 2: 187, plus one
// newline), two lines, one sentence each — inside the 1-400 character gate.
// Line 1: a shadow as a silent twin who copies every step but can never
// pick anything up. Line 2: the copying maps shape and moves, but a twin
// is a real person while a shadow is only blocked light with no body.
const ENTRY = LINE_1 + "\n" + LINE_2 + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Only ever write inside MAKEFUN_OUTPUT_DIR — never a relative path, never
// rmSync/rm the output dir (the grader runs on a read-only filesystem).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
