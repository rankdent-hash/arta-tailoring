import Image from "next/image";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <Image
        src="/images/studio-shopfront.png"
        alt="The Arta Bespoke Tailoring shopfront on Crown Passage, St James's"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-8">
        <p className="eyebrow text-brass-light">St James&apos;s, London</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] sm:text-6xl">
          Bespoke tailoring, made by hand in the heart of London.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Ladies&apos; and gents&apos; tailoring, cut and fitted for you — from a first
          consultation to a finished garment that&apos;s entirely yours.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Request an Appointment
          </Button>
          <Button href="/bespoke" variant="ghost" className="border-cream/40 text-cream">
            Explore Bespoke Services
          </Button>
        </div>
        <p className="mt-12 max-w-md text-sm text-cream/60">
          Your tailor will come to wherever you want to be measured — our studio on Crown
          Passage, your desk, or your home.
        </p>
      </div>
    </section>
  );
}
