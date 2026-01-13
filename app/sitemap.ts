import type { MetadataRoute } from "next"
import { getAllSEOSlugs } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sandrinecouture.com"

  const seoSlugs = getAllSEOSlugs()

  const staticPages = [
    "",
    "/entreprises",
    "/particuliers",
    "/realisations",
    "/devis",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
    "/conditions-generales",
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }))

  const seoUrls = seoSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...seoUrls]
}
