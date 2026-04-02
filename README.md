# Yi-Chen Sun Astro CV Website

This project is an Astro-based academic website and CV portfolio generated from the current Word CV content.

## Files

- `src/pages/` — Astro pages for Home, Publications, Projects, CV, and Contact
- `src/layouts/` — reusable page layout
- `src/components/` — shared UI components
- `src/data/site.ts` — site content and structured data
- `src/styles/global.css` — global site styling
- `public/` — static assets copied directly to the final build, including the CV PDF

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This project is configured as a static Astro site and can be deployed to GitHub Pages after build output is published according to your preferred workflow.


## GitHub Pages deployment (ready to use)

This project now includes `.github/workflows/deploy.yml` for direct deployment to GitHub Pages using the official Astro GitHub Action.

### One-time GitHub setup

1. Push the entire project to your GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Commit and push changes to the `main` branch.
5. GitHub Actions will build and deploy the site automatically.

### Notes for this repository

- `site` is already set to `https://nycu-syc.github.io` in `astro.config.mjs`.
- This configuration is correct for a user/organization site hosted at the root domain.
- If you later move this Astro project to a project repository such as `my-cv-site`, you should also add a `base` value in `astro.config.mjs`.

### Commands

```bash
npm install
npm run dev
npm run build
```
