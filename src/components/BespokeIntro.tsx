import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui";

export function BespokeIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Bespoke Service</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
            Made for your body, not the other way around.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/75">
            <p>
              Arta Bespoke Tailoring provides high-quality tailoring services in the heart of
              London. We serve both men and women, and we pride ourselves on offering premium
              tailoring at fair prices. Ours is a small studio — and that&apos;s deliberate. It
              means every garment gets proper attention.
            </p>
            <p>
              Bodies come in every shape and size, so we don&apos;t believe in one-size-fits-all.
              Every piece is cut to fit you specifically, so it doesn&apos;t just fit — it suits
              you, and brings out the best in your figure.
            </p>
            <p>
              We use only the best materials, and we&apos;re experienced across every kind of
              fabric — wool and cotton through to velvet and silk. If you have a dream outfit in
              mind, we&apos;ll work with you, step by step, from that first idea to a fully
              handmade, perfectly fitted garment.
            </p>
          </div>
          <Button href="/bespoke" variant="secondary" className="mt-8">
            See Bespoke Tailoring
          </Button>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-charcoal">
          <Image
            src="/images/lapel-basting-closeup.jpg"
            alt="Close-up of a hand-basted suit lapel during a fitting"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
