import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for tailoring, alteration and repair services provided by Arta Bespoke Tailoring.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" variant="houndstooth" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="prose prose-neutral max-w-3xl prose-headings:font-serif prose-headings:text-navy prose-a:text-brass">
          <p>
            Last updated: September 2026. These terms apply whenever you use this website, visit
            our studio, or commission tailoring, alteration or repair work from Arta Bespoke
            Tailoring (&ldquo;Arta&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using our
            services, you agree to these terms.
          </p>

          <h2>Our services</h2>
          <p>
            We provide bespoke tailoring, made-to-measure garments, and alteration and repair
            services. Where we agree a quote, timescale or fitting schedule with you, we will do
            our best to meet it, but bespoke work depends on fittings and fabric availability, so
            timescales are estimates rather than fixed deadlines unless we confirm otherwise in
            writing.
          </p>

          <h2>Consultations and measurements</h2>
          <p>
            Measurements and style choices are taken and agreed with you at consultation. Once
            cutting or alteration work has begun on the basis of those measurements, changes to
            the brief may affect price and timescale, and we&apos;ll always discuss this with you
            first.
          </p>

          <h2>Deposits and payment</h2>
          <p>
            For bespoke commissions, we may ask for a deposit before work begins, with the
            balance due on collection or delivery. For alterations and repairs, payment is
            normally due on collection unless we agree otherwise. Prices quoted are inclusive of
            our work unless stated otherwise.
          </p>

          <h2>Fittings and satisfaction</h2>
          <p>
            We assess every piece of work with you before it leaves the studio. If a finished
            garment does not fit as agreed, tell us as soon as possible so we can put it right.
            Our aim, always, is a properly fitted garment.
          </p>

          <h2>Customer&apos;s own garments and materials</h2>
          <p>
            When you bring us your own garment for alteration or repair, we&apos;ll take
            reasonable care of it while it&apos;s in our possession. We&apos;ll flag any concerns
            about the condition of a garment, or the limits of what an alteration can achieve,
            before we begin work. We are not responsible for pre-existing damage, wear, or
            defects in customer-supplied garments or fabric that we could not reasonably have
            identified in advance.
          </p>

          <h2>Uncollected items</h2>
          <p>
            Please collect finished or altered garments within a reasonable time. If an item
            remains uncollected for an extended period after we&apos;ve contacted you, we may
            charge a reasonable storage fee, or, after repeated attempts to contact you, treat
            the item as abandoned in line with applicable law.
          </p>

          <h2>Cancellations</h2>
          <p>
            You may cancel a bespoke commission before cutting begins; any deposit paid may be
            non-refundable where work or materials have already been committed. Appointments can
            be rescheduled with reasonable notice.
          </p>

          <h2>Website use</h2>
          <p>
            This website is provided for information about our services. We take reasonable care
            to keep it accurate and up to date, but we do not guarantee that every detail (such
            as pricing examples) is current at all times — please confirm details with us
            directly before relying on them.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this website — including text, images, logos and design — is the
            property of Arta Bespoke Tailoring or its licensors, and may not be copied or reused
            without our permission.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales, and any dispute will be
            subject to the exclusive jurisdiction of the courts of England and Wales. Nothing in
            these terms affects your statutory rights as a consumer.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time; the current version will always be
            available on this page.
          </p>

          <h2>Contact</h2>
          <p>
            {business.address.line1}, {business.address.line2}, {business.address.city}{" "}
            {business.address.postcode} · {business.phone} ·{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </Container>
      </section>
    </>
  );
}
