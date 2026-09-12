import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/bespoke",
    "/alterations",
    "/about",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
