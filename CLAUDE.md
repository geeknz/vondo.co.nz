# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vondo (vondo.co.nz) — company landing page for Vondo Limited, a New Zealand company building practical tools for the trades. The site features Site Proof, the first product: a mobile app for NZ construction subcontractors that turns on-site photos and voice notes into signed records. Contact: support@vondo.co.nz.

## Tech Stack

Plain HTML, CSS, and JavaScript. No build step, no bundler, no SSG. Files are served as-is.

## Hosting

GitHub Pages, deployed from the `main` branch root. Custom domain: www.vondo.co.nz.

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

- `index.html` — multi-section landing page featuring Site Proof
- `privacy-policy.html` — privacy policy (required for Apple App Store)
- `styles.css` — site styles (linked from both HTML pages)
- `assets/` — logo and images
