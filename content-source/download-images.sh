#!/usr/bin/env bash
# Downloads every image found on artatailoring.co.uk into ./images/
#
# Run this from an environment with normal internet access (e.g. your Claude Code
# session, or your own machine) - NOT inside the sandboxed Cowork session that produced
# this export, which has no general internet access.
#
# For each image this also tries the un-suffixed "original" filename (WordPress
# generates sized thumbnails like foo-750x750.jpg from an original foo.jpg / foo.png) -
# if a higher-res original exists it's kept as *-original.ext alongside the thumbnail
# that's confirmed to exist.

set -uo pipefail
mkdir -p images

urls=(
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/arta-bespoke-tailoring-1.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/arta-bespoke-tailoring-logo.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/05/IMG_0061.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/cat-thumb1-150x150.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/03/Attachment-1-150x150.jpeg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/E_SRO_B-2-1-150x150.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/bespoke_suit-2.jpeg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/arta-bespoke-tailoring-london-Copy-555x740.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/photo.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/arta-tailoring-london.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/acorn-fabrics.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/97ed43d29381198c93bfbadb177acb81_src.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/pic_63.png"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/RC.GH1_.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/04/7376a3a693ff4ad2d25bafcbc146dd19-1-750x318.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/03/wedding-sleeve-length-Small.jpeg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/03/7592253328_IMG_0426-300x200.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/04/static1.squarespace-1-300x173.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/04/IMG_0338-750x750.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/arta-bespoke-tailoring-750x750.jpg"
  "https://i2.wp.com/artatailoring.co.uk/wp-content/uploads/2018/02/cat-thumb2-300x300.jpg"
)

ok=0
fail=0

for url in "${urls[@]}"; do
  fname="$(basename "$url")"
  echo "Fetching $fname ..."
  if curl -sSL -f -o "images/$fname" "$url"; then
    ok=$((ok+1))
  else
    echo "  FAILED: $url"
    fail=$((fail+1))
  fi

  # Try the un-suffixed "original" filename too (e.g. foo-750x750.jpg -> foo.jpg)
  orig=$(echo "$fname" | sed -E 's/-[0-9]+x[0-9]+(\.[A-Za-z]+)$/\1/')
  if [ "$orig" != "$fname" ]; then
    orig_url=$(echo "$url" | sed -E 's/-[0-9]+x[0-9]+(\.[A-Za-z]+)$/\1/')
    orig_out="images/${orig%.*}-original.${orig##*.}"
    if curl -sSL -f -o "$orig_out" "$orig_url"; then
      echo "  + also found full-res original: $orig_out"
    else
      rm -f "$orig_out"
    fi
  fi
done

echo ""
echo "Done. $ok/${#urls[@]} images downloaded into ./images/ ($fail failed)."
echo "Also fetching the site's two logo files directly from the primary domain as a fallback source:"
curl -sSL -f -o "images/logo-primary-fallback.png" "https://artatailoring.co.uk/wp-content/uploads/2018/02/arta-bespoke-tailoring-1.png" 2>/dev/null || true
