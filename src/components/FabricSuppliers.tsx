import Image from "next/image";
import { Container } from "@/components/ui";
import { fabricSuppliers } from "@/lib/site";

export function FabricSuppliers() {
  return (
    <section className="border-y border-navy/10 bg-cream py-12">
      <Container>
        <p className="eyebrow text-center text-charcoal/50">Cloth from fabric houses we trust</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 opacity-80 grayscale">
          {fabricSuppliers.map((supplier) => (
            <div key={supplier.name} className="relative h-10 w-32">
              <Image
                src={supplier.image}
                alt={supplier.name}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
