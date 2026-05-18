# Portfolio Site — Project Progress

## What We Started With

A blank directory with only `resume.md` (LinkedIn export) and no project scaffold, no design, no code.

---

## What We've Accomplished

### Phase 1 — Design System
Ran UI UX Pro Max skill against the brief ("executive personal portfolio, senior banking, premium dark"). Output:

- **Concept:** "Restrained Command" — dark, precise, minimal. No bouncy springs, no generic blue.
- **Colors:** `#0A0A0F` background, `#C9A84C` warm gold accent (signals executive stature + GCC market)
- **Typography:** Playfair Display (headings) + Inter (body)
- **Style:** Motion-Driven but restrained — ease-out curves only, 0.2–0.6s durations
- Saved to `design-system.md` — source of truth for all visual decisions

### Phase 2 — Data Extraction & Confirmation
Extracted from `resume.md` and confirmed with user:

- **Identity:** Rabi Rashid Mohammed Shaik — Senior Manager, SAIB, Riyadh, Saudi Arabia
- **Contact:** r129rashid@gmail.com · linkedin.com/in/rabi-rashid · github.com/r129rashid
- **Experience:** 6 roles (SAIB → Alinma → Kore.ai → Accenture → Frost & Sullivan → TCS)
- **Certifications:** PSPO II + PSPO I (Scrum.org, 2026), Power BI, Jira Admin, Jira Software
- **Featured certs for landing page:** PSPO II, PSPO I, Power BI (most relevant to current senior PO/product role)
- All data lives in `lib/data.ts` — single source of truth, no CMS needed

### Phase 3 — Next.js Scaffold
Built the full project from scratch (couldn't use `create-next-app` due to space in folder name):

- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React
- Custom Tailwind config with CSS variable–based design tokens (dark/light mode via `class`)
- Google Fonts loaded in `globals.css`
- `ThemeProvider` client component for dark/light toggle with `localStorage` persistence
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `.gitignore`, `.eslintrc.json`, `tsconfig.json`, `postcss.config.mjs`, `next.config.mjs`

### Phase 4 — Landing Page (all sections)

**Hero (`components/hero.tsx`)**
- Two-column layout: text left, photo right (desktop) / photo top, text bottom (mobile)
- Character stagger animation on name letters with 3D X-axis flip
- Mouse-tracked parallax — gradient glow and photo follow cursor via `useMotionValue` + `useSpring`
- Animated underline draws left-to-right on subtitle
- Pulsing dot on tagline chip
- Two floating badges: "12+ Yrs Experience" (top-right of photo) and "SAIB · Senior Manager" (bottom-left)
- Conic-gradient spinning ring border on photo frame
- Dot grid decorative element
- Scroll indicator (pulsing line + "SCROLL" label)
- `profile-placeholder.svg` — styled RR initials avatar, swap for real photo at `public/profile.jpg`

**About (`components/about.tsx`)**
- Two-column: summary text left, animated stat counters right
- Stats count up from 0 on scroll via custom `useCountUp` hook (`lib/use-count-up.ts`)
- Cards: 12+ Years · 2 Platforms · $650M+ Contracts · 40+ Research Studies

**Experience (`components/experience.tsx`)**
- "12 years of shipping things that matter." headline
- Vertical timeline with animated drawing line — gold line extends as you scroll (scroll-linked via `useScroll` + `useSpring`)
- Timeline node: pop-in scale animation per role
- Cards: hover lifts + gold border + glow shadow
- Bullet points stagger in individually on whileInView

**Certifications (`components/certifications.tsx`)**
- 3 featured cards: PSPO II, PSPO I, Power BI
- Gold top-bar accent appears on hover
- Radial glow from top on hover
- Scale + fade whileInView stagger

**Skills (`components/skills.tsx`)**
- 5 categories: Product & Strategy · Agile & Delivery · Banking & Domain · Analytics & Tools · Leadership
- Chip stagger animation per category
- Hover: chip lifts + gold border

**Contact (`components/contact.tsx`)**
- Full-width card with radial accent glow + horizontal gold hairline at top
- Three link cards: Email · LinkedIn · GitHub
- Cards stagger in, lift on hover

**Scroll Progress Bar (`components/scroll-progress.tsx`)**
- 2px gold line at very top of page, spring-animated, tracks scroll position

**Footer (`components/footer.tsx`)**
- Minimal: copyright + location

### Phase 5 — Resume Page (`/resume`)
- Printable, ATS-friendly, full detail (all roles, all certs, education, skills)
- "Print / Save PDF" button (extracted to `components/print-button.tsx` as Client Component)
- Minimal animation — readability first
- Clean section hierarchy with gold accent section labels

### Phase 6 — Mobile Responsiveness
- Mobile-first throughout — every component designed for 390px first
- Hero: photo stacks above name on mobile (smaller), side-by-side on desktop
- Experience: timeline line hidden on mobile, cards full-width
- Certifications: 1-col → 2-col (sm) → 3-col (lg)
- Skills: chips wrap naturally
- Navbar: hamburger menu on mobile with slide-down drawer
- Floating badges on hero: repositioned to not overflow on small screens

### Phase 7 — GitHub Push
- Initialized git repo, created initial commit (33 files)
- Created public GitHub repo: **https://github.com/r129rashid/my-website**
- Branch: `main`

---

## Current State

| Item | Status |
|---|---|
| Design system | ✅ Documented in `design-system.md` |
| Landing page — Hero | ✅ Photo + animations + badges |
| Landing page — About | ✅ Animated counters |
| Landing page — Experience | ✅ Drawing timeline, staggered bullets |
| Landing page — Certifications | ✅ Hover glow cards |
| Landing page — Skills | ✅ Categorized chip clusters |
| Landing page — Contact | ✅ Email / LinkedIn / GitHub |
| Resume page `/resume` | ✅ Printable, ATS-friendly |
| Dark mode default | ✅ Toggle persists via localStorage |
| Light mode | ✅ Full token support |
| Mobile responsive | ✅ 390px tested |
| Scroll progress bar | ✅ Gold spring-animated |
| Mouse parallax | ✅ Hero gradient + photo |
| Animated counters | ✅ Count-up on scroll |
| TypeScript | ✅ Zero errors |
| GitHub repo | ✅ github.com/r129rashid/my-website |
| Vercel deploy | ❌ Not connected yet |
| Real profile photo | ❌ Placeholder (RR initials SVG) |
| OG image | ❌ Placeholder only |
| Analytics | ❌ Not added |

---

## Next Steps

### Immediate
1. **Swap placeholder photo** — add real headshot to `public/profile.jpg`, update `src` in `components/hero.tsx`
2. **Deploy to Vercel** — connect `github.com/r129rashid/my-website` at vercel.com/new (zero config)

### Short-term
3. **OG image** — add a real Open Graph image for LinkedIn/WhatsApp link previews (`public/og.png`, 1200×630)
4. **Domain** — point a custom domain (e.g. rabirashid.com) to the Vercel deployment
5. **Light mode polish** — verify all sections look equally premium in light mode

### Medium-term
6. **Analytics** — add Vercel Analytics or Plausible to track visitor counts
7. **Blog / Writing section** — optional third page for thought leadership posts
8. **More certifications** — add cloud/leadership certs if pursued (would replace Jira tool certs on landing page)

---

## Local Dev Quick Reference

```bash
cd "/Users/rabirashid/Rabi AI Projects/my website"
npm install          # first time only
npm run dev          # http://localhost:3000
npm run build        # production build
```

## Key Files

| File | Purpose |
|------|---------|
| `lib/data.ts` | All content — edit here to update any section |
| `design-system.md` | Colors, fonts, spacing, animation tokens |
| `components/hero.tsx` | Hero section + photo swap location |
| `app/globals.css` | CSS variables for light/dark mode |
| `public/profile-placeholder.svg` | Replace with `profile.jpg` for real photo |
