# DreamCraft-Studio — Style Guide

## Identity
- **Name**: DreamCraft-Studio
- **Tagline**: TBD
- **URL**: TBD
- **Slug**: `/dreamcraft`

## Visual Style: Bold / Geometric

### Direction
- Strong geometric shapes as visual elements (replacing particles)
- Structured grid layout for content cards
- Bold accent colors — potentially warm tones (orange/amber) to contrast Existence's cool spectrum
- Dark background with high-contrast accent pops

### Background
- Dark solid: `#0A0A0A` or similar
- Geometric SVG patterns or CSS grid lines as subtle background texture (no particles)
- Optional: animated geometric shapes on hover/scroll

### Cards
- Sharp corners or minimal radius (`8px`)
- Solid backgrounds with strong borders
- Bold hover states with accent color highlights
- No glass morphism — opaque and structured

### Typography
- Heavy weight for headings (700-900) to convey boldness
- Clean sans-serif — Inter or similar geometric typeface
- Strong size hierarchy between heading and body

### Color Palette (starting point, to be refined)
- Background: `#0A0A0A`
- Card bg: `#141414`
- Border: `#333333`
- Text: `#FFFFFF`
- Accent: TBD — bold warm tone
- Radius: `8px`

### Layout Structure
Same component structure as Existence but with the geometric visual treatment:
1. Profile header
2. Social icons
3. Studio links/projects
4. Footer with DreamCraft-Studio branding

## Content — DreamCraft-Specific Links

Each brand has its own completely separate set of URLs, social links, and project listings. DreamCraft-Studio's links are independent from Existence and We Headless.

### Social Links
TBD — DreamCraft-Studio will have its own social media accounts and URLs.

### Project/App Links
TBD — DreamCraft-Studio's own projects, tools, and services will be listed here. These are entirely separate from Existence's apps (Groove, XFlush, etc.).

All links are defined in `apps/web/lib/brands/dreamcraft.ts` and are **not** shared with the other brands.

### Notes
- Details to be refined during implementation
- The geometric style should feel like a creative studio — professional but bold
- Consider using CSS `clip-path` or SVG shapes for card decorations
