import { Button, Container } from "@/components/ui";

export function OfferBanner() {
  return (
    <section className="bg-brass py-14">
      <Container className="flex flex-col items-center justify-between gap-6 text-navy sm:flex-row">
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
