# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vondo (vondo.co.nz) — a static landing page for an automation consultancy. The pitch: "Get your time back. We help you automate the boring bits so you can focus on what matters." Contact: nick@vondo.co.nz.

## Tech Stack

Plain HTML, CSS, and JavaScript. No build step, no bundler, no SSG. Files are served as-is.

## Hosting

GitHub Pages, deployed from the `main` branch root. No custom domain (CNAME) configured yet — will eventually be vondo.co.nz.

## Development

Open `index.html` in a browser, or use any local server:

```
python3 -m http.server 8000
```

## Commits

Use conventional commits with emoji prefixes. Examples:

- `🎉 init: initial project scaffold`
- `✨ feat: add contact form`
- `🐛 fix: correct mobile layout overflow`
- `💄 style: update colour palette`
- `📝 docs: update CLAUDE.md`
- `♻️ refactor: extract hero section`

## Structure

- `index.html` — single-page landing
- `styles.css` — site styles (linked from index.html, not inline)
- `assets/` — logo and images
