# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Links-Official is Siyabonga Kubeka's custom link tree site, supporting three startups: Existence, DreamCraft-Studio, and We Headless. It replaces a previous Existence-only links site (to be preserved in `legacy/`).

## Architecture

Turborepo monorepo using pnpm workspaces:

- **apps/web** — Main links site (Next.js 16, port 3000)
- **apps/docs** — Documentation site (Next.js 16, port 3001)
- **packages/ui** — Shared React component library (`@repo/ui`). Components are exported via `"./*": "./src/*.tsx"` — import as `@repo/ui/button`, `@repo/ui/card`, etc.
- **packages/eslint-config** — Shared ESLint configs with three presets: `base`, `next-js`, `react-internal`
- **packages/typescript-config** — Shared tsconfig with `base.json`, `nextjs.json`, `react-library.json`

Both apps depend on `@repo/ui` at runtime and `@repo/eslint-config` + `@repo/typescript-config` at dev time.

## Commands

```bash
pnpm install          # Install all dependencies
pnpm dev              # Start all dev servers (web:3000, docs:3001)
pnpm build            # Build all apps and packages
pnpm lint             # Lint all apps and packages
pnpm check-types      # Type-check all apps and packages
pnpm format           # Prettier format all .ts, .tsx, .md files
```

Filter to a single app/package with Turbo:
```bash
pnpm turbo dev --filter=web
pnpm turbo build --filter=docs
pnpm turbo lint --filter=@repo/ui
```

Generate a new UI component:
```bash
cd packages/ui && pnpm generate:component
```

## Key Conventions

- All packages are ESM (`"type": "module"`)
- All code is TypeScript — strict mode enabled, `noUncheckedIndexedAccess` on
- ESLint is configured with `--max-warnings 0` — warnings are not tolerated
- Client components in `@repo/ui` must have `"use client"` directive
- Apps use `next typegen` before type-checking (`next typegen && tsc --noEmit`)
