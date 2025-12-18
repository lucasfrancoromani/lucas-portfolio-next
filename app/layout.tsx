import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucasromani.com"),

  title: "Lucas Franco Romani - Portfolio",
  description:
    "Desarrollador Full-Stack & Mobile. React, React Native, Supabase y Stripe. MVPs claros, performance y buen UX.",

  alternates: {
    canonical: "https://www.lucasromani.com",
  },

  openGraph: {
    title: "Lucas Franco Romani - Portfolio",
    description:
      "Full-Stack & Mobile (React, React Native, Supabase, Stripe). Proyectos, MVPs y contacto.",
    url: "https://www.lucasromani.com",
    siteName: "Portfolio Lucas Romani",
    images: [
      {
        url: "https://www.lucasromani.com/og/og-final.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Lucas Franco Romani",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas Franco Romani - Portfolio",
    description:
      "Full-Stack & Mobile. React, React Native, Supabase, Stripe. MVPs rápidos y claros.",
    images: [
      "https://www.lucasromani.com/og/lucas-romani-og.png",
    ],
  },

  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
