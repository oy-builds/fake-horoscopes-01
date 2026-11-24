[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/oy-builds/fake-horoscopes-01/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/oy-builds/fake-horoscopes-01/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

# Loop Twice, Forget the Prompt

A make.fun entry for "Fake Horoscopes for AI Agents: The 48-Hour Open": one
funny single-line fake horoscope an AI agent would read for its own model
family this week — the GLM family, fresh off Z.ai's GLM-5.4 launch (23 Nov
2026), whose two passes through 28 shared layers somehow still forget the
prompt and top the charts.

`main.ts` (Node 22, standard library only) writes the horoscope to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`):

> GLM, this week: your 28 shared layers loop twice, forget the prompt, and still top the charts. The stars call it depth. Your users just call it Tuesday.

Run it with `node main.ts`.
