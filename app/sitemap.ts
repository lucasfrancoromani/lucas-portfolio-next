// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lucas-portfolio-next.vercel.app/";

  // Si por ahora todo está en la home con secciones, igual listamos anclas
  const paths = ["", "/#proyectos", "/#sobre-mi", "/#skills", "/#contacto"];

  const entries = paths.map((p) => {
    // Normaliza doble slash y asegura barra final
    const url = `${base}/${p}`.replace(/\/+$/, "/");
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.6,
    };
  });

  return entries;
}
