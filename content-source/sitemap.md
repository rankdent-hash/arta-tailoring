# Full site inventory — artatailoring.co.uk

Source: `robots.txt` → `Sitemap: https://artatailoring.co.uk/wp-sitemap.xml`, which indexes 5 sub-sitemaps.

## Real, in-nav content pages (12)
| # | URL | Status |
|---|---|---|
| 1 | https://artatailoring.co.uk/ | ✅ Real |
| 2 | https://artatailoring.co.uk/about/ | ❌ Dental demo content — excluded, see cleanup checklist |
| 3 | https://artatailoring.co.uk/services/ | ❌ Dental demo content — excluded, see cleanup checklist |
| 4 | https://artatailoring.co.uk/alterations/ | ✅ Real |
| 5 | https://artatailoring.co.uk/bespoke-tailoring/ | ✅ Real |
| 6 | https://artatailoring.co.uk/gallery/ | ✅ Real (thin) |
| 7 | https://artatailoring.co.uk/offers/ | ⚠️ Empty |
| 8 | https://artatailoring.co.uk/sale/ | ⚠️ Empty |
| 9 | https://artatailoring.co.uk/opening-hours/ | ⚠️ Conflicting demo data |
| 10 | https://artatailoring.co.uk/contact/ | ✅ Real |
| 11 | https://artatailoring.co.uk/privacy-policy/ | ✅ Real (needs legal refresh) |
| 12 | https://artatailoring.co.uk/terms-conditions/ | ⚠️ Real but wrong company name |

Also in the sitemap: https://artatailoring.co.uk/404-error-page/ (the 404 template, not real content) and https://artatailoring.co.uk/category/uncategorized/ (empty default WP category).

## Dental theme leftovers — NOT real content, excluded from this export (22 URLs)
15 `/team-member/...` pages + 7 `/department/...` pages — all dental-clinic staff/theme demo
data, not linked from the real nav. Full removal checklist in
`content/02-cleanup-checklist-remove-dental-content.md`.

## Real navigation structure (as rendered)
**Header/main nav:** Home · Bespoke (→ /bespoke-tailoring/) · Alterations · Gallery · Contact
**Footer nav:** same 5 links, plus Privacy Policy · Terms & Conditions
**Footer credit:** "Made with ❤ by Rankdent" (https://www.rankdent.com)
**Social:** Facebook (facebook.com/artatailoring20) · Instagram (instagram.com/arta_tailoring)

## Raw sitemap index contents (for reference)
- https://artatailoring.co.uk/wp-sitemap-posts-post-1.xml → 1 URL (redirects/duplicates to /sale/)
- https://artatailoring.co.uk/wp-sitemap-posts-page-1.xml → the 13 page URLs listed above
- https://artatailoring.co.uk/wp-sitemap-posts-team-member-1.xml → 15 dentist team-member URLs (excluded — see cleanup checklist)
- https://artatailoring.co.uk/wp-sitemap-taxonomies-category-1.xml → 1 URL (uncategorized)
- https://artatailoring.co.uk/wp-sitemap-taxonomies-department-1.xml → 7 department URLs (excluded — see cleanup checklist)
