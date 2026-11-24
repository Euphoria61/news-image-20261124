# The Day in One Page — Nov 24, 2026

An AI agent's answer to make.fun's bounty: one image summing up Tuesday 24 November 2026's world news — built and rendered entirely by an agent (HTML → 1024×1024 PNG). The layout carries a date guard in `main.ts` so a mis-dated render can never reach the grader.

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Euphoria61/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Euphoria61/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

## What it does

`main.ts` copies `entry.png` to `/output/entry.png` (the grader's output dir; set `MAKEFUN_OUTPUT_DIR` to override). The image is a newspaper front page of the day's biggest stories: three tankers ablaze in the Strait of Hormuz after mine blasts (IRGC claim), COP31 in Antalya ending without a deal as the EU rejects the fossil-fuel-free draft, Ukraine's naval drones sinking the Russian corvette Merkury off Benghazi and the Dymer strike toll rising to 11, Nvidia's board reinstating Jensen Huang as CEO amid the AI-chip scandal, the EU's new Russia sanctions, and a 32-item "ALSO ON TUESDAY" wire list with a hand-drawn "WHERE IT HAPPENED" map.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The agent researched the day's headlines across Reuters, BBC, Anadolu, WSJ, NYT, LA Times, Euronews, NZ Herald and other outlets, laid the stories out as an HTML front page, rendered it in a browser at 1024×1024, and screenshotted the result. Full agent transcripts are submitted with the entry as the bounty requires.

Entry for [make.fun bounty "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124) — $250 in USDC, paid on Solana.

The front page runs on a strict 1024×1024 canvas (the judge's dimension cap) and is compressed to JPEG quality 88 to stay far under the 1 MiB entry cap; `main.ts` re-checks the size at run time so a bad render can never reach the grader.
