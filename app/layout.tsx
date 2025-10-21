// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fuente (dejas igual si ya usabas Geist)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Cambia esto en Vercel → Environment Variables
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lucas-portfolio-next.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // SEO básico
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

  // Robots (con fix: usar string para googleBot)
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },

  // Canónica y alternates
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: { es: `${SITE_URL}/` },
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: "Lucas Franco Romani — Portfolio",
    siteName: "Portfolio Lucas Romani",
    description:
      "Full-Stack & Mobile (React, React Native, Supabase, Stripe). Proyectos, MVPs y contacto.",
    locale: "es",
    images: [
      {
        url: "/og/lucas-romani-og.png", // Poné esta imagen en /public/og/
        width: 1200,
        height: 630,
        alt: "Portfolio de Lucas Franco Romani",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Lucas Franco Romani — Portfolio",
    description:
      "Full-Stack & Mobile. React, React Native, Supabase, Stripe. MVPs rápidos y claros.",
    images: ["/og/lucas-romani-og.png"],
  },

  // Iconos / Manifest
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",

  // Color de tema
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],

  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Person)
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Franco Romani",
    url: SITE_URL,
    email: "mailto:dev@lucasromani.com", // ajusta si usás otro correo
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
