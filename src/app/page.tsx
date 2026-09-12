import { Hero } from "@/components/Hero";
import { ServiceTiles } from "@/components/ServiceTiles";
import { BespokeIntro } from "@/components/BespokeIntro";
import { FabricSuppliers } from "@/components/FabricSuppliers";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";
import { OfferBanner } from "@/components/OfferBanner";
import { ContactCallout } from "@/components/ContactCallout";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTiles />
      <BespokeIntro />
      <FabricSuppliers />
      <HowItWorks />
      <Testimonial />
      <OfferBanner />
      <ContactCallout />
    </>
  );
}
