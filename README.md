# Yabin Da — Academic Website

The redesigned academic website is built with Astro. The original Hugo project is preserved in `../mywebsite` as a backup.

## Local preview

1. Use Node.js 24 LTS, enable Corepack, and open this folder in Codex.
2. Run `pnpm install --frozen-lockfile` after downloading the project on a new computer.
3. Run `pnpm run dev` and open the local address shown in the terminal.
4. Run `pnpm run check` and `pnpm run build` before publishing. The package manager version is pinned in `package.json`.

## Where to update content

- Homepage: `src/pages/index.astro`
- Research page: `src/pages/research/index.astro`
- Publications: `src/content/publications/`
- Teaching page: `src/pages/teaching/index.astro`
- Resources page: `src/pages/resources/index.astro`
- Writing page: `src/pages/writing/index.astro`
- Gallery page: `src/pages/gallery/index.astro`
- Gallery photos: `public/gallery/`
- CV: `public/uploads/yabinda.pdf`

## Publishing

The project includes `netlify.toml`. Netlify should use:

- Build command: `pnpm run check && pnpm run build`
- Publish directory: `dist`
- Node.js version: `24` (LTS)

The current production domain is `https://yabin-da.com/`.

## Updating a publication

Edit its existing `src/content/publications/<slug>/index.md` file to preserve incoming links when a working paper is published. Update the title, complete author order, publication date, journal reference, DOI, and publisher link; set `publication_types` to `article-journal`. The Research page sorts articles automatically. Add the slug to `preferred` in `src/pages/index.astro` to feature it on the homepage.

Publication metadata is validated during builds. Bare DOI identifiers are normalized to `https://doi.org/` links. Keep the CV PDF unchanged here unless a replacement is supplied by the separate CV task.
