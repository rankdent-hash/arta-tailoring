# Arta Bespoke Tailoring — Website Content Export

Source: https://artatailoring.co.uk/
Captured: 11 September 2026
Purpose: Full content/asset inventory to use as source material for a redesign to be built in Claude Code and deployed to GitHub + Vercel.

## Business facts (confirmed on multiple pages)

- **Business name:** Arta Bespoke Tailoring
- **Address:** 20 Crown Passage, St. James's, London SW1Y 6PP
- **Phone:** 020 7839 5511
- **Email:** contact@artatailoring.co.uk
- **Opening hours (as shown consistently in header/footer):** Mon–Fri 8:00–18:00, Sat 10:00–17:00
- **Facebook:** https://www.facebook.com/artatailoring20/
- **Instagram:** https://www.instagram.com/arta_tailoring/
- **Current stack:** WordPress (theme is a repurposed dental-clinic theme). Footer credits "Made with ❤ by Rankdent" (Fred's own agency).
- **Real, working nav:** Home / Bespoke / Alterations / Gallery / Contact

## Dental theme leftovers — excluded from this export per Fred's instruction

The site was originally built on a dental-clinic WordPress theme, and several pages/posts are
still showing that theme's unreplaced demo content (dentist bios, dental pricing, "Dentalia"
branding, Lorem ipsum). As instructed, **none of that content is included as source material
here** — see `content/02-cleanup-checklist-remove-dental-content.md` for the full list of what
still needs deleting on the live site (I don't have WP admin access, so that part has to be
done from the WordPress dashboard):

- `/about/` and `/services/` pages — currently pure dental demo content, nothing usable
- 15 `/team-member/...` URLs — dentist/hygienist/nurse bios
- 7 `/department/...` taxonomy pages
- `/offers/`, `/sale/` — not dental, but effectively empty (flagged below, not excluded)
- `/opening-hours/` — not dental, but shows 6 conflicting demo schedules (flagged below)

## What's in this export

```
00-README-START-HERE.md      ← this file
content/                     ← page-by-page text content (verbatim where possible)
  01-home.md
  02-cleanup-checklist-remove-dental-content.md   (dental leftovers — action list, not source content)
  04-alterations.md
  05-bespoke-tailoring.md
  06-gallery.md
  07-offers.md                (flagged — empty)
  08-sale.md                  (flagged — empty)
  09-opening-hours.md         (flagged — conflicting demo data)
  10-contact.md
  11-privacy-policy.md
  12-terms-conditions.md      (flagged — wrong company name)
sitemap.md                    ← every real URL found, from the site's own XML sitemaps
images-manifest.csv           ← every genuine (non-dental) image found across the site: URL,
                                 alt text, source page, likely use
download-images.sh            ← ready-to-run script to bulk-download every one of those images
                                 once you're in an environment with normal internet access
```

## Pages with genuine, usable content
Home, Alterations (detailed — full alteration price/service list by garment type), Bespoke
Tailoring, Gallery (thin — only 2–3 real photos), Contact, Privacy Policy (dated wording,
worth a legal refresh). Offers, Sale, Opening Hours and Terms & Conditions are real (not
dental) but have their own problems — each file says exactly what's wrong.

## About the images — please read

This Cowork session runs in a locked-down sandbox with no general internet access (only a small
allowlist of package registries) and no linked browser/computer, so I could only reach the site
through the web-fetch tool — which can read and describe pages but can't save binary image files.
I was **not able to actually download the image files** in this session.

What I *did* do: catalogued every genuine (non-dental) image on the site — its exact URL, alt
text, and where it's used — in `images-manifest.csv`, and wrote `download-images.sh`, a
one-command script that will pull every one of them into an `images/` folder. Run that script
once you're working in Claude Code (which has normal internet access) and it'll fetch the lot
in seconds. If you'd rather I fetch them right now, connect this session to your computer or
Chrome (there's an option for that in Cowork) and ask me to try again — with either of those
linked I can download them directly.

Many images are WordPress-generated thumbnails (URLs ending like `-150x150.jpg` or `-750x750.jpg`).
The script also tries the un-suffixed original filename for each one, since that's usually the
full-resolution source image — it just skips any guess that doesn't exist.
