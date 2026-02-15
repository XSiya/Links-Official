# WeHeadless Brand Guide

> A complete reference for replicating the visual identity of the WeHeadless website.
> This guide is intended for AI agents, designers, and developers building pages or features that must match the official site.

---

## 1. Brand Identity

**Name:** WeHeadless (styled as "weheadless" in the logo)
**Tagline:** Build smarter, ship faster with headless architecture.
**Personality:** Bold, editorial, technically confident. Swiss-inspired modernism with hard edges and warm tones.

---

## 2. Color System

### Core Brand Palette

| Token            | Hex       | Usage                        |
| ---------------- | --------- | ---------------------------- |
| `ink`            | `#0a0a0a` | Primary dark / text / borders |
| `paper`          | `#f5f0e8` | Primary background (warm off-white) |
| `cream`          | `#faf7f2` | Secondary background (lighter) |
| `accent`         | `#c41e3a` | Red accent for emphasis/badges |
| `accent-hover`   | `#a01830` | Darker red for hover states  |

### Gray Scale (Warm-tinted)

| Token       | Hex       |
| ----------- | --------- |
| `gray-50`   | `#f0ece4` |
| `gray-100`  | `#e8e4dc` |
| `gray-200`  | `#d4d0c8` |
| `gray-300`  | `#b0aca4` |
| `gray-400`  | `#8c8880` |
| `gray-500`  | `#6b675f` |
| `gray-600`  | `#4a463e` |
| `gray-700`  | `#2d2a24` |

### Light Theme (Default)

| CSS Variable               | Value     | Role                    |
| -------------------------- | --------- | ----------------------- |
| `--color-bg-primary`       | `#f5f0e8` | Page background         |
| `--color-bg-secondary`     | `#faf7f2` | Alternate section bg    |
| `--color-bg-card`          | `#ffffff` | Card surfaces           |
| `--color-bg-inverse`       | `#0a0a0a` | Dark section bg         |
| `--color-text-primary`     | `#0a0a0a` | Main body text          |
| `--color-text-secondary`   | `#4a463e` | Supportive text         |
| `--color-text-muted`       | `#8c8880` | Placeholders / captions |
| `--color-text-inverse`     | `#f5f0e8` | Text on dark backgrounds |
| `--color-border`           | `#d4d0c8` | Default borders         |
| `--color-border-strong`    | `#0a0a0a` | Emphasized borders      |
| `--color-shadow`           | `#0a0a0a` | Hard shadow color       |
| `--color-cta-bg`           | `#0a0a0a` | Button background       |
| `--color-cta-text`         | `#f5f0e8` | Button text             |
| `--color-cta-hover`        | `#2d2a24` | Button hover bg         |

### Dark Theme

| CSS Variable               | Value     | Role                    |
| -------------------------- | --------- | ----------------------- |
| `--color-bg-primary`       | `#0a0a0a` | Page background         |
| `--color-bg-secondary`     | `#141414` | Alternate section bg    |
| `--color-bg-card`          | `#1a1a1a` | Card surfaces           |
| `--color-bg-inverse`       | `#f5f0e8` | Light section bg        |
| `--color-text-primary`     | `#ededed` | Main body text          |
| `--color-text-secondary`   | `#a0a0a0` | Supportive text         |
| `--color-text-muted`       | `#666666` | Placeholders / captions |
| `--color-text-inverse`     | `#0a0a0a` | Text on light backgrounds |
| `--color-border`           | `#2a2a2a` | Default borders         |
| `--color-border-strong`    | `#ededed` | Emphasized borders      |
| `--color-shadow`           | `#ededed` | Hard shadow color       |
| `--color-cta-bg`           | `#ededed` | Button background       |
| `--color-cta-text`         | `#0a0a0a` | Button text             |
| `--color-cta-hover`        | `#d0d0d0` | Button hover bg         |

**Theme switching:** Controlled via `data-theme` attribute on `<html>`. Persisted with `localStorage.setItem("wh-theme", theme)`. Falls back to OS preference.

---

## 3. Typography

### Font Families

| Role        | Font          | CSS Variable          | Fallbacks                          |
| ----------- | ------------- | --------------------- | ---------------------------------- |
| Body / UI   | **Geist Sans** | `--font-geist-sans`  | `ui-sans-serif, system-ui, sans-serif` |
| Headings / Labels | **Geist Mono** | `--font-geist-mono` | `ui-monospace, monospace`          |

Font files: `GeistVF.woff` (variable sans), `GeistMonoVF.woff` (variable mono).

### Type Scale

| Element             | Classes                                          |
| ------------------- | ------------------------------------------------ |
| **H1 (Hero)**       | `text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight` |
| **H2 (Section)**    | `text-3xl sm:text-4xl font-bold tracking-tight`  |
| **Subheading**      | `text-lg sm:text-xl leading-relaxed`             |
| **Body**            | `text-sm` to `text-lg`, `leading-relaxed`        |
| **Body Secondary**  | `text-sm text-[var(--color-text-secondary)]`     |
| **Labels / Tags**   | `font-mono text-xs font-bold tracking-wider uppercase` |
| **Card Title**      | `font-mono text-sm font-bold tracking-wide uppercase` |
| **Logo**            | `font-mono text-lg font-bold tracking-tight`     |
| **Nav Links**       | `font-mono text-xs font-bold tracking-wider uppercase` |

### Key Typography Rules

- **Headings** use `font-bold` + `tracking-tight` (negative letter-spacing)
- **Labels and tags** are always `uppercase` + `tracking-wider` + `font-mono`
- **Monospace** (`font-mono`) is used for UI elements, labels, navigation, card titles, and the logo -- not just code
- **Body text** uses the sans-serif font with `leading-relaxed` line-height
- Text smoothing is applied globally: `-webkit-font-smoothing: antialiased`

---

## 4. Spacing & Layout

### Container

- Max width: `max-w-7xl` (1280px)
- Narrower variants: `max-w-3xl` (768px) for hero content, `max-w-2xl` (640px) for forms
- Centered with `mx-auto`

### Responsive Padding

```
px-4 sm:px-6 lg:px-8
```

### Section Spacing

| Context          | Classes              |
| ---------------- | -------------------- |
| Hero section     | `py-20 sm:py-28 lg:py-36` |
| Standard section | `py-16 sm:py-24`     |
| Compact section  | `py-12` or `py-8`    |

### Grid System

| Layout     | Classes                          |
| ---------- | -------------------------------- |
| 2-column   | `sm:grid-cols-2`                 |
| 3-column   | `sm:grid-cols-2 lg:grid-cols-3`  |
| 4-column   | `grid-cols-2 lg:grid-cols-4`     |
| Gap        | `gap-6` (standard), `gap-2` (tight) |

### Breakpoints (Tailwind v4)

| Prefix | Min-width | Usage                     |
| ------ | --------- | ------------------------- |
| (none) | 0px       | Mobile-first base styles  |
| `sm:`  | 640px     | Tablet / two-column grids |
| `lg:`  | 1024px    | Desktop / full layouts    |

---

## 5. Borders, Shadows & Radius

### Borders

- **Standard thickness:** `border-2` everywhere (not `border` or `border-1`)
- **Default color:** `var(--color-border)` -- warm gray
- **Strong/emphasis:** `var(--color-border-strong)` -- full ink/paper contrast

### Hard Shadows (Zero Blur)

All shadows use **zero blur** for a hard, graphic, print-inspired look.

| Token        | Value                              | Usage            |
| ------------ | ---------------------------------- | ---------------- |
| `shadow-sm`  | `2px 2px 0 var(--color-shadow)`    | Buttons, toggles |
| `shadow-md`  | `4px 4px 0 var(--color-shadow)`    | Cards            |
| `shadow-lg`  | `6px 6px 0 var(--color-shadow)`    | Highlighted cards |
| `shadow-xl`  | `8px 8px 0 var(--color-shadow)`    | Hero elements    |

Applied via Tailwind: `shadow-[4px_4px_0_var(--color-shadow)]`

### Border Radius

Intentionally minimal -- the aesthetic is hard-edged.

| Token        | Value | Usage        |
| ------------ | ----- | ------------ |
| `radius-sm`  | `2px` | Default      |
| `radius-md`  | `4px` | Cards        |
| `radius-lg`  | `6px` | Larger cards |

---

## 6. Component Patterns

### Buttons

```html
<!-- Primary CTA -->
<button class="border-2 border-[var(--color-border-strong)] bg-[var(--color-cta-bg)] text-[var(--color-cta-text)] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--color-shadow)] transition-colors hover:bg-[var(--color-cta-hover)]">
  Get Started
</button>

<!-- Secondary CTA -->
<button class="border-2 border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--color-shadow)] transition-colors hover:opacity-90">
  Learn More
</button>
```

### Feature Card

```
- Container: border-2, border-strong, shadow-md (4px 4px 0), p-6
- Icon box: h-10 w-10, border-2, border-strong, centered icon
- Title: font-mono text-sm font-bold tracking-wide uppercase
- Description: text-sm, secondary text color
- Hover: transition-transform hover:-translate-y-0.5 (subtle lift)
```

### Pricing Card

```
- Standard: border-2, border-default, shadow-md
- Highlighted: border-strong, shadow-lg (6px 6px 0), lg:scale-105
- Price: font-mono text-4xl font-bold
- Features: space-y-3 with check icons
```

### Badge

Three variants:
- **default:** bg-secondary, text-secondary, border-default
- **accent:** accent bg/text, accent border
- **outline:** transparent bg, border-strong

All badges: `inline-block border px-3 py-1 font-mono text-xs tracking-wider uppercase`

### Form Input

```
border-2 px-4 py-3 font-mono text-sm transition-colors
placeholder:text-[var(--color-text-muted)]
focus:border-[var(--color-text-primary)]
```

### Navigation

- Sticky header: `sticky top-0 z-50`, height `h-16`, `border-b-2`
- Desktop links: `font-mono text-xs font-bold tracking-wider uppercase`
- Mobile: hamburger toggle with expandable menu
- Theme toggle button: `h-9 w-9`, border-2, shadow-sm

### Footer

- `border-t-2 border-[var(--color-border)]`
- 3-column responsive grid
- Section headers: uppercase, mono, bold
- Copyright row with top border divider

### Section Wrapper

- Reusable container with optional alternate background
- Optional halftone dot overlay (decorative)
- Centered content with `max-w-7xl`

---

## 7. Decorative Patterns

### Halftone / Ben-Day Dots

Used as section overlays for visual texture. Applied with `pointer-events-none` and `aria-hidden="true"`.

```css
/* Dense pattern */
.halftone-dense {
  background-image: radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px);
  background-size: 4px 4px;
  opacity: 0.08;
}

/* Sparse pattern */
.halftone-sparse {
  background-image: radial-gradient(circle, var(--color-text-primary) 0.8px, transparent 0.8px);
  background-size: 8px 8px;
  opacity: 0.05;
}
```

---

## 8. Animation & Motion

The design philosophy is **minimal, purposeful motion**. No dramatic entrance animations.

| Effect             | Implementation                          | Usage            |
| ------------------ | --------------------------------------- | ---------------- |
| Color transitions  | `transition-colors`                     | Buttons, links, inputs |
| Card lift          | `transition-transform hover:-translate-y-0.5` | Feature cards    |
| Loading spinner    | `animate-spin` on Loader2 icon          | Form submission  |
| Link hover         | `transition-colors hover:text-[var(--color-text-primary)]` | Nav/footer links |
| Smooth scroll      | `scroll-behavior: smooth` on `<html>`   | Anchor navigation |

---

## 9. Iconography

**Library:** Lucide React (`lucide-react`)

Icons are used extensively instead of custom illustrations. Common icons:

- **Navigation:** Menu, X, Sun, Moon, ChevronRight, ArrowRight
- **Features:** Lightbulb, FileText, Hammer, DollarSign, Users, Workflow, Zap, Plug, Shield
- **Pipeline:** Mic, GitBranch, BrainCircuit, Search, Layers, Code2, TestTube, Rocket
- **Status:** Check, Loader2
- **Pricing:** Wallet, TrendingUp

Icon containers typically use `h-10 w-10` or `h-14 w-14` bordered boxes.

---

## 10. Logo

The logo is **text-based** (no image file):

```
"we" (primary text color) + "headless" (muted text color)
```

- Font: `font-mono text-lg font-bold tracking-tight`
- Two-tone rendering: first part in primary color, second in muted
- No image assets -- purely typographic

---

## 11. Tech Stack

| Layer        | Technology                |
| ------------ | ------------------------- |
| Framework    | Next.js 16 (App Router)   |
| Language     | TypeScript                |
| Styling      | Tailwind CSS v4           |
| Fonts        | Geist Sans + Geist Mono (variable) |
| Icons        | Lucide React              |
| Backend      | Firebase / Firebase Admin  |
| Monorepo     | Turborepo                 |
| UI Library   | Custom (no shadcn/MUI/Chakra) |

---

## 12. Design Principles Summary

1. **Hard edges over soft:** 2px borders, zero-blur shadows, minimal border-radius
2. **Warm monochrome:** Paper/ink palette with warm gray tones, not cold blue-grays
3. **Monospace for personality:** Use `font-mono` + uppercase for labels, navigation, and emphasis -- it gives technical credibility
4. **Typography-driven:** No hero images or illustrations. Visual hierarchy is built with font size, weight, and spacing
5. **Graphic/print aesthetic:** Halftone dot overlays, hard shadows, and bold borders evoke editorial print design
6. **Minimal motion:** Transitions are subtle and purposeful. No scroll animations or dramatic reveals
7. **Full dark mode:** Every component works in both themes via CSS custom properties
8. **Mobile-first responsive:** Base styles are mobile, progressively enhanced at `sm:` and `lg:` breakpoints
9. **Accessibility-aware:** Semantic HTML, ARIA labels on interactive elements, proper focus states

---

## Quick Reference: Copy-Paste Tokens

```css
/* Paste into any Tailwind v4 project's globals.css */
@theme {
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;

  --color-ink: #0a0a0a;
  --color-paper: #f5f0e8;
  --color-cream: #faf7f2;
  --color-gray-50: #f0ece4;
  --color-gray-100: #e8e4dc;
  --color-gray-200: #d4d0c8;
  --color-gray-300: #b0aca4;
  --color-gray-400: #8c8880;
  --color-gray-500: #6b675f;
  --color-gray-600: #4a463e;
  --color-gray-700: #2d2a24;
  --color-accent: #c41e3a;
  --color-accent-hover: #a01830;

  --shadow-sm: 2px 2px 0 var(--color-ink);
  --shadow-md: 4px 4px 0 var(--color-ink);
  --shadow-lg: 6px 6px 0 var(--color-ink);
  --shadow-xl: 8px 8px 0 var(--color-ink);

  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
}
```
