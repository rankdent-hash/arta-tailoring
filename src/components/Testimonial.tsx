import { Container } from "@/components/ui";
import { testimonial } from "@/lib/site";

export function Testimonial() {
  return (
    <section className="bg-cream-dark py-20 sm:py-28">
      <Container className="max-w-3xl text-center">
        <span className="font-serif text-6xl leading-none text-brass/40" aria-hidden="true">
          &ldquo;
        </span>
        <p className="eyebrow -mt-2 text-brass">In their words</p>
        <blockquote className="mt-6 font-serif text-2xl leading-snug text-navy sm:text-3xl">
          {testimonial.quote}
        </blockquote>
        <footer className="mt-6 text-sm text-charcoal/70">
          <span className="font-semibold text-navy">{testimonial.name}</span>
          {" — "}
          {testimonial.context}
        </footer>
      </Container>
    </section>
  );
}
