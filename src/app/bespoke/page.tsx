import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { HowItWorks } from "@/components/HowItWorks";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bespoke Tailoring — Suits, Shirts & Ladies Bespoke",
  description:
    "Bespoke suits, tailored shirts and ladies bespoke tailoring made by hand at Arta Bespoke Tailoring in St James's, London. Book a consultation.",
  alternates: { canonical: "/bespoke" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bespoke Tailoring",
  provider: {
    "@type": "ClothingStore",
    name: business.name,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.line2,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
  },
  areaServed: "London",
};

const services = [
  {
    id: "suits",
    image: "/images/tile-suits.jpg",
    title: "Tailored Suits",
    description:
      "Two- and three-piece suits, cut from scratch to your measurements. From your first fabric choice to the final fitting, every detail — lapel, canvas, buttons, lining — is decided with you.",
  },
  {
    id: "shirts",
    image: "/images/tile-shirts.jpg",
    title: "Tailored Shirts",
    description:
      "Formal and casual shirts made to your exact measurements, in a wide range of cloths. A properly fitted shirt is the difference between an outfit that's finished and one that isn't.",
  },
  {
    id: "ladies",
    image: "/images/tile-ladies.jpg",
    title: "Ladies Bespoke",
    description:
      "Tailoring for women who want a precise, considered fit — suits, jackets, dresses and separates, cut to flatter your shape rather than a standard size chart.",
  },
];

export default function BespokePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Bespoke Tailoring"
        title="Suits, shirts and ladies bespoke, cut for you."
        description="We don't believe in one size fits all. Every garment is measured, cut and fitted to the person wearing it."
        variant="pinstripe"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Bespoke Range"
            title="Three bespoke services, one standard of fit"
          />
          <div className="mt-14 space-y-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-navy">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-navy sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>How we think custom should be</Eyebrow>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              A guided, one-to-one appointment
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/75">
              In an easy, one-to-one appointment, we&apos;ll guide you through custom fit, style
              and everything else that goes into a well-made garment — no pressure, no jargon,
              just a conversation about what you actually need.
            </p>
            <Button href="/contact" variant="secondary" className="mt-8">
              Request an Appointment
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-navy">
            <Image
              src="/images/pattern-cutting.jpg"
              alt="A pattern being cut by hand from suiting cloth"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <HowItWorks />
    </>
  );
}
