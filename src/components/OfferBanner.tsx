import { Button, Container } from "@/components/ui";

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-brass py-14">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #10192e 0, #10192e 1px, transparent 1px, transparent 12px)",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center justify-between gap-6 text-navy sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="eyebrow text-navy/70">Special Offer</p>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl">10% off for new customers</h2>
        </div>
        <Button href="/contact" variant="secondary">
          Claim Your Offer
        </Button>
      </Container>
    </section>
  );
}
