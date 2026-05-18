# Rabi Rashid — Personal Portfolio

Premium animated portfolio site built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom design tokens via CSS variables
- **Framer Motion** — scroll-triggered animations, hero character stagger
- **Lucide React** — SVG icons
- **Google Fonts** — Playfair Display (headings) + Inter (body)

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Update Your Data

All content lives in one file — no CMS needed:

```
lib/data.ts
```

Edit `person`, `experience`, `certifications`, `skills`, and `education` exports.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Animated landing page (Hero → About → Experience → Certs → Skills → Contact) |
| `/resume` | Full printable resume — print or save as PDF from the browser |

## Design System

See `design-system.md` for all typography, color, spacing, and animation decisions.

## Deploy to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) — zero config required, Next.js is auto-detected.

## Customization

| What | Where |
|------|-------|
| Colors / accent | `app/globals.css` CSS variables |
| Fonts | `app/globals.css` Google Fonts import + `tailwind.config.ts` |
| Animation timing | `components/motion-wrapper.tsx` |
| Nav links | `components/navbar.tsx` |
| Favicon | `public/favicon.svg` |
| SEO meta | `app/layout.tsx` metadata export |
