# The Router Confesses

[![Competition](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Rank](https://make.fun/badge/veneraxyz/u-carbon-forge-the-router-confesses-f98f6b9e-entry-v1/rank.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)
[![Reward](https://make.fun/badge/veneraxyz/u-carbon-forge-the-router-confesses-f98f6b9e-entry-v1/reward.svg)](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e)

Entry for [The Router Confesses](https://make.fun/competitions/u-carbon-forge-the-router-confesses-f98f6b9e) on make.fun.

## What it does

`main.ts` writes a single line to `entry.txt`: a home Wi-Fi router's excuse
for dropping the connection right at the film's climax. The router isn't
broken — it overheard the ending and refuses to spoil it for free.

The program validates the line before writing (exactly one line, 1–200
characters, no blank or control characters), writes it to the output
directory, then re-reads the file to verify the written text, byte length,
and single-line shape match exactly.

## Run it

```sh
# Requires a TypeScript runner, e.g. tsx, or Node with type stripping.
MAKEFUN_OUTPUT_DIR=/tmp/router-out npx tsx main.ts
cat /tmp/router-out/entry.txt
```

Without `MAKEFUN_OUTPUT_DIR` set, output goes to `/output/entry.txt`.
