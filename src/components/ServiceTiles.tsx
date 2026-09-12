import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { serviceTiles } from "@/lib/site";

export function ServiceTiles() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we make"
          title="Three ways we tailor for you"
          description="A small studio, focused on making garments that look elegant and fit properly — for every body."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {serviceTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group block overflow-hidden rounded-sm border border-navy/10 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-navy">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {tile.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brass group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
