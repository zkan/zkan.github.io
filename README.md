# Kan

A minimal static personal site for Kan, published at <https://zkan.github.io>.

The copy and the visual design are placeholders. Styling lives in `src/styles/global.css` as color, font, and spacing tokens, with light and dark colors chosen by `prefers-color-scheme`.

Built with [Astro](https://astro.build/).

## Run locally

Node.js 22.23.4 or newer. `.nvmrc` pins `22.23.4`, the minimum this version of Astro requires.

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

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

Keep post files directly in `src/content/posts` (no subfolders). The site is laid out for a short list, on the order of two or three posts.

## Deploy

Pushes to `main` build the site with the official [Astro GitHub Action](https://github.com/withastro/action) and deploy that build to GitHub Pages with `actions/deploy-pages`. Pull requests run a build-only check and do not deploy. Both builds use the Node version in `.nvmrc`.

The feed is at `/rss.xml`. The sitemap is at `/sitemap-index.xml`.

### One-time GitHub setting

In the repository on GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
