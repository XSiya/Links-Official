# Architecture Decisions

## Routing — Hybrid Dynamic Routes

Each startup lives at its own URL for SEO, while tab navigation uses Next.js `<Link>` for instant client-side transitions.

```
/                     → redirects to /existence (default brand)
/existence            → Existence links page
/dreamcraft           → DreamCraft-Studio links page
/weheadless           → We Headless links page
```

Implementation: `apps/web/app/[brand]/page.tsx` with `generateStaticParams()` returning all 3 slugs. Pages are statically generated at build time.

## Theming — CSS Custom Properties + `data-brand`

Each brand's visual identity is driven by CSS custom properties scoped under a `data-brand` attribute. This is zero-cost at runtime and fully SSR-compatible.

```css
[data-brand="existence"] {
  --brand-bg: #0F0F0F;
  --brand-card-bg: rgba(23, 23, 23, 0.73);
  --brand-border: #2d2d2d;
  --brand-text: #ffffff;
  --brand-accent: #3E2723;
  --brand-radius: 20px;
}

[data-brand="dreamcraft"] {
  --brand-bg: #0A0A0A;
  --brand-card-bg: #141414;
  --brand-border: #333333;
  --brand-text: #ffffff;
  --brand-accent: #FF6B00;
  --brand-radius: 8px;
}

[data-brand="weheadless"] {
  --brand-bg: #FAFAFA;
  --brand-card-bg: #FFFFFF;
  --brand-border: #E0E0E0;
  --brand-text: #1A1A1A;
  --brand-accent: #000000;
  --brand-radius: 0px;
}
```

The `BrandLayout` component wraps page content with `<div data-brand={slug}>`, and all components reference `var(--brand-*)` variables.

## Data Model — Typed Brand Configs

Each brand has a config file exporting typed data:

```typescript
// apps/web/lib/brands/types.ts
export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;          // for SEO meta description
  url: string;                  // official website
  profileImage: string;
  quote?: string;
  socialLinks: SocialLink[];
  sections: Section[];
  theme: BrandTheme;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Section {
  title: string;
  links: LinkItem[];
}

export interface LinkItem {
  title: string;
  subtitle: string;
  url: string;
  icon?: string;                // SVG path or component name
  rippleColor?: string;         // Existence-specific
}

export interface BrandTheme {
  background: string;
  cardBackground: string;
  border: string;
  text: string;
  accent: string;
  radius: string;
  font: { heading: string; body: string };
}
```

A `getBrand(slug: string)` function in `brands/index.ts` returns the brand config or `null` for 404 handling.

## Component Strategy

All components live in `apps/web` (not `@repo/ui`) since they are specific to this app. They consume brand data via props — no global state needed since the brand is determined by the URL route.

Brand-specific features (particles, glow effects) are conditionally rendered based on the brand slug, with dynamic imports for heavy dependencies like tsparticles.

## Tech Choices

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Styling | Tailwind CSS v4 | Matches legacy approach, utility-first, fast iteration |
| Particles | `@tsparticles/slim` + `@tsparticles/react` | Lighter than `tsparticles` full, dynamic import for Existence only |
| Icons | `lucide-react` | Lightweight, tree-shakeable, replaces Material Icons |
| Fonts | `next/font/google` | Self-hosted, no CLS, Philosopher + Roboto + Inter |
| SEO | Next.js Metadata API | `generateMetadata()` per brand route |
