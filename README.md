# Awesome Paseo Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of plugins for [Paseo](https://paseo.sh), the self-hosted orchestrator for coding agents (Claude Code, Codex, Copilot, OpenCode, Pi, and more).

Paseo plugins add native workspace panels, composer pills, Command Center items, global surfaces, app themes, daemon behavior, and composer attachment sources. They run on every client connected to the daemon, including mobile.

> **Note:** The plugin API is experimental and evolving. Plugins may need updates between Paseo releases. Check each plugin's README for the minimum daemon version it requires.

> **Security:** Plugins are trusted local code. Backend code runs unsandboxed on the daemon machine, and client contributions run inside the Paseo app. Review the source before installing anything from this list.

## Contents

- [Monitoring and orchestration](#monitoring-and-orchestration)
- [Workspace panels](#workspace-panels)
- [Themes](#themes)
- [Daemon and automation](#daemon-and-automation)
- [Composer and attachments](#composer-and-attachments)
- [Resources](#resources)
- [Installing plugins](#installing-plugins)
- [Contributing](#contributing)

## Monitoring and orchestration

- [agent-monitor](https://github.com/omercnet/paseo-agent-monitor) - One roster for every agent on a daemon. Triage buckets (Attention / Running / Idle / Closed), project-first grouping, text filter, live diff stats, and one-tap archive sweep. Answers "which of my 38 agents needs me right now" without walking the workspace tree. Web and desktop.

## Workspace panels

*Plugins that add panels to workspace tabs or the explorer.*

- *Your plugin here.*

## Themes

*App themes contributed through the plugin API.*

- *Your plugin here.*

## Daemon and automation

*Plugins that add daemon-side behavior: schedulers, webhooks, notifications, integrations.*

- *Your plugin here.*

## Composer and attachments

*Composer pills and attachment sources.*

- *Your plugin here.*

## Resources

- [Plugin quickstart](https://paseo.sh/docs/plugins) - scaffold, install, reload, and debug a plugin.
- [Plugin reference](https://paseo.sh/docs/plugins/reference) - contribution surfaces, theme and layout tokens, lifecycle.
- [TypeScript SDK](https://paseo.sh/docs/sdk) - the workspace, agent, provider, and config API exposed inside plugins.
- [Plugin roadmap](https://github.com/getpaseo/paseo/labels/plugins) - planned contribution surfaces and their status.
- [Paseo Discord](https://discord.gg/jz8T2uahpH) - ask questions, share what you built.

## Installing plugins

Enable plugins on the daemon (Settings -> Plugins -> Enable plugins), then install straight from Git:

```bash
paseo plugin add owner/repository
paseo plugin add owner/monorepo --path plugins/my-plugin
paseo plugin add owner/repository --ref v1.2.0   # pin a tag
paseo plugin ls
```

Branches track updates; tags and commits are pinned. Update with:

```bash
paseo plugin status
paseo plugin update --all
```

Git installation runs no package manager or install scripts, so plugins must use Paseo's host-provided modules or bundle their source.

## Contributing

PRs welcome. To add a plugin:

1. It must be installable with `paseo plugin add` (public Git repo, no install scripts required).
2. Add it to the right section, alphabetically, as: `[name](repo-url) - one-sentence description.` Note platform limits (e.g. web/desktop only) and minimum daemon version if relevant.
3. The repo should have a README covering what it does, how it reads state, and known limits.

One plugin per PR. Keep descriptions factual - what it does, not how awesome it is.

## License

[CC0](LICENSE) - public domain. Do whatever you want with this list.
