# Existence Brand Guide

This document defines the visual identity and design system for Existence's official web presence. Use this as the source of truth when building any page, component, or application for the brand.

---

## 1. Brand Identity

**Name:** Existence
**Tagline:** "Every second counts"
**URL:** https://existence-klcorp.com
**Route Slug:** `/existence`
**Display Name:** Mushin no Shin
**Username:** siyabon_ga (with blue verified badge)
**Aesthetic:** Dark, vibrant, particle-driven — glass morphism cards with mouse-tracking glow effects

---

## 2. Color Palette

### Primary Colors

| Token               | Hex / Value                    | Usage                          |
|---------------------|--------------------------------|--------------------------------|
| `brand-bg`          | `#0F0F0F`                      | Primary page background        |
| `brand-card-bg`     | `rgba(23, 23, 23, 0.73)`       | Card overlay (glass morphism)  |
| `brand-card-inner`  | `#0f0f0f`                      | Inner card surface             |
| `brand-border`      | `#2d2d2d`                      | Card and section borders       |
| `brand-text`        | `#ffffff`                      | Primary text                   |
| `brand-text-muted`  | `gray`                         | Subtitles, secondary text      |
| `brand-accent`      | `#3E2723`                      | Brown accent (Material 900)    |
| `particle-fill`     | `#151515`                      | Particle circle fill           |

### Particle Stroke Colors (Material Design 900 Spectrum)

All 19 colors used for particle circle strokes:

| Color Name    | Hex       |
|---------------|-----------|
| Red           | `#B71C1C` |
| Pink          | `#880E4F` |
| Purple        | `#4A148C` |
| Deep Purple   | `#311B92` |
| Indigo        | `#1A237E` |
| Blue          | `#0D47A1` |
| Light Blue    | `#01579B` |
| Cyan          | `#006064` |
| Teal          | `#004D40` |
| Green         | `#1B5E20` |
| Light Green   | `#33691E` |
| Lime          | `#827717` |
| Yellow        | `#F57F17` |
| Amber         | `#FF6F00` |
| Orange        | `#E65100` |
| Deep Orange   | `#BF360C` |
| Grey          | `#212121` |
| Brown         | `#3E2723` |
| Blue Grey     | `#263238` |

### App Ripple Colors (Click Effects)

| App               | Ripple Color                  |
|--------------------|------------------------------|
| Existence Official | `rgba(62,39,35,0.43)` (Brown)  |
| Groove             | `rgba(27,94,32,0.43)` (Green)  |
| XFlush             | `rgba(136,14,79,0.43)` (Pink)  |
| AfterLife          | `rgba(74,20,140,0.43)` (Purple)|
| TrueTime           | `rgba(13,71,161,0.43)` (Blue)  |
| Cheat Codes        | `rgba(230,81,0,0.43)` (Orange) |
| Plates             | `rgba(183,28,28,0.43)` (Red)   |

### CSS Custom Properties (Tailwind v4)

```css
[data-brand="existence"] {
  --brand-bg: #0F0F0F;
  --brand-card-bg: rgba(23, 23, 23, 0.73);
  --brand-card-inner-bg: #0f0f0f;
  --brand-border: #2d2d2d;
  --brand-text: #ffffff;
  --brand-text-secondary: gray;
  --brand-accent: #3E2723;
  --brand-radius: 20px;
  --brand-font-heading: var(--font-philosopher), Philosopher, serif;
  --brand-font-body: var(--font-roboto), Roboto, sans-serif;
  color-scheme: dark;
}
```

---

## 3. Typography

### Font Stack

| Token          | Font                | Usage                          |
|----------------|---------------------|--------------------------------|
| Heading        | Philosopher (serif) | All headings (h1-h6)          |
| Body           | Roboto (sans-serif) | Body text, subtitles, URLs     |

### Font Loading

Loaded via `next/font/google`:
- Philosopher: weights 400, 700 → CSS variable `--font-philosopher`
- Roboto: weights 300, 400, 500 → CSS variable `--font-roboto`

Original legacy loading from Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css?family=Philosopher:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Element          | Size / Class      | Font     | Weight     |
|------------------|-------------------|----------|------------|
| Display name     | `text-3xl`        | Philosopher | Normal  |
| Section heading  | `text-2xl`        | Philosopher | Normal  |
| Card title       | 17px (`.title`)   | Philosopher | Normal  |
| Card subtitle    | 12px (`.subtitle`)| Roboto   | Normal     |
| Card URL         | 12px              | Roboto   | Normal     |
| Username         | `text-sm`         | —        | Normal     |
| Quote            | —                 | —        | Italic     |
| Footer           | `text-sm`         | —        | Normal     |

### Base Body Styling

```css
body {
  font-family: Roboto, "Helvetica Neue", sans-serif;
  background-color: rgb(15, 15, 15);
  color: white;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Philosopher;
}
```

---

## 4. Layout & Spacing

### Container

- Main content wrapper: `sm:max-w-lg` (512px)
- Centered: `sm:mx-auto`
- Padding: `px-6 pt-10 pb-8 sm:px-10`
- Vertical spacing: `py-6 sm:py-12`

### Component Spacing

| Context                | Value / Class            |
|------------------------|--------------------------|
| Profile name → username | `mt-5`                  |
| Username → image       | `mb-3`                   |
| Image → quote          | `mt-5 mx-5`             |
| Social icons row       | `flex-wrap gap-2 mt-5`  |
| Profile button → sections | `mt-6`               |
| Section title → cards  | —                        |
| Card grid              | `gap-2`                  |
| Card internal padding  | `m-2.5` (10px)           |
| Footer                 | `mb-5`                   |

### Card Dimensions

- Card height: `h-[93px]` (93px)
- Profile button: `h-[45px] w-[80px]`
- Social icon button: mini FAB size (~40px circular)

---

## 5. Components

### Core Card (`.core-card`)

The main page wrapper card with glass morphism:

```
shadow-xl m-2.5 mt-8 sm:m-10 rounded-[20px] border-solid border border-[#2d2d2d] p-2.5
backdrop-blur-md bg-neutral-900/40
```

### Link Card (`.card`)

Two-layer card with glow effect:

**Outer layer (`.card`):**
```css
.card {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
}
```

**Inner layer (`.card-content-dark`):**
```css
.card > .card-content-dark {
  background-color: #0f0f0f;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 5px;
  position: absolute;
  z-index: 2;
  user-select: none;
}
```

**Card content structure:**
```
<card> (h-[93px], relative)
  <card-content-dark> (absolute, inset-1px)
    <flex-row m-2.5>
      <icon-container> (grid place-items-center, mr-3)
        <SVG logo> (width ~46-50px)
      </icon-container>
      <text-column> (flex-col, grow)
        <title> (17px, Philosopher)
        <subtitle> (12px, Roboto, gray)
        <url> (12px, Roboto)
      </text-column>
    </flex-row>
  </card-content-dark>
</card>
```

### Social Icon Buttons

Circular mini FABs with transparent background:
```
flex flex-wrap gap-2 justify-center mt-5
```
Each button: circular (~40px), transparent bg, contains SVG or PNG icon.

### Profile Header

```
<grid justify-center text-center>
  <h1 mt-5 text-white text-3xl Philosopher>Mushin no Shin</h1>
  <div grid justify-center>
    <div mb-3 text-neutral-300 flex-row>
      <span mr-1.5>siyabon_ga</span>
      <VerifiedBadgeSVG fill="#00B6FF" />
    </div>
  </div>
  <img rounded-[20px] max-h-64 sm:max-h-80 place-self-center />
  <blockquote mt-5 mx-5 italic text-white>"The gods envy us..."</blockquote>
</grid>
```

### Verified Badge SVG

Blue checkmark badge (16x16):
```html
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5247 15.1234C8.203 14.9251 7.797 14.9251 7.4753 15.1234L7.14873 15.3247C6.6942 15.6048 6.09974 15.4785 5.79845 15.0377L5.58199 14.721C5.36875 14.409 4.99785 14.2438 4.62332 14.2941L4.24311 14.3452C3.71392 14.4162 3.22226 14.059 3.12631 13.5338L3.05737 13.1564C2.98947 12.7847 2.7178 12.483 2.35519 12.3766L1.98709 12.2686C1.47475 12.1182 1.17088 11.5919 1.29687 11.0731L1.38738 10.7003C1.47655 10.333 1.35109 9.94692 1.0631 9.70224L0.770757 9.45385C0.363852 9.10813 0.300327 8.50373 0.626462 8.08096L0.860777 7.77722C1.0916 7.47801 1.13404 7.07424 0.970468 6.73358L0.804424 6.38776C0.573314 5.90643 0.761114 5.32844 1.23101 5.07488L1.56861 4.8927C1.90117 4.71324 2.10417 4.36164 2.0933 3.9839L2.08227 3.60044C2.06692 3.06672 2.47357 2.61509 3.00597 2.57457L3.38848 2.54546C3.76529 2.51678 4.09375 2.27814 4.23746 1.92864L4.38335 1.57385C4.5864 1.08002 5.1416 0.832836 5.64445 1.01237L6.00573 1.14135C6.36163 1.26842 6.75875 1.18401 7.03219 0.923173L7.30978 0.658391C7.69613 0.289852 8.30387 0.289852 8.69022 0.658392L8.96781 0.923173C9.24125 1.18401 9.63837 1.26842 9.99427 1.14135L10.3555 1.01237C10.8584 0.832836 11.4136 1.08002 11.6167 1.57385L11.7625 1.92864C11.9063 2.27814 12.2347 2.51678 12.6115 2.54546L12.994 2.57457C13.5264 2.61509 13.9331 3.06672 13.9177 3.60044L13.9067 3.9839C13.8958 4.36164 14.0988 4.71324 14.4314 4.8927L14.769 5.07488C15.2389 5.32844 15.4267 5.90643 15.1956 6.38776L15.0295 6.73358C14.866 7.07424 14.9084 7.47801 15.1392 7.77722L15.3735 8.08096C15.6997 8.50373 15.6361 9.10813 15.2292 9.45385L14.9369 9.70224C14.6489 9.94692 14.5234 10.333 14.6126 10.7003L14.7031 11.0731C14.8291 11.5919 14.5253 12.1182 14.0129 12.2686L13.6448 12.3766C13.2822 12.483 13.0105 12.7847 12.9426 13.1564L12.8737 13.5338C12.7777 14.059 12.2861 14.4162 11.7569 14.3452L11.3767 14.2941C11.0021 14.2438 10.6313 14.409 10.418 14.721L10.2015 15.0377C9.90026 15.4785 9.3058 15.6048 8.85127 15.3247L8.5247 15.1234Z" fill="#00B6FF"/>
  <path d="M5.06998 7.56265L7.1913 9.68397L11.4339 5.44133" stroke="white" stroke-width="2"/>
</svg>
```

### Footer

```html
<div class="grid justify-center mb-5">
  <p class="text-sm text-center">
    © {year} Existence, Inc.<br>
    All rights reserved.<br>
    <a href="https://twitter.com/siyabon_ga" target="_blank">Siyabonga Kubeka</a>.
  </p>
</div>
```

---

## 6. Mouse-Tracking Glow Effect

The signature Existence interactive feature. Cards glow subtly as the cursor moves near them.

### JavaScript (mousemove listener)

```typescript
container.addEventListener('mousemove', (event) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  }
});
```

### CSS (pseudo-element glow)

```css
.card:hover::before {
  opacity: 1;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
}

/* Subtle glow following cursor (visible on individual card hover) */
.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
  pointer-events: none;
}

/* Brighter border glow (visible when container is hovered) */
#cards:hover > .card::after {
  opacity: 1;
}

.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  z-index: 1;
}
```

---

## 7. Particle Background

Full-screen particle overlay behind all content. Uses tsparticles with a "snow" preset base.

### Particle Configuration

```typescript
{
  preset: "snow",
  background: {
    color: { value: "#0F0F0F" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "attract" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      attract: { distance: 400, duration: 0.4, speed: 15 },
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#151515"] },
    move: {
      direction: "top",
      enable: true,
      outModes: { default: "out" },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: { enable: true, area: 500 },
      value: 10,
    },
    opacity: { value: 0.8 },
    shape: {
      type: "circle",
      stroke: [
        { width: 5, color: "#B71C1C" },
        { width: 5, color: "#880E4F" },
        { width: 5, color: "#4A148C" },
        { width: 5, color: "#311B92" },
        { width: 5, color: "#1A237E" },
        { width: 5, color: "#0D47A1" },
        { width: 5, color: "#01579B" },
        { width: 5, color: "#006064" },
        { width: 5, color: "#004D40" },
        { width: 5, color: "#1B5E20" },
        { width: 5, color: "#33691E" },
        { width: 5, color: "#827717" },
        { width: 5, color: "#F57F17" },
        { width: 5, color: "#FF6F00" },
        { width: 5, color: "#E65100" },
        { width: 5, color: "#BF360C" },
        { width: 5, color: "#212121" },
        { width: 5, color: "#3E2723" },
        { width: 5, color: "#263238" },
      ],
    },
    size: { value: 200, random: true },
  },
  detectRetina: true,
}
```

### Implementation Notes

- Use `@tsparticles/slim` + `@tsparticles/react` (lighter than full `tsparticles`)
- Dynamically import via `next/dynamic` with `ssr: false`
- Only render for Existence brand: `{brand.slug === "existence" && <ParticleBackground />}`
- Position: fixed/absolute, behind all content (`z-index: 0`)

---

## 8. Content

### Profile Quote

> "The gods envy us. They envy us because we're mortal, because any moment may be our last. Everything is more beautiful because we're doomed. You will never be lovelier than you are now. We will never be here again."

### Social Links (Shared Across All Brands)

| Platform  | URL |
|-----------|-----|
| Twitter/X | https://twitter.com/siyabon_ga |
| Instagram | https://www.instagram.com/xmushin_ |
| YouTube   | https://www.youtube.com/channel/UCgexyO6hnPI1divaPXxLByQ |
| TikTok    | https://www.tiktok.com/@siyabon_ga |
| Facebook  | https://www.facebook.com/profile.php?id=100088547062516 |
| Spotify   | https://open.spotify.com/show/6MVCEpJ28PMZ7VzCpdC00C |
| WhatsApp  | https://wa.me/c/27659192291 |
| GitHub    | https://github.com/XSiya |

### App/Project Links (Existence Ecosystem Only)

| App                | Subtitle              | URL                            |
|--------------------|-----------------------|--------------------------------|
| Existence Official | Every second counts   | https://existence-klcorp.com   |
| Groove             | Catch me outside      | https://groove-l.app           |
| XFlush             | Buster Douglas        | https://xflush.app             |
| AfterLife          | Genesis               | https://after-life.app         |
| TrueTime           | Every Second          | https://true-time.app          |
| Cheat Codes        | Matrix Bug            | https://cheat-codes.app        |
| Plates             | Identity              | https://n-plates.app           |
| Inventions         | Where it all begins   | https://inventions.app         |
| MapMemory          | Identity              | https://n-plates.app           |

---

## 9. Animation & Motion

| Effect              | Implementation                                      |
|---------------------|-----------------------------------------------------|
| Card glow           | `opacity 500ms` transition on `::before`/`::after`  |
| Particle movement   | Upward drift, speed 0.5                             |
| Particle hover      | Repulse at 200px distance, 0.4s duration            |
| Particle click      | Attract at 400px distance, speed 15                 |
| Scroll              | `scroll-behavior: smooth` on `<html>`               |

---

## 10. Imagery

### Profile Image

- File: `mushin-profile-picture-2.jpg`
- Styling: `rounded-[20px] max-h-64 sm:max-h-80 place-self-center`
- Priority loading (above the fold)

### App Logos

Each app card in the legacy site contains an inline SVG logo (~46-50px width). These are detailed, multi-path SVGs with filters and gradient fills. They are embedded directly in the card markup, not separate image files.

---

## 11. Tech Stack Reference

| Technology          | Version    | Purpose                          |
|---------------------|------------|----------------------------------|
| Next.js (App Router)| 16.x       | React framework, SSG             |
| React               | 19.x       | UI library                       |
| TypeScript          | Strict     | Type safety                      |
| Tailwind CSS        | 4.x        | Utility-first styling            |
| tsparticles         | slim       | Particle background (dynamic import) |
| Geist Font          | Variable   | Fallback / other brands          |
| Philosopher         | Google     | Existence headings               |
| Roboto              | Google     | Existence body text              |

---

## 12. Legacy File References

| Feature         | Legacy File                                          | Lines     |
|-----------------|------------------------------------------------------|-----------|
| Particle config | `legacy/src/app/app.component.ts`                    | 15-160    |
| Card glow CSS   | `legacy/src/styles.scss`                             | 85-127    |
| Home template   | `legacy/src/app/home/home.component.html`            | full      |
| Social links    | `legacy/src/app/home/home.component.ts`              | 53-88     |
| App cards       | `legacy/src/app/home/sections/apps/apps.component.html` | full   |
| Ripple colors   | `legacy/src/app/home/sections/apps/apps.component.ts` | 10-15    |
| Official card   | `legacy/src/app/home/sections/offical-website/offical-website.component.html` | full |
| Footer          | `legacy/src/app/home/sections/card-footer/card-footer.component.html` | full |
| Font loading    | `legacy/src/index.html`                              | 18-20     |
| Material theme  | `legacy/src/styles.scss`                             | 1-28      |

---

## Quick Reference: Copy-Paste Tokens

```css
/* Existence brand — paste into globals.css under [data-brand="existence"] */
[data-brand="existence"] {
  --brand-bg: #0F0F0F;
  --brand-card-bg: rgba(23, 23, 23, 0.73);
  --brand-card-inner-bg: #0f0f0f;
  --brand-border: #2d2d2d;
  --brand-text: #ffffff;
  --brand-text-secondary: gray;
  --brand-accent: #3E2723;
  --brand-radius: 20px;
  --brand-font-heading: var(--font-philosopher), Philosopher, serif;
  --brand-font-body: var(--font-roboto), Roboto, sans-serif;
  color-scheme: dark;
}
```
