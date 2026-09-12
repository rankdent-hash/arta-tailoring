import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button, Container, SectionHeading } from "@/components/ui";
import { alterationCategories, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alterations & Repairs",
  description:
    "Full alteration and repair services for suits, coats, shirts, trousers, skirts and dresses at Arta Bespoke Tailoring, St James's, London.",
  alternates: { canonical: "/alterations" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Clothing Alterations & Repair",
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

export default function AlterationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Alterations & Repair"
        title="The perfect fit is our guarantee."
        description="We offer full-service alterations for all sorts of clothes and materials, old or new — giving your clothes the instantly recognisable elegance that only comes from a garment properly fitted to your body."
        variant="houndstooth"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-charcoal/75">
            We assess every alteration on the customer, to make sure the finish is right before
            it leaves the shop. We&apos;re alteration specialists, and can work on suits,
            jackets, coats, dresses, trousers, skirts and waistcoats. Why trust a local dry
            cleaner with your alterations, when you can bring them to tailors who focus on
            altering garments, exclusively?
          </p>
        </Container>
      </section>

      <section className="bg-cream-dark py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Full Price List" title="What we alter, by garment" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {alterationCategories.map((category) => (
              <div key={category.title} className="rounded-sm border border-navy/10 bg-white p-6">
                <h3 className="font-serif text-lg text-navy">{category.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/75">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brass">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-cream sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Bring your garment in, and we&apos;ll take it from there.
          </h2>
          <Button href="/contact" variant="primary">
            Request an Appointment
          </Button>
        </Container>
      </section>
    </>
  );
}
