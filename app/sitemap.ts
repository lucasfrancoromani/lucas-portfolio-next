// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://lucas-portfolio-next.vercel.app").replace(/\/+$/, "");

  // Tus secciones actuales (con hash)
  const paths = ["/", "/#proyectos", "/#sobre-mi", "/#skills", "/#contacto"];

  // Une sin duplicar slashes
  const join = (b: string, p: string) => (p === "/" ? `${b}/` : `${b}${p}`);

  return paths.map((p) => ({
    url: join(base, p),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.6,
  }));
}
