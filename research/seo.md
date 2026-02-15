# SEO Strategy

## Per-Brand Metadata

Each brand route (`/[brand]`) exports its own metadata via `generateMetadata()`:

```typescript
// apps/web/app/[brand]/layout.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = getBrand(params.brand);
  if (!brand) return {};

  return {
    title: `${brand.name} — Siyabonga Kubeka`,
    description: brand.description,
    openGraph: {
      title: brand.name,
      description: brand.description,
      url: `https://links.siyabonga.dev/${brand.slug}`,
      siteName: "Siyabonga Kubeka Links",
      type: "website",
      images: [`/og/${brand.slug}.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: brand.name,
      description: brand.description,
      creator: "@siyabon_ga",
      images: [`/og/${brand.slug}.png`],
    },
    alternates: {
      canonical: `https://links.siyabonga.dev/${brand.slug}`,
    },
  };
}
```

## Static Generation

All brand pages are pre-rendered at build time:

```typescript
export function generateStaticParams() {
  return [
    { brand: "existence" },
    { brand: "dreamcraft" },
    { brand: "weheadless" },
  ];
}
```

This gives near-zero TTFB from CDN edge.

## Structured Data (JSON-LD)

### Root layout — Person schema
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Siyabonga Kubeka",
  "alternateName": "Mushin no Shin",
  "url": "https://links.siyabonga.dev",
  "sameAs": [
    "https://twitter.com/siyabon_ga",
    "https://github.com/XSiya",
    "https://www.instagram.com/xmushin_"
  ]
}
```

### Per-brand — Organization schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Existence",
  "url": "https://existence-klcorp.com",
  "founder": {
    "@type": "Person",
    "name": "Siyabonga Kubeka"
  }
}
```

## Sitemap

Auto-generated via `apps/web/app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const brands = ["existence", "dreamcraft", "weheadless"];
  return brands.map((brand) => ({
    url: `https://links.siyabonga.dev/${brand}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: brand === "existence" ? 1.0 : 0.8,
  }));
}
```

## Robots

```typescript
// apps/web/app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://links.siyabonga.dev/sitemap.xml",
  };
}
```

## Semantic HTML

Every page uses proper semantic elements:
- `<nav>` for brand tabs
- `<main>` for page content
- `<article>` or `<section>` for each content block
- `<footer>` for copyright
- `<h1>` for brand name (one per page)
- `<a>` with descriptive text for all links

## Fonts

Self-hosted via `next/font/google` — no external requests, no CLS:
- Philosopher (Existence headings)
- Roboto (Existence body)
- Inter (DreamCraft / We Headless)

## Checklist
- [ ] Unique `<title>` and `<meta description>` per brand
- [ ] Open Graph images per brand (1200x630)
- [ ] Twitter card meta tags
- [ ] JSON-LD Person + Organization schemas
- [ ] `sitemap.xml` auto-generated
- [ ] `robots.txt` allows crawling
- [ ] Canonical URLs on each page
- [ ] Semantic HTML throughout
- [ ] Self-hosted fonts (no external requests)
- [ ] Static generation for all pages
