import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Arta Bespoke Tailoring is a small, hands-on tailoring studio in St James's, London, making bespoke suits, shirts and ladies tailoring, and handling alterations and repairs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A small studio, built around a proper fit."
        description="Arta Bespoke Tailoring has been making and altering garments from Crown Passage, St James's — a quiet corner of London with a long tailoring tradition."
        variant="weave"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-charcoal/75">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              We make it, we fit it, it&apos;s yours.
            </h2>
            <p>
              We&apos;re a small tailoring studio, and we&apos;ve kept it that way on purpose.
              Being small means every garment that goes out the door has had real attention paid
              to it — by hand, by someone who was in the room for your fitting.
            </p>
            <p>
              St James&apos;s has been home to London tailoring for generations, and Crown
              Passage puts us right in the middle of it — a short walk from Jermyn Street and
              Savile Row, but without the queue or the price tag that can come with the address.
            </p>
            <p>
              We work across the full range of fabrics — wool, cotton, velvet, silk — and across
              the full range of bodies. Bespoke, to us, simply means the garment is built around
              you: your measurements, your posture, the way you actually intend to wear it.
              That&apos;s as true for a first suit as it is for altering a dress you already
              love.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-navy">
            <Image
              src="/images/studio-shopfront.png"
              alt="The Arta Bespoke Tailoring shopfront on Crown Passage, St James's"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20 sm:py-28">
        <Container className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-navy">Made by hand</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
              Every stage of a bespoke garment — measuring, cutting, fitting, finishing — is done
              in person, not off a size chart.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-navy">Fit comes first</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
              We&apos;d rather take the time to get a fitting right than rush a garment out the
              door. The perfect fit is our guarantee, on new work and on alterations alike.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-navy">We come to you</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
              Our studio is on Crown Passage, but your tailor will come to wherever suits you —
              your home or your office — for the initial consultation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-cream sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">Come and see us on Crown Passage.</h2>
          <Button href="/contact" variant="primary">
            Request an Appointment
          </Button>
        </Container>
      </section>
    </>
  );
}
