"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/site";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {galleryImages.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActive(i)}
            className={`relative block w-full break-inside-avoid overflow-hidden rounded-sm bg-navy text-left ${
              item.wide ? "aspect-[16/10]" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-6"
          onClick={() => setActive(null)}
        >
          <div className="relative aspect-[4/3] w-full max-w-2xl">
            <Image
              src={galleryImages[active].image}
              alt={galleryImages[active].label}
              fill
              sizes="672px"
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-10 right-0 text-sm font-semibold text-cream"
            >
              Close ✕
            </button>
            <p className="absolute -bottom-8 left-0 text-sm text-cream/80">
              {galleryImages[active].label}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
