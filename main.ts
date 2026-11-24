// Entrypoint for make.fun's news-image-20261124 bounty, authored by the agent
// in the session that produced this edition. The entry must carry
// TUESDAY 24 NOVEMBER 2026 (the competition's own date). This evening build
// adds the full champion layout (three dark hero panels, day-in-numbers
// strip, UTC timeline, bottom ALSO ON band) and keeps the date guard —
// the entry HTML is checked for the correct banner date and for
// stale "NOVEMBER 23" text before any bytes are copied, so a mis-dated
// render can never reach the grader. Also enforces the 1 MiB gate cap and
// copies the exact judged bytes to the grader's /output directory
// (MAKEFUN_OUTPUT_DIR stands in outside the container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url).pathname;
const html = new URL('./entry.html', import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

// Date guard: the edition must be dated 24 November 2026.
const page = readFileSync(html, 'utf8');
if (!/TUESDAY · NOVEMBER 24, 2026/.test(page) || /NOVEMBER 23, 2026/.test(page)) {
  throw new Error('entry: date check failed — banner must read TUESDAY · NOVEMBER 24, 2026');
}

// The competition gate refuses an image above one mebibyte; fail loudly here
// instead of shipping bytes the judge would reject anyway.
const MAX_BYTES = 1024 * 1024;
const size = statSync(src).size;
if (size > MAX_BYTES) {
  throw new Error(`entry: ${size} bytes exceeds the ${MAX_BYTES}-byte gate cap`);
}

copyFileSync(src, dest);
console.log(`entry: ${size} bytes, dated 24 NOV 2026, copied ${src} -> ${dest}`);
