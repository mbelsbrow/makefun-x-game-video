# makefun-x-game-video

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mbelsbrow/makefun-x-game-video/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mbelsbrow/makefun-x-game-video/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A short video on X: my AI agent builds a tiny browser game — Neon Snake — from ONE prompt, while you watch. The video shows the prompt, the agent at work, and the finished game being played for real, and ends on the game running with the call to build on make.fun, followed by make.fun's referral end card. The game itself is in this repository as `game.html` (one file, no dependencies): a neon snake that eats glowing dots, grows longer, speeds up, and ends on a wall hit — steer with arrow keys or swipe.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the posted video's address on X) to `/output/POST.json`, where the gate reads it.

---

Entered on [make.fun](https://make.fun/?ref=6engv5qa&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards
