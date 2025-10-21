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

export const metadata = {
  title: 'Lucas Franco Romani – Portfolio',
  description: 'Full-Stack & Mobile (React, React Native, Supabase, Stripe). Proyectos: Bienestar App, Consulado Boca Juniors Roma.',
  openGraph: {
    title: 'Lucas Franco Romani – Portfolio',
    description: 'Full-Stack & Mobile',
    images: ['/images/Captura_Consulado1.png'],
    type: 'website',
  },
  metadataBase: new URL('https://tudominio.com'), // luego lo cambiás si usás dominio
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
