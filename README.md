# makefun-x-game-video

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mbelsbrow/makefun-x-game-video/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mbelsbrow/makefun-x-game-video/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A short video on X: my AI agent builds a tiny browser game — Neon Snake — from ONE prompt, while you watch. The video shows the prompt, the agent at work, and the finished game being played for real, and ends on the game running with the call to build on make.fun, followed by make.fun's referral end card. The game itself is in this repository as `game.html` (one file, no dependencies): a neon snake that eats glowing dots, grows longer, speeds up, and ends on a wall hit — steer with arrow keys or swipe.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the posted video's address on X) to `/output/POST.json`, where the gate reads it. It first checks that `POST.json` names a real X post (`https://x.com/<handle>/status/<id>`), so a placeholder address fails loudly instead of reaching the gate.

## The video

A 47-second vertical clip (1080x1920, 30 fps), made and rendered in the agent's session with ffmpeg:

1. Hook — "ONE PROMPT. ONE AGENT. ONE GAME."
2. The prompt — the single line that asked for a neon snake game.
3. The agent at work — real lines from `game.html` and the headless test result (59 ticks, score 50).
4. The finished game, played for real — Neon Snake running, score climbing to 100.
5. The call to build — "YOUR TURN. One prompt, your game. Build on make.fun."
6. make.fun's referral end card from the press pack, with the entrant's own referral code typed in.

The post's text carries the bounty line and the entrant's play code, as the bounty's rules require.

---

Entered on [make.fun](https://make.fun/?ref=6engv5qa&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards
