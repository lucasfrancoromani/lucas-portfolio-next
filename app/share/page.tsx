// app/share/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lucasromani.com";

// ⚠️ IMPORTANTE: poné una imagen OG "nueva" (URL nueva) para romper caché de WhatsApp.
// Podés usar el mismo archivo, pero agregamos un query param.
// (WhatsApp suele respetarlo. Si no, después hacemos og-share.png distinto.)
const OG_IMAGE = `${SITE_URL}/og/lucas-romani-og-share.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lucas Franco Romani — Portfolio",
  description:
    "Desarrollador Full-Stack & Mobile. React, React Native, Supabase y Stripe. Proyectos, MVPs y contacto.",
  openGraph: {
    type: "website",
    url: `${SITE_URL}/share`,
    title: "Lucas Franco Romani — Portfolio",
    description:
      "Full-Stack & Mobile (React, React Native, Supabase, Stripe). Proyectos, MVPs y contacto.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Portfolio de Lucas Franco Romani",
      },
    ],
    locale: "es_AR",
    siteName: "Lucas Romani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Franco Romani — Portfolio",
    description:
      "Full-Stack & Mobile. React, React Native, Supabase y Stripe. Proyectos, MVPs y contacto.",
    images: [OG_IMAGE],
  },
};

export default function SharePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <h1 style={{ fontSize: 22, marginBottom: 10 }}>Lucas Franco Romani — Portfolio</h1>
      <p style={{ marginBottom: 16 }}>
        Si estás viendo esto desde WhatsApp, abrí el portfolio completo acá:
      </p>

      <p style={{ marginBottom: 20 }}>
        <a href={SITE_URL} style={{ textDecoration: "underline" }}>
          {SITE_URL}
        </a>
      </p>

      <p style={{ opacity: 0.7, fontSize: 14 }}>
        (Página dedicada para compartir en WhatsApp)
      </p>

      <div style={{ marginTop: 18 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Ir al inicio
        </Link>
      </div>
    </main>
  );
}
