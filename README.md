# Jeroen de Jong portfolio

This project uses [Vite](https://vite.dev/) and Yarn, managed through [Corepack](https://nodejs.org/api/corepack.html).

## Commands

Run `corepack enable` once on a new machine, then use:

- `corepack yarn install` — install dependencies.
- `corepack yarn dev` — start the development server at http://localhost:5173.
- `corepack yarn test` — run the test suite once.
- `corepack yarn build` — create the production build in `dist`.
- `corepack yarn preview` — serve the production build locally.

## Deployment

Pushes to `master` build the portfolio, the public `textual-clock` repository, and the public `liquid-clock` repository, then deploy the combined site to GitHub Pages through [GitHub Actions](.github/workflows/deploy.yml).

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The side projects only need to produce their own `dist` output with the correct Vite base path; they do not need to know about this deployment.
