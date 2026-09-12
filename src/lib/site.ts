export const business = {
  name: "Arta Bespoke Tailoring",
  shortName: "Arta",
  tagline: "Bespoke tailoring in St James's, London",
  address: {
    line1: "20 Crown Passage",
    line2: "St James's",
    city: "London",
    postcode: "SW1Y 6PP",
    country: "GB",
  },
  phone: "020 7839 5511",
  phoneHref: "tel:+442078395511",
  email: "contact@artatailoring.co.uk",
  hours: [
    { day: "Monday", time: "8:00 – 18:00" },
    { day: "Tuesday", time: "8:00 – 18:00" },
    { day: "Wednesday", time: "8:00 – 18:00" },
    { day: "Thursday", time: "8:00 – 18:00" },
    { day: "Friday", time: "8:00 – 18:00" },
    { day: "Saturday", time: "10:00 – 17:00" },
    { day: "Sunday", time: "Closed" },
  ],
  hoursShort: "Mon–Fri 8:00–18:00 · Sat 10:00–17:00",
  social: {
    facebook: "https://www.facebook.com/artatailoring20/",
    instagram: "https://www.instagram.com/arta_tailoring/",
  },
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79468.27156364683!2d-0.20815704181145075!3d51.506180145185425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d775a2762f%3A0x197320c96607afa1!2sAbs+Bespoke+Tailoring!5e0!3m2!1sen!2suk!4v1518638803051",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=20+Crown+Passage+St+James%27s+London+SW1Y+6PP",
  siteUrl: "https://arta-tailoring.vercel.app",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Bespoke", href: "/bespoke" },
  { label: "Alterations", href: "/alterations" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const serviceTiles = [
  {
    title: "Tailored Suits",
    description:
      "Two-piece and three-piece suits cut and made for you, from first sketch to final fitting.",
    href: "/bespoke#suits",
    image: "/images/tile-suits.jpg",
  },
  {
    title: "Tailored Shirts",
    description:
      "Formal and casual shirts made to your exact measurements, in a wide range of cloths.",
    href: "/bespoke#shirts",
    image: "/images/tile-shirts.jpg",
  },
  {
    title: "Ladies Bespoke",
    description:
      "Tailoring for women who want a precise, considered fit — suits, dresses and separates.",
    href: "/bespoke#ladies",
    image: "/images/tile-ladies.jpg",
  },
];

export const fabricSuppliers = [
  { name: "Acorn Fabrics", image: "/images/supplier-acorn-fabrics.jpg" },
  { name: "Holland & Sherry", image: "/images/supplier-holland-sherry.png" },
  { name: "Loro Piana", image: "/images/supplier-loro-piana.png" },
];

export const howItWorks = [
  {
    step: "01",
    title: "Book a consultation",
    description:
      "Tell us what you need and we'll arrange a time to meet — at our St James's studio, at your home, or at your office.",
  },
  {
    step: "02",
    title: "Choose fabric & style",
    description:
      "We talk through cloth, cut and detailing together, drawing on a wide range of fabrics to suit how the piece will be worn.",
  },
  {
    step: "03",
    title: "Measurements",
    description:
      "We take a full set of measurements and note the details of fit and posture that make a garment truly yours.",
  },
  {
    step: "04",
    title: "First fitting",
    description:
      "Your garment comes together over one to six weeks. At the first fitting we check the shape and adjust it in front of you.",
  },
  {
    step: "05",
    title: "Final fitting & finish",
    description:
      "We fine-tune every detail — how it sits, how it moves — before the final stitches and pressing.",
  },
  {
    step: "06",
    title: "Your finished garment",
    description:
      "A completed, one-of-a-kind piece made for your body and your style, ready to wear.",
  },
];

export const testimonial = {
  quote:
    "I took in a £450 silk dress that was a size too big for me. They were honest and realistic about what could be achieved. The work was flawless and the dress fitted great after — the bust cups couldn't be made smaller without ruining the original fit of the dress.",
  name: "Olivia Newman",
  context: "Alteration — silk dress",
};

export const alterationCategories = [
  {
    title: "Coats & Jackets",
    items: [
      "Take in collars",
      "Shorten jacket hem",
      "Shorten coat hem",
      "Shorten sleeves from cuff",
      "Shorten sleeves from shoulder",
      "Square back neck",
      "Repadding",
      "Tapering sleeves",
      "Elbow patches",
      "Hand buttonhole",
      "Changing collars / contrasting",
      "Replace lining",
      "Take in or let out centre back seam",
      "Take in shoulder",
      "Replace zip",
    ],
  },
  {
    title: "Shirts & Blouses",
    items: [
      "Shorten or lengthen plain hem",
      "Shorten or lengthen plain sleeves",
      "Shorten sleeves with cuffs",
      "Shorten sleeves from shoulder",
      "Take in sides — men's formal or denim shirts",
      "Take in sides — plain seam",
      "Replace shoulder pads",
    ],
  },
  {
    title: "Trousers",
    items: [
      "Shorten or lengthen plain hem",
      "Shorten hem finish by hand",
      "Shorten suit trousers with hemming tape",
      "Plain jeans hem",
      "Original jeans hem / binding finish",
      "Hem turn-ups or splits",
      "Lengthen trousers",
      "Full taper leg",
      "Take in or let out waist — men's suit trousers",
      "Take in waist — ladies' trousers or chinos",
      "Take in jeans waist",
      "New zip — plain or invisible",
      "New zip — jeans",
    ],
  },
  {
    title: "Skirts",
    items: [
      "Shorten or lengthen plain hem",
      "Shorten hem — pleated",
      "Shorten hem — with slit or lining",
      "Take in waist with zip",
      "Take in or let out hips to hem",
      "Replace lining",
      "New zip — plain or invisible",
    ],
  },
  {
    title: "Dresses",
    items: [
      "Shorten evening dress without lining",
      "Shorten evening dress with lining",
      "Shorten three-layer evening dress",
      "Shorten dress with train or fishtail",
      "Wedding dress alteration",
      "Shorten evening dress — pleated",
      "Shorten sleeves",
      "Take in or let out sides and hips",
      "Take in at the back zipper seam",
      "Take in corseted dress",
      "New zip — invisible",
      "Shorten wide shoulder straps",
      "Sew in bra cups",
    ],
  },
  {
    title: "Repairs",
    items: [
      "Re-stitch buttons",
      "Mend tears, rips and holes",
      "Jeans crotch hole repair",
    ],
  },
];

export const galleryImages = [
  { image: "/images/hero-shears-fabric.jpg", label: "Cloth & shears", wide: true },
  { image: "/images/lapel-basting-closeup.jpg", label: "Hand-basted lapel, in progress" },
  { image: "/images/pattern-cutting.jpg", label: "Pattern cutting" },
  { image: "/images/tile-suits.jpg", label: "Tailored suit" },
  { image: "/images/tile-shirts.jpg", label: "Tailored shirt" },
  { image: "/images/tile-ladies.jpg", label: "Ladies bespoke jacket" },
  { image: "/images/customer-in-suit.jpg", label: "Finished fitting" },
  { image: "/images/studio-shopfront.png", label: "Studio, Crown Passage", wide: true },
];
