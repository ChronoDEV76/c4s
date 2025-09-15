# C4S (Chrono4Solutions) — React + Vite

Production‑ready React app scaffolded with Vite and Tailwind CSS.

## Quickstart
- Install deps (pnpm recommended): `pnpm install`
- Dev server: `pnpm dev` → http://localhost:5173
- Lint: `pnpm lint` — ESLint for `.js/.jsx`
- Format: `pnpm fmt` — Prettier write
- Build: `pnpm build` → output in `dist/`
- Preview built app: `pnpm preview`
- Sanity checks: `pnpm check` — env/config + build smoke test

## Project Structure
- `src/main.jsx` — app entry
- `src/App.jsx` — root component
- `src/components/` — shared UI
- `src/pages/` — routed pages
- `public/` — static assets

## Testing
- Framework: Vitest + Testing Library (sample in `src/components/__tests__/`)
- Commands: `pnpm test`, `pnpm test:watch`, `pnpm coverage`

## Contributing
- Commit style: Conventional Commits enforced via Commitlint
- Hooks: pre‑commit runs `pnpm lint`; commit message validated
- PRs: template and automated checks included
- See detailed guidelines in `AGENTS.md`

## Tooling
- Vite + `@vitejs/plugin-react`
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- ESLint (React Hooks/Refresh) + Prettier
