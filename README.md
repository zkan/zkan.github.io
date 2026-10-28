# Kan Ouivirach

Personal site for Kan Ouivirach, published at <https://zkan.github.io>.

The visual system is cream and olive. Tokens live in `src/styles/global.css`, and the pages use those custom properties only. Piazzolla, DM Sans, and IBM Plex Mono are self-hosted with `@fontsource`, so the built pages do not request a third-party font host.

There is no dark mode. The cream, butter, and olive palette is a light system.

Built with [Astro](https://astro.build/).

## Run locally

Node.js 22.23.4 or newer. `.nvmrc` pins `22.23.4`, the minimum this version of Astro requires.

```bash
npm ci
npm run dev
```

Open <http://localhost:4321>. `npm run build` writes the static site to `dist/`.

## Add a post

Add a `.md` file under `src/content/posts`. MDX (`.mdx`) works the same way.

```md
---
title: Post title
description: One sentence summary.
pubDate: 2026-10-27
tags:
  - optional
draft: false
---

Write the post here.
```

`title`, `description`, and `pubDate` are required. `tags` and `draft` are optional. Set `draft: true` to hide a post from the production build, the post index, and the RSS feed. Drafts still appear while the dev server is running.

Keep post files directly in `src/content/posts` (no subfolders). The home page lists the three latest.

The three posts in the repo now are placeholders. Each one is marked with `TODO(placeholder)` and a visible TODO line. Replace them before launch. The booking link is also a placeholder (`mailto:hello@example.com`).

## Intentionally deferred

Two parts of the design are not in this version, until the real inputs exist:

- **Logo strips** (“As seen on” and “Trusted by”). There are no real logos. `--color-placeholder` is reserved for those boxes.
- **Newsletter.** There is no email service. The closing band is a butter-soft panel with “Work with me” and “Get in touch →”, both pointing at the booking mailto. It does not collect an address.

## Deploy

Pushes to `main` build the site with the official [Astro GitHub Action](https://github.com/withastro/action) and deploy that build to GitHub Pages with `actions/deploy-pages`. Pull requests run a build-only check and do not deploy. Both builds use the Node version in `.nvmrc`.

The feed is at `/rss.xml`. The sitemap is at `/sitemap-index.xml`.

### One-time GitHub setting

In the repository on GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
