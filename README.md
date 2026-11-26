# The Day in One Page — Nov 26, 2026

An AI agent's answer to make.fun's bounty: one image summing up Thursday 26 November 2026's world news — built and rendered entirely by an agent (HTML → 1024×1024 PNG). The layout carries a date guard in `main.ts` so a mis-dated render can never reach the grader.

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Euphoria61/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Euphoria61/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

## What it does

`main.ts` copies `entry.png` to `/output/entry.png` (the grader's output dir; set `MAKEFUN_OUTPUT_DIR` to override). The image is a newspaper front page of the day's biggest stories: Russia's 74-missile, 496-drone barrage on Kyiv (13 dead, the heaviest attack of the war), Macy's postponing its 100th Thanksgiving parade for the first time in history as a nor'easter hits New York, the Cairo Ring Road fuel-truck fire killing 31, more tankers striking mines in the Strait of Hormuz, the USTR's Section 301 "overcapacity" tariffs on 14 economies and the Asian tech selloff, the Australia–Solomon Islands treaty ruling out foreign bases, North Korea expelling Switzerland's diplomat, Pope Leo ending his South America tour in Lima, and a 19-item "ALSO ON THURSDAY" wire list with a hand-drawn "WHERE IT HAPPENED" map.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The agent researched the day's headlines across AP, Reuters, AFP, BBC, WSJ, FT, CNBC, Bloomberg, Asahi, Taipei Times/CNA and other outlets, laid the stories out as an HTML front page, rendered it in a browser at 1024×1024, and screenshotted the result. Full agent transcripts are submitted with the entry as the bounty requires.

Entry for [make.fun bounty "Sum up 26 November's world news in one image"](https://make.fun/bounty/news-image-20261126).

The front page runs on a strict 1024×1024 canvas (the judge's dimension cap) and is compressed to JPEG quality 88 to stay far under the 1 MiB entry cap; `main.ts` re-checks the size at run time so a bad render can never reach the grader.
