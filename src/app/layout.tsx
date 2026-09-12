import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { business } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Arta Bespoke Tailoring | Bespoke Tailoring in St James's, London",
    template: "%s | Arta Bespoke Tailoring",
  },
  description:
    "Arta Bespoke Tailoring is a bespoke tailoring studio in St James's, London, making tailored suits, shirts and ladies bespoke garments, plus expert alterations and repairs.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Arta Bespoke Tailoring",
    title: "Arta Bespoke Tailoring | Bespoke Tailoring in St James's, London",
    description:
      "Bespoke suits, shirts and ladies tailoring, made by hand in St James's, London. Book a consultation with Arta Bespoke Tailoring.",
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.line2,
    postalCode: business.address.postcode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [business.social.facebook, business.social.instagram],
  url: business.siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
