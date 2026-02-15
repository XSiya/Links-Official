# Dreamcraft Studio Brand Guide

This document defines the visual identity and design system for Dreamcraft Studio's official web presence. Use this as the source of truth when building any page, component, or application for the brand.

---

## 1. Brand Identity

**Studio:** Dreamcraft Studio
**Tagline:** AI-Native Animation. Arcane-Tier Storytelling.
**Debut IP:** Apartheid Vol. 1 (mature animated drama set in South Africa)
**Aesthetic:** Cinematic, dark, painterly — inspired by premium animated series like Arcane

---

## 2. Color Palette

### Primary Colors

| Token                 | Hex       | Usage                          |
|-----------------------|-----------|--------------------------------|
| `brand-black`         | `#0a0a0a` | Primary background, body       |
| `brand-charcoal`      | `#1a1a1a` | Secondary/elevated backgrounds |
| `brand-gold`          | `#d4af37` | CTA buttons, accent highlights |
| `brand-purple`        | `#6b46c1` | Highlight, gradients           |
| `brand-accent`        | `#8b5cf6` | Link hover, secondary accent   |

### Supporting Colors (Tailwind defaults used)

| Token              | Hex/Class       | Usage                              |
|--------------------|-----------------|------------------------------------|
| White              | `#ffffff`       | Primary text on dark backgrounds   |
| `gray-200`         | Tailwind gray   | Subtitle/secondary heading text    |
| `gray-300`         | Tailwind gray   | Body text, descriptions            |
| `gray-400`         | Tailwind gray   | Muted text, footer links, labels   |
| `gray-500`         | Tailwind gray   | Copyright text, fine print         |
| `gray-700`         | Tailwind gray   | Input borders (default state)      |
| `gray-800`         | Tailwind gray   | Card borders, dividers             |
| `gray-900`         | Tailwind gray   | Section backgrounds, input fills   |
| `yellow-500`       | Tailwind yellow | CTA buttons, emphasis text, icons  |
| `yellow-400`       | Tailwind yellow | CTA button hover state             |
| `red-500`          | Tailwind red    | Error text, validation messages    |
| `green-600`        | Tailwind green  | Success toasts                     |

### CSS Custom Properties (Tailwind v4)

```css
@theme {
  --color-brand-black: #0a0a0a;
  --color-brand-charcoal: #1a1a1a;
  --color-brand-gold: #d4af37;
  --color-brand-purple: #6b46c1;
  --color-brand-accent: #8b5cf6;
}
```

---

## 3. Typography

### Font Stack

| Token        | Font                | Usage                          |
|--------------|---------------------|--------------------------------|
| `font-sans`  | Geist Sans (local)  | All body text, headings, UI   |
| `font-mono`  | Geist Mono (local)  | Code snippets, technical text |

### Font Loading

Fonts are loaded as local variable fonts via Next.js `localFont`:
- `GeistVF.woff` → CSS variable `--font-geist-sans`
- `GeistMonoVF.woff` → CSS variable `--font-geist-mono`

### Base Body Styling

```css
body {
  background-color: #0a0a0a;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.01em;
}
```

### Type Scale

| Element          | Mobile              | Tablet (md)          | Desktop (lg)         |
|------------------|---------------------|----------------------|----------------------|
| Hero heading     | `text-4xl` (36px)   | `text-6xl` (60px)    | `text-7xl` (72px)    |
| Hero subtitle    | `text-xl` (20px)    | `text-2xl` (24px)    | `text-3xl` (30px)    |
| Section heading  | `text-4xl` (36px)   | `text-5xl` (48px)    | `text-5xl` (48px)    |
| Body text        | `text-lg` (18px)    | `text-lg` (18px)     | `text-lg` (18px)     |
| Card heading     | `text-lg` (18px)    | `text-lg` (18px)     | `text-lg` (18px)     |
| Card body        | `text-sm` (14px)    | `text-sm` (14px)     | `text-sm` (14px)     |
| Footer text      | `text-sm` (14px)    | `text-sm` (14px)     | `text-sm` (14px)     |

### Font Weight

- **Headings:** `font-bold` (700)
- **CTA buttons:** `font-semibold` (600)
- **Card titles:** `font-semibold` (600)
- **Body text:** `font-normal` (400, default)

---

## 4. Gradients

Gradients are core to the Dreamcraft visual identity. Always use 135-degree angles for consistency.

### Brand Gradients

| Name               | CSS Value                                              | Usage                |
|--------------------|--------------------------------------------------------|----------------------|
| Black → Purple     | `linear-gradient(135deg, #0a0a0a 0%, #6b46c1 100%)`   | Hero backgrounds     |
| Gold → Black       | `linear-gradient(135deg, #d4af37 0%, #0a0a0a 100%)`   | Feature highlights   |
| Purple → Charcoal  | `linear-gradient(135deg, #6b46c1 0%, #1a1a1a 100%)`   | Secondary sections   |
| Charcoal → Black   | `linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)`   | Subtle backgrounds   |
| Gold Accent        | `linear-gradient(135deg, #d4af37 20%, #0a0a0a 100%)`  | CTA sections         |

### Image Overlay Gradient

Used over hero images/backgrounds to ensure text readability:

```css
background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent);
/* Tailwind: bg-gradient-to-t from-black/80 via-black/40 to-transparent */
```

---

## 5. Layout & Spacing

### Container Widths

| Context        | Max Width   | Tailwind Class   |
|----------------|-------------|------------------|
| Content body   | `max-w-4xl` | 896px            |
| Wide layout    | `max-w-6xl` | 1152px           |
| Hero text      | `max-w-5xl` | 1024px (titles)  |
| Hero subtitle  | `max-w-3xl` | 768px            |
| Form           | `max-w-lg`  | 512px            |

### Section Padding

| Context           | Value         | Tailwind Class     |
|-------------------|---------------|--------------------|
| Section vertical  | 80px          | `py-20`            |
| Section horizontal| 24px          | `px-6`             |
| Footer vertical   | 48px          | `py-12`            |

### Component Spacing

| Context                | Value  | Tailwind     |
|------------------------|--------|--------------|
| Heading → body text    | 16px   | `mb-4`       |
| Heading → form/content | 48px   | `mb-12`      |
| Body text → body text  | 24px   | `space-y-6`  |
| Card internal padding  | 24px   | `p-6`        |
| Grid gap               | 32px   | `gap-8`      |
| Button padding         | 32x16  | `px-8 py-4`  |

---

## 6. Components

### Buttons

#### Primary CTA Button
```
bg-yellow-500 text-black font-semibold rounded-lg
px-8 py-4
hover:bg-yellow-400 transition-colors
transform hover:scale-105
disabled:opacity-50 disabled:cursor-not-allowed
```

#### Loading State
When loading, display an animated spinner SVG alongside "Loading..." text.

### Input Fields

```
w-full h-14 px-4 rounded-lg border
bg-gray-900 text-white border-gray-700
focus:border-yellow-500 focus:outline-none transition-colors
```
- Error state: `border-red-500` with red error text below
- Height: `h-14` (56px) for comfortable touch targets

### Cards

```
p-6 bg-black/40 rounded-lg border border-gray-800
```
- Semi-transparent black background (`bg-black/40`)
- Subtle gray border (`border-gray-800`)
- Icon/checkmark color: `text-yellow-500`
- Title color: `text-yellow-500`
- Body text color: `text-gray-400`

### Success State (Waitlist Confirmation)

```
text-center p-8 bg-gray-900 rounded-lg border border-yellow-500/20
```
- Gold circular icon background: `bg-yellow-500 rounded-full`
- Icon: white checkmark on gold circle
- Heading: `text-yellow-500 font-bold`
- Body: `text-gray-300`

### Toast Notifications

- **Success:** `bg-green-600` with checkmark icon
- **Error:** `bg-red-600` with X icon
- Position: `fixed bottom-8 right-8`
- Rounded: `rounded-lg`
- Animated entrance from bottom

---

## 7. Section Backgrounds

| Section         | Background                         |
|-----------------|-------------------------------------|
| Hero/Carousel   | Brand gradients (135deg)            |
| Waitlist        | `bg-gray-900`                       |
| About           | `bg-black`                          |
| Footer          | `bg-black border-t border-gray-900` |

---

## 8. Interactive States

### Links
- Default: `text-gray-400`
- Hover: `text-yellow-500`
- Transition: `transition-colors`

### Footer Links
- Default: `text-gray-500`
- Hover: `text-gray-300`
- Transition: `transition-colors`

### Carousel Pagination Dots
- Default: `bg-white/50`
- Hover: `bg-white/80`
- Size: `w-3 h-3 rounded-full`

### Focus States
- Input focus: `border-yellow-500`
- All interactive elements: `focus:outline-none` with visible border change

---

## 9. Responsive Breakpoints

Uses Tailwind default breakpoints:

| Breakpoint | Width  | Usage                                    |
|------------|--------|------------------------------------------|
| Base       | 0px    | Mobile-first, single column              |
| `sm`       | 640px  | Form layout adjustments (inline buttons) |
| `md`       | 768px  | 3-column card grids, larger type         |
| `lg`       | 1024px | Maximum type scale                       |

### Mobile-First Patterns
- Cards: 1 column → 3 columns at `md`
- Form: stacked → inline at `sm`
- Hero text: scales from `text-4xl` → `text-7xl`
- All sections use `px-6` for mobile gutters

---

## 10. Animation & Motion

| Property        | Value/Pattern                                           |
|-----------------|---------------------------------------------------------|
| Color transitions | `transition-colors` (150ms ease)                     |
| Button hover    | `transform hover:scale-105` (subtle scale-up)           |
| Scroll behavior | `scroll-behavior: smooth` on `html`                     |
| Carousel        | Embla Carousel, loop enabled, 30ms transition duration   |
| Carousel autoplay | 7000ms delay, stops on user interaction               |
| Toast entrance  | Slide up + fade in, 300ms duration                       |

---

## 11. Imagery Guidelines

### Hero/Carousel Images
- Full-bleed, edge-to-edge (`object-cover`)
- Always overlaid with gradient: `from-black/80 via-black/40 to-transparent`
- Recommended dimensions: 1920x1080 minimum
- File format: `.jpg` (optimized)
- First slide should have `priority` loading

### Fallback Strategy
When images are unavailable, use brand gradient backgrounds (see Section 4) as placeholders. These maintain the cinematic dark aesthetic without requiring actual imagery.

---

## 12. Voice & Copy Guidelines

### Tone
- **Confident but not arrogant** — "Arcane-tier" quality claims backed by specifics
- **Cinematic language** — dramatic, evocative, visual
- **Direct and concise** — short punchy sentences, no filler
- **Culturally proud** — South African heritage is a strength, not a niche

### Copy Patterns
- Headings: Bold declarations ("Cinematic Quality. Indie Speed.")
- Subheadings: Supporting detail with specifics ("18-month production cycles. $5M budgets.")
- Body: Conversational yet professional
- CTAs: Action-oriented ("Join the Waitlist", "Sign Up Now")

### Key Brand Phrases
- "AI-Native Animation"
- "Arcane-Tier Storytelling"
- "Built on AI. Directed by Artists."
- "We don't replace artists. We empower them."
- "Culturally authentic stories from underrepresented perspectives"

---

## 13. Tech Stack Reference

| Technology          | Version    | Purpose                          |
|---------------------|------------|----------------------------------|
| Next.js (App Router)| 16.1.5     | React framework, SSG             |
| React               | 19.2.0     | UI library                       |
| TypeScript           | Strict     | Type safety                      |
| Tailwind CSS        | 4.x        | Utility-first styling            |
| Embla Carousel      | 8.x        | Touch-friendly carousel          |
| React Hook Form     | 7.x        | Form state management            |
| Zod                 | 4.x        | Schema validation                |
| Firebase            | 12.x       | Firestore, Analytics, Hosting    |
| Geist Font          | Variable   | Primary typeface (local loading) |

### Architecture Patterns
- **Server Components** by default, **Client Components** only for interactivity (`'use client'`)
- **Static export** (`output: 'export'`) for Firebase Hosting
- **Shared UI package** at `packages/ui/src/` for reusable components (Button, Input, Toast)
- **Path alias:** `@/` maps to the app root for clean imports
- **Dark mode only** — no light theme toggle (dark is the brand identity)

---

## 14. Quick Reference: Tailwind Classes by Context

```
/* Page background */
bg-brand-black   /* #0a0a0a */

/* Section backgrounds */
bg-black          /* pure black sections */
bg-gray-900       /* elevated sections */
bg-black/40       /* card overlays */

/* Text hierarchy */
text-white        /* headings, primary text */
text-gray-200     /* hero subtitles */
text-gray-300     /* body paragraphs */
text-gray-400     /* muted text, labels */
text-gray-500     /* fine print */
text-yellow-500   /* accent text, highlights, icons */

/* Interactive */
bg-yellow-500 text-black          /* primary CTA */
hover:bg-yellow-400               /* CTA hover */
hover:text-yellow-500             /* link hover */
border-gray-800                   /* card borders */
border-yellow-500/20              /* success state borders */
focus:border-yellow-500           /* input focus */

/* Spacing patterns */
py-20 px-6                        /* section padding */
max-w-4xl mx-auto                 /* content container */
gap-8                             /* grid gaps */
px-8 py-4                         /* button padding */
```
