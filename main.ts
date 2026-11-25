// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
//
// A single deterministic program: it writes exactly one original one-liner
// to /output/entry.txt. No network, no randomness, no files read.
//
// The joke: noise-cancelling headphones promise silence from other people,
// but the turn is that the only voice left is your own — and you are the
// annoying coworker you were trying to escape.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "My noise-cancelling headphones work so well that the only voice left is my own thoughts — and it turns out I'm the annoying coworker.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing an
// entry the gate would refuse.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${length} characters; gate needs 1-200 non-blank`);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
