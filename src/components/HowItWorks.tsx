import { Container, SectionHeading } from "@/components/ui";
import { howItWorks } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="bg-navy py-20 text-cream sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first sketch to finished garment"
          description="In an easy, one-to-one appointment, we'll guide you through fit, style and everything in between."
          align="center"
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step) => (
            <div key={step.step}>
              <span className="font-serif text-3xl text-brass-light">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
