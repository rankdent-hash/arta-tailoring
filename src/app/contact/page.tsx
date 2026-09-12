import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arta Bespoke Tailoring at 20 Crown Passage, St James's, London, or request an appointment online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request an appointment."
        description="Fill out the form below and we'll contact you during our working hours — or call us directly."
        variant="weave"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl text-navy">Visit the Studio</h2>
              <address className="mt-3 space-y-1 text-sm not-italic text-charcoal/75">
                <p>{business.address.line1}</p>
                <p>
                  {business.address.line2}, {business.address.city} {business.address.postcode}
                </p>
              </address>
              <a
                href={business.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-brass hover:underline"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">Call or Email</h2>
              <p className="mt-3 text-sm text-charcoal/75">
                <a href={business.phoneHref} className="font-semibold text-navy hover:text-brass">
                  {business.phone}
                </a>
              </p>
              <p className="mt-1 text-sm text-charcoal/75">
                <a href={`mailto:${business.email}`} className="hover:text-brass">
                  {business.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-navy">Opening Hours</h2>
              <dl className="mt-3 space-y-1 text-sm">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-charcoal/75">
                    <dt>{h.day}</dt>
                    <dd className="font-medium text-navy">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-sm border border-navy/10">
              <iframe
                title="Arta Bespoke Tailoring location"
                src={business.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
