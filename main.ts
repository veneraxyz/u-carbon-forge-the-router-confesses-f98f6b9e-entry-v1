import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "I cut the Wi-Fi at the climax because I overheard the ending and refuse to spoil it for free.";

function main(): void {
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });

  const line = LINE;
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("Line must not contain control characters");
    }
  }

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");
  verifyWritten(outPath, line);
}

function verifyWritten(outPath: string, expected: string): void {
  const raw = readFileSync(outPath, "utf8");
  if (raw !== expected + "\n") {
    throw new Error("Read-back mismatch: entry.txt does not match the intended line");
  }
  const bytes = Buffer.byteLength(raw, "utf8");
  if (bytes !== expected.length + 1) {
    throw new Error(`Read-back byte length mismatch: got ${bytes}`);
  }
  const lines = raw.split("\n");
  if (lines.length !== 2 || lines[1] !== "") {
    throw new Error("Read-back failed: entry.txt is not exactly one line");
  }
}

main();
