"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business, primaryNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="relative block h-12 w-36 shrink-0 sm:h-14 sm:w-44"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-navy.webp"
            alt={business.name}
            fill
            sizes="176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={business.phoneHref} className="text-sm font-semibold text-navy hover:text-brass">
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-navy transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-6 bg-navy transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-navy/10 bg-cream lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4 sm:px-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/5 py-3 text-base font-medium text-navy last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-cream"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
