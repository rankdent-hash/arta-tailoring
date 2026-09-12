import { FabricPlaceholder } from "@/components/FabricPlaceholder";
import type { ComponentProps } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "weave",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: ComponentProps<typeof FabricPlaceholder>["variant"];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <FabricPlaceholder variant={variant} tone="navy" className="absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow text-brass-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
