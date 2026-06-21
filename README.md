# THE ALTITUDE

> A luxury mountaintop café suspended above the clouds. Glass observatory, alpine landscapes, fireplaces, artisan coffee.

## Overview

THE ALTITUDE is an immersive, cinematic website for a luxury mountaintop café. Built with modern web technologies to deliver a smooth, scroll-driven experience that captures the essence of altitude, glass architecture, and alpine luxury.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** SCSS with custom design tokens
- **Animation:** GSAP 3 + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Text Effects:** SplitType
- **3D Elements:** Three.js (available for extended features)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
04-the-altitude/
├── src/
│   ├── components/
│   │   ├── Loader/          — Cinematic loading sequence
│   │   ├── Navigation/      — Floating nav with scroll detection
│   │   ├── Hero/            — Aerial drone shot with parallax
│   │   ├── MountainStory/   — Editorial storytelling
│   │   ├── SignatureCoffee/ — Floating coffee cards with steam
│   │   ├── AlpineMenu/      — Interactive seasonal menu
│   │   ├── ScenicGallery/   — Full-screen photography
│   │   ├── Observatory/     — 360° mountain rotation
│   │   ├── CoffeeRitual/    — Step-by-step experience
│   │   ├── Sustainability/  — Mountain timeline & stats
│   │   ├── Visit/           — Location & access info
│   │   ├── Reservation/     — Booking form
│   │   ├── Footer/          — Studio credits
│   │   └── Cursor/          — Wind ripple effects
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   ├── useScrollTrigger.ts
│   │   └── useSplitType.ts
│   ├── animations/
│   │   ├── hero.ts
│   │   ├── loader.ts
│   │   ├── sections.ts
│   │   ├── gallery.ts
│   │   └── cursor.ts
│   ├── styles/
│   │   ├── variables.scss   — Design tokens
│   │   ├── global.scss      — Reset & base styles
│   │   └── animations.scss  — Keyframes & reveal classes
│   ├── utils/
│   │   └── constants.ts     — Data & configuration
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Snow | `#F9F9F7` | Primary background |
| Granite | `#777777` | Body text, secondary |
| Sky | `#AFCDEB` | Accent, highlights |
| Deep Blue | `#28435E` | Primary accent |
| Wood | `#7D5F49` | Warm accent |
| Cloud White | `#FFFFFF` | Cards, contrast |
| Charcoal | `#1D1D1D` | Headlines, dark bg |

### Typography
- **Display:** Canela — Headlines, hero text
- **Body:** Suisse International — Paragraphs, UI
- **Mono:** IBM Plex Mono — Labels, metadata

### Spacing
Fluid spacing using `clamp()` with a base gutter of `clamp(1.5rem, 4vw, 4rem)`.

## Sections

1. **Loader** — White screen → clouds form → mountain silhouette → sun rises → logo → camera flies toward observatory
2. **Hero** — Aerial drone shot, glass café above clouds, sun rises, headline fades through mist
3. **Mountain Story** — Editorial storytelling with fog mask transitions
4. **Signature Coffee** — Cards float upward with steam animations
5. **Alpine Menu** — Interactive seasonal menu with smooth transitions
6. **Scenic Gallery** — Full-screen photography with cinematic transitions
7. **Observatory** — 360° mountain rotation with interactive hotspots
8. **Coffee Ritual** — Step-by-step ceremonial experience
9. **Sustainability** — Animated mountain timeline, carbon statistics
10. **Visit** — Location, hours, access methods
11. **Reservation** — Booking form with service options
12. **Footer** — "A LOOKBOOK Studio Experience, © Norman James, made with love ❤️ by Empathy Studio"

## Custom Cursor

The cursor creates subtle wind ripples as it moves across the page. Disabled on touch devices and mobile.

## License

Created by Empathy Studio for Norman James. A LOOKBOOK Studio Experience.
