# Di Sustaita — Website

Marketing site for Di Sustaita (digital marketing + AI specialist). Built with
React 19 + TanStack Start (SSR), Tailwind v4, and Motion for animation.

## Structure

- `app/src/routes/index.tsx` — the single page, assembles all sections.
- `app/src/components/site/` — hero, about, services, process, case studies,
  CTA, footer, help chatbot, cursor-glow effects, particle background.
- `app/src/lib/i18n/` — ES/EN translations and the language-switch context.
- `app/public/assets/` — generated images (hero avatar, about photo, section
  backgrounds).
- `app/src/styles.css` — Tailwind v4 setup + the dark/neon brand tokens
  (`--ds-purple`, `--ds-blue`, `--ds-green`, glow-border utilities).

## Run locally

```bash
cd app
bun install
bun run dev
```

Requires Bun. The site is a plain static/SSR React app — no external backend,
no database, no auth. All copy lives in `app/src/lib/i18n/translations.ts`.

## Notes

- Brand colors: deep black `#080808`, electric purple `#7B2FFF`, electric
  blue `#2F6FFF`, WhatsApp green `#25d366`.
- The "Book a call" button currently links to the contact section (`#contacto`)
  — swap in a real calendar link (Calendly/Cal.com) in `hero.tsx` and
  `cta-contact.tsx` (`CALENDAR_URL` constant) when available.
- The hero video card (`hero.tsx`) shows a generated poster image as a
  placeholder — replace with the real intro video when ready.
- Case study video cards (`case-studies.tsx`) are placeholders — swap in real
  client videos.

