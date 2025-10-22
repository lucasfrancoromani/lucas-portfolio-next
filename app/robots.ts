// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lucas-portfolio-next.vercel.app/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ["/admin"] // si más adelante hay zonas privadas
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
