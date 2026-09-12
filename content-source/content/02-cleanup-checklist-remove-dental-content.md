# Cleanup checklist — dental theme leftovers to remove from the live WordPress site

Per Fred's note: the site was built on a dental-practice WordPress theme, and this content
should be ignored/removed rather than carried into the redesign. It's **not included** as
source content anywhere else in this export. This file is just the removal checklist for
whoever has WordPress admin access to artatailoring.co.uk — I don't have login access to
that site myself, so this can't be actioned from here; it needs doing in the WP dashboard
(or by whoever manages hosting/WP admin).

## 1. Pages to delete or fully rewrite
- **About** (`/about/`) — currently 100% dental clinic demo content ("WE ARE DENTALIA", Lorem
  ipsum, a "MEET THE TEAM" section of 15 dentists). WP Admin → Pages → About → Trash (or leave
  the page/slug in place and replace its content entirely in the redesign).
- **Services** (`/services/`) — currently dental services, dental pricing, and a fake San
  Francisco emergency-contact block. WP Admin → Pages → Services → Trash (or replace content).

## 2. Custom post types to delete entirely (15 team-member entries)
WP Admin → look for a "Team" or "Team Members" menu item (custom post type) → Trash each of:
Dr. Chang I Chun Teoh, Dr Rebecca Exley, Dr. Vanisha Gajjar BDS, Dr Stephanie Smith BDS,
Dr Sarika Vekaria, Zahir Jiwan, Pramila, Kwame Appiah, Alex Bender, Pat Vondee, Wam Sianga,
Dr. Christopher K. E. Vondee, Ati Aghaei, Emma Sahami, Kerry Harris.

Live URLs (for reference / to confirm they're gone afterwards):
- https://artatailoring.co.uk/team-member/dr-chang-i-chun-teoh/
- https://artatailoring.co.uk/team-member/dr-rebecca-exley/
- https://artatailoring.co.uk/team-member/dr-vanisha-gajjar-bds/
- https://artatailoring.co.uk/team-member/dr-stephanie-smith-bds/
- https://artatailoring.co.uk/team-member/dr-sarika-vekaria/
- https://artatailoring.co.uk/team-member/zahir-jiwan/
- https://artatailoring.co.uk/team-member/pramila/
- https://artatailoring.co.uk/team-member/kwame-appiah/
- https://artatailoring.co.uk/team-member/alex-bender/
- https://artatailoring.co.uk/team-member/pat-vondee/
- https://artatailoring.co.uk/team-member/wam-sianga/
- https://artatailoring.co.uk/team-member/dr-christopher-k-e-vondee-2/
- https://artatailoring.co.uk/team-member/ati-aghaei/
- https://artatailoring.co.uk/team-member/emma-sahami/
- https://artatailoring.co.uk/team-member/kerry-harris-2/

## 3. Taxonomy/department pages to delete (7)
- https://artatailoring.co.uk/department/dentist/
- https://artatailoring.co.uk/department/hygienist/
- https://artatailoring.co.uk/department/receptionists/
- https://artatailoring.co.uk/department/nurse/
- https://artatailoring.co.uk/department/management/
- https://artatailoring.co.uk/department/business-development/
- https://artatailoring.co.uk/department/dentists/

## 4. Also worth trashing while cleaning up
- https://artatailoring.co.uk/category/uncategorized/ — empty default WordPress category
- https://artatailoring.co.uk/404-error-page/ — only relevant if it's an actual page rather than
  the theme's built-in 404 template; check before deleting

## Why this matters
All of the above are currently live and listed in the site's own XML sitemap
(`wp-sitemap-posts-team-member-1.xml`, `wp-sitemap-taxonomies-department-1.xml`), so search
engines can index dentist bios on a bespoke tailoring domain. Once deleted, submitting the
updated sitemap (or just letting Google recrawl) will drop them from the index. If the new
site launches on the same domain, these URLs should return a real 404 (or a 410 Gone) rather
than silently redirecting anywhere.
