# Arta Bespoke Tailoring — website

Redesigned website for Arta Bespoke Tailoring, a bespoke tailoring studio at 20 Crown Passage,
St James's, London.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS v4
- Static/SSG pages, no CMS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — one route per page (Home, Bespoke, Alterations, About, Gallery, Contact,
  Privacy Policy, Terms & Conditions), plus `sitemap.ts` and `robots.ts`.
- `src/components/` — shared UI (header, footer, hero, section blocks).
- `src/lib/site.ts` — all business facts and page content in one place (address, phone,
  hours, nav, service copy, alteration price list, etc).
- `content-source/` — the original content export from the old WordPress site, kept for
  reference.
- `public/images/` — real photography and logos supplied for the redesign.

## Notes

- Business facts (address, phone, email, hours, socials) are taken from `content-source/`
  and should be reconfirmed with the client before launch — see the project handoff notes.
- Terms & Conditions and Privacy Policy were rewritten from scratch (the old copy named a
  different company and referenced outdated law) and should get a final legal read-through
  before launch.
