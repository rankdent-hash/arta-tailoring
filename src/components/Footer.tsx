import Image from "next/image";
import Link from "next/link";
import { business, footerLegalNav, primaryNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="relative h-14 w-40">
            <Image
              src="/images/logo-gold.webp"
              alt={business.name}
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Arta Bespoke Tailors handcraft the finest bespoke suits and shirts in the heart of
            St James&apos;s. True to the highest standards of traditional tailoring, we use the
            finest fabrics, the finest tailors, and the finest service.
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-brass-light"
            >
              Facebook
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-brass-light"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brass-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light">Visit &amp; Contact</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-cream/80">
            <p>{business.address.line1}</p>
            <p>
              {business.address.line2}, {business.address.city} {business.address.postcode}
            </p>
            <p className="pt-2">
              <a href={business.phoneHref} className="hover:text-brass-light">
                {business.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-brass-light">
                {business.email}
              </a>
            </p>
            <p className="pt-2 text-cream/60">{business.hoursShort}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/60 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brass-light">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
