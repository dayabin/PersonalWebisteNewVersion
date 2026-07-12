# Yabin Da — Academic Website

The redesigned academic website is built with Astro. The original Hugo project is preserved in `../mywebsite` as a backup.

## Local preview

1. Open this folder in Codex.
2. Run `pnpm install` after downloading the project on a new computer.
3. Run `pnpm run dev` and open the local address shown in the terminal.
4. Run `pnpm run build` before publishing.

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

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: `22`

The current production domain is `https://yabin-da.com/`.
