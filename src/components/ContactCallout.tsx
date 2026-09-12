import { Button, Container, Eyebrow } from "@/components/ui";
import { business } from "@/lib/site";

export function ContactCallout() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
            Request an appointment
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75">
            Tell us a little about what you need and we&apos;ll get back to you during our
            working hours — or call us directly on{" "}
            <a href={business.phoneHref} className="font-semibold text-brass">
              {business.phone}
            </a>
            .
          </p>
          <Button href="/contact" variant="secondary" className="mt-8">
            Go to Contact Page
          </Button>
        </div>
        <div className="rounded-sm border border-navy/10 bg-cream p-8">
          <h3 className="font-serif text-xl text-navy">Opening Hours</h3>
          <dl className="mt-4 space-y-2 text-sm">
            {business.hours.map((h) => (
              <div key={h.day} className="flex justify-between border-b border-navy/10 py-2">
                <dt className="text-charcoal/70">{h.day}</dt>
                <dd className="font-medium text-navy">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
