# Links-Official

A custom link tree for **Siyabonga Kubeka** — founder of three startups.

## About

Links-Official is a personal link tree site that serves as a central hub for all of Siyabonga Kubeka's ventures:

- **Existence** — [existence.co.za](https://existence.co.za)
- **DreamCraft-Studio** — [dreamcraft-studio.com](https://dreamcraft-studio.com)
- **We Headless** — [weheadless.com](https://weheadless.com)

## What's New

This version replaces the previous Existence-only links site with full multi-brand support across all three startups. The old single-brand version will be preserved in a `legacy/` folder for reference.

## Tech Stack

| Technology | Version |
|------------|---------|
| Turborepo  | 2.8     |
| Next.js    | 16      |
| React      | 19      |
| TypeScript | 5.9     |
| pnpm       | 9.0     |

## Project Structure

```
Links-Official/
├── apps/
│   ├── web/               # Main links site (port 3000)
│   └── docs/              # Documentation (port 3001)
├── packages/
│   ├── ui/                # Shared React component library
│   ├── eslint-config/     # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
└── legacy/                # Previous Existence-only links site (coming soon)
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

The main site will be available at `http://localhost:3000`.
