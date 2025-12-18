// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lucasromani.com";

/** ✅ viewport (themeColor va acá) */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

/** ✅ metadata */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Lucas Franco Romani — Portfolio",
  description:
    "Desarrollador Full-Stack & Mobile. React, React Native, Supabase y Stripe. MVPs claros, performance y buen UX.",
  keywords: [
    "desarrollador web",
    "react",
    "react native",
    "supabase",
    "stripe",
    "full stack",
    "mvp",
    "portafolio",
    "next.js",
  ],
  applicationName: "Portfolio Lucas Romani",
  authors: [{ name: "Lucas Franco Romani", url: `${SITE_URL}/` }],
  creator: "Lucas Franco Romani",
  publisher: "Lucas Franco Romani",
  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },

  alternates: {
    canonical: SITE_URL,
    languages: { es: `${SITE_URL}/` },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Lucas Franco Romani — Portfolio",
    siteName: "Portfolio Lucas Romani",
    description:
      "Full-Stack & Mobile (React, React Native, Supabase, Stripe). Proyectos, MVPs y contacto.",
    locale: "es_AR",
    images: [
      {
        // ✅ Absoluta: ayuda a WhatsApp/FB scrapers
        url: `${SITE_URL}/og/lucas-romani-og2.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio de Lucas Franco Romani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas Franco Romani — Portfolio",
    description:
      "Full-Stack & Mobile. React, React Native, Supabase, Stripe. MVPs rápidos y claros.",
    images: [
      {
        url: `${SITE_URL}/og/lucas-romani-og2.png`,
        alt: "Portfolio de Lucas Franco Romani",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Person)
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Franco Romani",
    url: SITE_URL,
    email: "mailto:dev@lucasromani.com",
    jobTitle: "Desarrollador Full-Stack & Mobile",
    sameAs: [
      "https://github.com/lucasfrancoromani",
      "https://www.linkedin.com/in/lucasfrancoromani/",
      "https://www.youtube.com/@cronicasdeunviaje",
    ],
  };

  // JSON-LD (WebSite)
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Portfolio Lucas Franco Romani",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
