# Brand

`brand.json` is where the docs read the product name, the URLs and the GitHub repos from:

- `github.repo` is the app repo (`Seylo-dev/App`): the GitHub link in the header, release downloads and
  `bun run openapi:sync`.
- `github.docsRepo` is this repo: the "Edit on GitHub" link on every page.
- `license` is the app's license, not this repo's (see `LICENSE` and `LICENSE-CONTENT`).

It mirrors `brand/brand.json` in the app repo, which the panel, agent and installer read. Keep the URLs in sync
when the brand or the domains change.

`mark.svg` is the logo mark. `components/brand-logo.tsx` and `app/icon.svg` inline it.
