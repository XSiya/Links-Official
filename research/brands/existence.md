# Existence — Style Guide

> Ported from the legacy Angular site with minimal changes.

## Identity
- **Name**: Existence
- **Tagline**: "Every second counts"
- **URL**: https://existence-klcorp.com
- **Slug**: `/existence`

## Visual Style: Vibrant + Particle-Driven

### Background
- Solid dark: `#0F0F0F`
- Particle overlay using tsparticles "snow" preset
- Particles: large circles (size ~200, random), dark fill (`#151515`), with colorful strokes from the full Material Design 900-shade spectrum:
  - `#B71C1C` (Red), `#880E4F` (Pink), `#4A148C` (Purple), `#311B92` (Deep Purple)
  - `#1A237E` (Indigo), `#0D47A1` (Blue), `#01579B` (Light Blue), `#006064` (Cyan)
  - `#004D40` (Teal), `#1B5E20` (Green), `#33691E` (Light Green), `#827717` (Lime)
  - `#F57F17` (Yellow), `#FF6F00` (Amber), `#E65100` (Orange), `#BF360C` (Deep Orange)
  - `#212121` (Grey), `#3E2723` (Brown), `#263238` (Blue Grey)
- Particles move upward slowly (speed 0.5), with hover repulse (200px) and click attract (400px, speed 15)
- FPS limit: 120

### Cards
- Glass morphism: `backdrop-blur-md bg-neutral-900/40`
- Rounded corners: `20px`
- Border: `1px solid #2d2d2d`
- Inner card: `background-color: #0f0f0f`, inset 1px
- **Mouse-tracking glow effect**:
  - `::before` — subtle white glow following cursor (`rgba(255,255,255,0.06)`, 800px circle)
  - `::after` — brighter border glow (`rgba(255,255,255,0.4)`, 600px circle)
  - CSS vars `--mouse-x`/`--mouse-y` updated on mousemove
  - 500ms opacity transition on hover

### App Ripple Colors
Each linked app has its own ripple color on click:
| App | Ripple Color |
|-----|-------------|
| Existence (official) | `rgba(62,39,35,0.43)` (Brown) |
| Groove | `rgba(27,94,32,0.43)` (Green) |
| XFlush | `rgba(136,14,79,0.43)` (Pink) |
| AfterLife | `rgba(74,20,140,0.43)` (Purple) |
| TrueTime | `rgba(13,71,161,0.43)` (Blue) |
| Cheat Codes | `rgba(230,81,0,0.43)` (Orange) |
| Plates | `rgba(183,28,28,0.43)` (Red) |

### Typography
- **Headings**: Philosopher (serif)
- **Body/subtitles**: Roboto (sans-serif)
- Title size: 17px
- Subtitle size: 12px, color: gray
- URL display: 12px, Roboto

### Layout Structure
1. Profile header (centered card):
   - Name: "Mushin no Shin" (3xl, white, Philosopher)
   - Username: "siyabon_ga" with blue verified badge SVG
   - Profile picture: rounded (20px), max-height 256px (320px on sm+)
   - Quote block: italic, white, mx-5
2. Social icons row: 8 mini circular buttons (transparent bg), flex-wrap with gap-2
3. "Profile" button card
4. Official Website section: Existence card with SVG logo
5. Apps section: Grid of app cards (Groove, XFlush, AfterLife, TrueTime, Cheat Codes, Plates, Inventions, MapMemory)
6. Footer: `© {year} Existence, Inc. All rights reserved. Siyabonga Kubeka`

### Social Links (from legacy)
| Platform | URL |
|----------|-----|
| Twitter/X | https://twitter.com/siyabon_ga |
| Instagram | https://www.instagram.com/xmushin_ |
| YouTube | https://www.youtube.com/channel/UCgexyO6hnPI1divaPXxLByQ |
| TikTok | https://www.tiktok.com/@siyabon_ga |
| Facebook | https://www.facebook.com/profile.php?id=100088547062516 |
| Spotify | https://open.spotify.com/show/6MVCEpJ28PMZ7VzCpdC00C |
| WhatsApp | https://wa.me/c/27659192291 |
| GitHub | https://github.com/XSiya |

### Legacy File References
- Particle config: `legacy/src/app/app.component.ts:15-160`
- Card glow CSS: `legacy/src/styles.scss:85-127`
- Home template: `legacy/src/app/home/home.component.html`
- Social links: `legacy/src/app/home/home.component.ts:53-88`
- App cards: `legacy/src/app/home/sections/apps/apps.component.html`
- Material theme: `legacy/src/styles.scss:1-28` (Brown 900 primary, Pink accent)
