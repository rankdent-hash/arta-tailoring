import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Arta Bespoke Tailoring collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" variant="weave" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="prose prose-neutral max-w-3xl prose-headings:font-serif prose-headings:text-navy prose-a:text-brass">
          <p>
            Last updated: September 2026. Arta Bespoke Tailoring (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains what
            personal data we collect, why we collect it, and how we look after it, in line with
            the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>Who we are</h2>
          <p>
            Arta Bespoke Tailoring, {business.address.line1}, {business.address.line2},{" "}
            {business.address.city} {business.address.postcode}. You can contact us at{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a> or on {business.phone}.
          </p>

          <h2>What we collect</h2>
          <p>When you contact us, book an appointment, or use this website, we may collect:</p>
          <ul>
            <li>Your name and contact details (email address, phone number)</li>
            <li>Details you give us about the tailoring or alteration work you need</li>
            <li>Measurement records, kept only for the purpose of making or altering your garment</li>
            <li>Correspondence between you and us</li>
          </ul>

          <h2>Why we collect it</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to enquiries and arrange appointments</li>
            <li>Provide tailoring, alteration and repair services you have requested</li>
            <li>Keep accurate business and financial records</li>
            <li>
              Send you information about offers or services, but only if you have agreed to
              receive it
            </li>
          </ul>
          <p>
            Our lawful basis for most of this processing is that it is necessary to perform a
            contract with you (making or altering your garment), or is in our legitimate
            interests in running the business. Where we send marketing communications, we rely on
            your consent, which you can withdraw at any time.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep personal and measurement records for as long as reasonably needed to provide
            our services and meet our legal and accounting obligations, after which it is
            securely deleted or anonymised.
          </p>

          <h2>Sharing your information</h2>
          <p>
            We do not sell, rent or trade your personal data. We may share limited information
            with trusted service providers who help us run the business (for example, payment
            processing or IT services), and only where required by law.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable technical and organisational steps to keep your information
            secure and to prevent unauthorised access, loss or disclosure.
          </p>

          <h2>Cookies</h2>
          <p>
            This website may use a small number of cookies to help it function correctly and to
            understand how visitors use the site. You can control or disable cookies through your
            browser settings; doing so may affect some site functionality.
          </p>

          <h2>Your rights</h2>
          <p>Under UK data protection law, you have the right to:</p>
          <ul>
            <li>Ask what personal data we hold about you, and request a copy of it</li>
            <li>Ask us to correct inaccurate information</li>
            <li>Ask us to delete your information, where there is no legal reason for us to keep it</li>
            <li>Withdraw consent to marketing communications at any time</li>
            <li>Complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk if you have concerns about how we handle your data</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Our website may contain links to other websites. We are not responsible for the
            privacy practices of other sites, and recommend you review their own privacy
            policies.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be posted on this page.
          </p>
        </Container>
      </section>
    </>
  );
}
