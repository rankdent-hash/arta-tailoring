"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, primaryNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-navy/10 shadow-[0_4px_20px_rgba(16,25,46,0.08)]" : "border-transparent"
      }`}
    >
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
          {primaryNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-sm font-medium transition-colors ${
                  active ? "text-brass" : "text-charcoal hover:text-brass"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass transition-transform duration-200 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={business.phoneHref} className="text-sm font-semibold text-navy hover:text-brass">
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-md"
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
            className={`h-[1.5px] w-6 bg-navy transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-navy transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-navy transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-navy/10 bg-cream transition-[grid-template-rows,border-color] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4 sm:px-8">
            {primaryNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-navy/5 py-3 text-base font-medium last:border-none ${
                    active ? "text-brass" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-cream"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
