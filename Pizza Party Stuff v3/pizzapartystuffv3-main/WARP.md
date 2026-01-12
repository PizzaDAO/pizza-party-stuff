# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Pizza Party Stuff is a Next.js 15 application that displays a curated list of pizza party supplies. It's built with TypeScript, React 19, Tailwind CSS v4, and uses Turbopack for fast development builds.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build` (also uses Turbopack)
- **Start production server**: `npm start`
- **Linting**: `npm run lint` (ESLint with Next.js config)
- **Type checking**: `npx tsc --noEmit` (manual TypeScript check)

## Architecture

### Directory Structure
```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Home page component
│   └── globals.css      # Tailwind CSS imports and theme variables
├── components/          # Reusable React components
│   ├── HeroBanner.tsx   # Main header component
│   └── SuppliesTable.tsx # Data table component with Supply interface
└── data/
    └── supplies.ts      # Static data for pizza party supplies
```

### Key Components
- **Supply Interface**: Defined in `SuppliesTable.tsx` with fields: `id`, `item`, `rating`, `cost`, `link`, `notes`
- **SuppliesTable**: Renders supplies data in a responsive table with star ratings
- **HeroBanner**: Simple header component with red theme matching pizza branding

### Styling
- Uses Tailwind CSS v4 with `@import "tailwindcss"` syntax
- Custom CSS properties for theming in `globals.css`
- Supports dark mode via `prefers-color-scheme`
- Font stack: Geist Sans and Geist Mono from Google Fonts

### Configuration
- **TypeScript**: Strict mode enabled, uses `@/*` path alias for src imports
- **ESLint**: Extends Next.js core and TypeScript rules
- **Next.js**: Minimal configuration, relies on defaults

## Data Management

The application uses static data from `src/data/supplies.ts`. To modify supplies:
1. Update the `pizzaPartySupplies` array
2. Ensure items follow the `Supply` interface structure
3. Links are currently placeholder URLs (`https://example.com/...`)

## Development Guidelines

- Follow the existing component structure in `src/components/`
- Use TypeScript interfaces for all data structures
- Maintain the existing Tailwind CSS class patterns
- Keep static data in the `src/data/` directory
- Use the `@/` alias for imports from the src directory