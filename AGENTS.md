# Repository Guidelines

## Project Structure & Module Organization
- Root: `index.html`, `vite.config.jsx`, `postcss.config.js`, `tailwind.config.js`, lint/format configs.
- Source: `src/` → entry `main.jsx`, app shell `App.jsx`, shared `components/`, routed `pages/`, static `assets/`, styles `index.css` and `App.css`.
- Public assets: `public/` served at site root.
- Build output: `dist/` (ignored by lint; never commit).

## Build, Test, and Development Commands
- `pnpm dev` (or `npm run dev`): start Vite dev server with React Fast Refresh.
- `pnpm build`: production build to `dist/`.
- `pnpm preview`: serve the built app locally.
- `pnpm lint`: run ESLint on `src/` (`.js/.jsx`).
- `pnpm fmt`: format with Prettier (writes in place).
- `pnpm check`: run `sanity-check.sh` (env checks, config sanity, and a build).

## Coding Style & Naming Conventions
- Language: React 18, ES2020+; prefer function components and hooks.
- Formatting: Prettier enforced — semicolons; double quotes; `printWidth: 100`; 2‑space indent.
- Linting: ESLint with React Hooks/Refresh. Fix warnings before commit.
- Files: React components/pages use PascalCase filenames (`Navbar.jsx`, `Home.jsx`); hooks/useful utils camelCase.
- Imports: keep paths tidy and relative within `src/`; co-locate component styles as needed.
- Styling: Tailwind CSS v4; prefer utility classes in JSX; add global styles in `index.css`.

## Testing Guidelines
- No unit test framework is configured yet. Minimum gate: `pnpm lint` and `pnpm build` must pass.
- For new test suites, prefer Vitest + React Testing Library and name files `*.test.jsx` alongside sources.

## Commit & Pull Request Guidelines
- Commits: follow Conventional Commits when possible: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`, `build:`.
- PRs: include a clear description, linked issues, screenshots/gifs for UI changes, and manual test steps. Ensure `pnpm check` passes.

## Security & Configuration Tips
- Runtime: Node 18+ LTS recommended; package manager: `pnpm` (see `package.json` `packageManager`).
- Do not commit secrets/keys; place static files in `public/` and reference via `/...` paths.
- Avoid editing `dist/`; adjust config via `vite.config.jsx`, PostCSS/Tailwind configs.

## Agent-Specific Instructions
- Keep changes focused and minimal. Do not refactor unrelated files.
- Update imports when moving files; maintain directory conventions in `src/components` and `src/pages`.
- Prefer adding scripts/configs over ad-hoc commands to keep the workflow reproducible.

