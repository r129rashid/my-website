# Rabi Rashid Portfolio — rabirashid.com

Personal portfolio site for Rabi Rashid Mohammed Shaik. Senior Manager at SAIB, Riyadh.
Concept: "Restrained Command" — dark, precise, executive. Like a Bloomberg terminal met a consulting deck.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + CSS variables (dark/light mode via `class` on `<html>`)
- Framer Motion for all animation
- Lucide React for all icons
- Deployed to Vercel · GitHub: https://github.com/r129rashid/my-website

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (run before any deploy)
npm run lint     # ESLint check
npm run start    # serve production build locally
```

## Key Files

| File | Purpose |
|------|---------|
| `lib/data.ts` | **Single source of truth for all content** — edit here, nowhere else |
| `design-system.md` | Colors, fonts, spacing, animation tokens — read before touching any styling |
| `app/globals.css` | CSS variable definitions for light/dark mode |
| `tailwind.config.ts` | Tailwind tokens (references the CSS variables) |
| `components/hero.tsx` | Hero section — photo swap at `public/profile.jpg` |
| `public/profile-placeholder.svg` | Replace with real headshot (`profile.jpg`) |

## Folder Conventions

```
app/              # Next.js pages (layout, page, route dirs)
components/       # One file per section — hero, about, experience, etc.
lib/              # data.ts (content), utils.ts (cn helper), hooks
public/           # Static assets (images, SVGs)
```

- File names: `kebab-case.tsx`
- All components are functional — no class components
- Use `cn()` from `lib/utils.ts` for all className merging (clsx + tailwind-merge)

## Design Rules (non-negotiable)

Read `design-system.md` before making any visual change. Short version:

- **Accent color:** `#C9A84C` gold only — never `#3B82F6` blue or any other accent
- **Fonts:** Playfair Display for headings, Inter for all body text
- **No inline styles** — Tailwind classes + CSS variables only
- **No emoji** — Lucide SVG icons only
- **No bouncy springs** — ease curves only on text and section reveals
- **No generic Tailwind shadows** — use the custom shadow tokens from design-system.md
- **All `whileInView` animations** must use `viewport: { once: true, margin: "-80px" }`
- **All animated components** must handle `prefers-reduced-motion` via `useReducedMotion()`
- Border radius: `4px` cards, `2px` buttons — sharp, not rounded

## Content Rule

All copy (name, roles, bullets, skills, certs) lives in `lib/data.ts`. Never hardcode content strings inside component files.

## Boundaries — Claude must NEVER:

- Push directly to `main` — always confirm before any `git push`
- Change the color palette without asking first
- Add npm packages without asking first
- Edit `resume.md` — it's source material, not a site file
- Delete or overwrite `design-system.md`
- Run `rm -rf` anything
- Skip `npm run build` before declaring something deployment-ready

## Deployment

Connected to Vercel via `.vercel/`. To deploy: push to `main` (Vercel auto-deploys on push).
Always run `npm run build` locally first — a broken build will fail the Vercel deployment.

## Pending Work

- [ ] Swap `public/profile-placeholder.svg` → `public/profile.jpg` (real headshot)
- [ ] Add OG image (`public/og.png`, 1200×630) for LinkedIn/WhatsApp previews
- [ ] Light mode polish pass — verify all sections in light mode
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Custom domain (rabirashid.com)
