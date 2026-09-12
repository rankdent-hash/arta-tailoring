import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at finished garments and work from Arta Bespoke Tailoring in St James's, London.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the work."
        description="A small selection of finished garments and fittings. Click any piece for a closer look."
        variant="herringbone"
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <p className="mb-10 max-w-2xl text-sm text-charcoal/60">
            A small selection of real photography from the studio and past work. Follow us on
            Instagram and Facebook for the latest finished pieces.
          </p>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
