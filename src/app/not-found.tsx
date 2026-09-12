import type { Metadata } from "next";
import Link from "next/link";
import { FabricPlaceholder } from "@/components/FabricPlaceholder";
import { Button, Container } from "@/components/ui";
import { primaryNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <FabricPlaceholder variant="herringbone" tone="navy" className="absolute inset-0" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow text-brass-light">404</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          The page you&apos;re looking for cannot be found.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">
          It may have been moved or no longer exists. Try one of the pages below, or head back
          home.
        </p>
        <Button href="/" variant="primary" className="mt-8">
          Return Home
        </Button>
        <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cream/70 hover:text-brass-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
