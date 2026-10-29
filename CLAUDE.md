# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vondo (vondo.co.nz) — company site for Vondo Limited, a New Zealand company that makes small companies punch like large ones: websites, custom software, fractional leadership and IT support. Site Proof (a mobile app for NZ construction subcontractors that turns on-site photos and voice notes into signed records) is Vondo's own product and appears as a case study. Contact: support@vondo.co.nz.

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

- `index.html` — home page
- `services.html`, `case-studies.html`, `about.html`, `contact.html` — content pages
- `privacy-policy.html` — Site Proof privacy policy (required for Apple App Store; keep this URL stable)
- `404.html` — not-found page (served by GitHub Pages)
- `styles.css` — site styles (shared by all pages)
- `main.js` — theme toggle and footer year (shared by all pages)
- `assets/` — favicon and images

The header and footer are duplicated in every HTML page; when changing them, update all pages. Links are root-relative (`/about.html`), so preview via the local server rather than opening files directly.
