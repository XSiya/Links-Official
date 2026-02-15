# Component Inventory

All components live in `apps/web/components/`. They receive brand data as props from the route — no global state needed.

## BrandTabs

Tab navigation rendered as a `<nav>` with Next.js `<Link>` elements. Highlights the active brand. Always visible at the top of the page.

```
Props: { activeBrand: string }
Renders: <nav> with 3 <Link> items (Existence, DreamCraft-Studio, We Headless)
Behavior: Client-side navigation, active tab highlighted with brand accent color
```

## ProfileHeader

Centered profile section with avatar, name, username, and optional quote. Content varies per brand but structure is shared.

```
Props: { name: string, username: string, image: string, quote?: string, verified?: boolean }
Renders: Profile image, display name, username with verified badge, quote block
```

Ported from: `legacy/src/app/home/home.component.html` (lines 6-23)

## SocialIcons

Row of social media icon buttons. Uses `lucide-react` icons (replacing Angular Material FABs).

```
Props: { links: SocialLink[] }
Renders: Flex row of circular icon buttons, each opens URL in new tab
```

Ported from: `legacy/src/app/home/home.component.html` (lines 25-66)

## LinkCard

Clickable card showing an app/project with logo, title, subtitle, and URL. Supports the mouse-tracking glow effect for Existence brand.

```
Props: { title: string, subtitle: string, url: string, icon?: ReactNode, rippleColor?: string, enableGlow?: boolean }
Renders: Card with flex row (icon left, text right), click opens URL
```

Ported from: `legacy/src/app/home/sections/apps/apps.component.html`
Glow effect from: `legacy/src/styles.scss:85-127`

### Glow Effect (Existence only)
The mouse-tracking glow is a `useEffect` that attaches a `mousemove` listener to the card container, updating `--mouse-x`/`--mouse-y` CSS variables. The `::before` and `::after` pseudo-elements create the radial gradient glow.

## LinkSection

Groups a set of LinkCards under a section heading.

```
Props: { title: string, links: LinkItem[] }
Renders: <section> with <h2> title and list of <LinkCard> components
```

## BrandLayout

Wrapper component that applies the brand's theme via `data-brand` attribute. All child components inherit CSS custom properties from this wrapper.

```
Props: { brand: Brand, children: ReactNode }
Renders: <div data-brand={slug}>{children}</div>
```

## ParticleBackground

tsparticles wrapper — only rendered for Existence. Dynamically imported to avoid loading the library for other brands.

```
Props: none (config is hardcoded from legacy)
Renders: Full-screen absolute-positioned particle canvas
```

Ported from: `legacy/src/app/app.component.ts:15-160`
Package: `@tsparticles/slim` + `@tsparticles/react` (lighter than full `tsparticles`)

## Footer

Simple copyright footer with brand name and year.

```
Props: { brandName: string }
Renders: <footer> with © {year} {brandName}. Siyabonga Kubeka.
```

Ported from: `legacy/src/app/home/sections/card-footer/card-footer.component.html`

---

## Page Composition

Each brand page assembles these components:

```tsx
<BrandLayout brand={brand}>
  {brand.slug === "existence" && <ParticleBackground />}
  <BrandTabs activeBrand={brand.slug} />
  <main>
    <ProfileHeader {...brand.profile} />
    <SocialIcons links={brand.socialLinks} />
    {brand.sections.map(section => (
      <LinkSection key={section.title} {...section} />
    ))}
  </main>
  <Footer brandName={brand.name} />
</BrandLayout>
```
