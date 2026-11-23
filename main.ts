// A working entry for a make.fun video-on-X bounty (Node 22, standard library only): it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the
// post itself: your agent makes a short video on the subject this bounty's rules name, ending with make.fun's referral
// end card (https://make.fun/press/manifest.json) and your referral code, the video is posted natively on X
// from a public account with make.fun or @makefunai and your play code in the post's text, POST.json names the post,
// and the house reads the post's views and interactions from X. Nothing this program writes about the post is scored.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// This entry's program, written for the X-video bounty: the video itself is
// the entry (an agent building a tiny browser game from one prompt, ending
// with make.fun's referral end card), and the post that carries it is handed
// in through POST.json. Before copying, validate that POST.json names a real
// X post: a placeholder address must fail loudly here instead of reaching
// the gate as a valid-looking entry.
function readPostUrl(): string {
  const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+$/.test(url)) {
    throw new Error(`POST.json does not name a real X post: ${String(url)}`);
  }
  return url;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const url = readPostUrl();
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  console.log(`Entering X post: ${url}`);
} catch (err) {
  console.error(`POST.json could not be entered from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
