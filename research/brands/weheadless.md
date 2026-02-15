# We Headless — Style Guide

## Identity
- **Name**: We Headless
- **Tagline**: TBD
- **URL**: TBD
- **Slug**: `/weheadless`

## Visual Style: Flat / Line-Based / Minimal

### Direction
- Clean, flat design with thin lines and borders as the primary visual language
- Minimal color — monochrome or near-monochrome with a single subtle accent
- Generous whitespace, understated transitions
- Light theme (contrast to Existence and DreamCraft's dark themes)

### Background
- Light solid: `#FAFAFA` or `#FFFFFF`
- No background effects, particles, or patterns — pure clean surface

### Cards
- No border-radius (`0px`) or minimal (`2px`) — sharp and clean
- Thin `1px` borders in light grey
- White card on off-white background for subtle depth
- Hover: thin accent-colored border or underline, no dramatic glow

### Typography
- Light to regular weight (300-400) — thin and elegant
- Monospace or geometric sans-serif for a technical/headless feel
- Restrained size hierarchy — compact and efficient

### Color Palette (starting point, to be refined)
- Background: `#FAFAFA`
- Card bg: `#FFFFFF`
- Border: `#E0E0E0`
- Text: `#1A1A1A`
- Accent: `#000000` (or a single muted color)
- Radius: `0px`

### Layout Structure
Same component structure but stripped down:
1. Profile header — minimal, clean text
2. Social icons — outlined/line-style icons
3. Links — simple list or thin-bordered cards
4. Footer — minimal copyright

## Content — We Headless-Specific Links

Each brand has its own completely separate set of URLs, social links, and project listings. We Headless's links are independent from Existence and DreamCraft-Studio.

### Social Links
TBD — We Headless will have its own social media accounts and URLs.

### Project/Service Links
TBD — We Headless's own services, tools, and resources will be listed here. These are entirely separate from Existence's apps (Groove, XFlush, etc.) and DreamCraft-Studio's projects.

All links are defined in `apps/web/lib/brands/weheadless.ts` and are **not** shared with the other brands.

### Notes
- This is a light-theme brand — the only one of the three
- The "headless" name suggests tech/developer aesthetic — consider code-like elements
- Animations should be subtle: opacity fades, slight transforms, no bounces
- Details to be refined during implementation
