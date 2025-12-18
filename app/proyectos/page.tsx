// app/proyectos/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  slug: string;
  title: string;
  period: string;
  resume: string;
  role: string[];
  stack: string[];
  challenges: string[];
  solution: string[];
  results: string[];
  repo?: string;
  demo?: string;
  cover: string;
  gallery?: string[];
  category: "web" | "mobile";
};

const projects: Project[] = [
  {
    slug: "consulado-boca-roma",
    title: "Consulado Boca Juniors Roma",
    period: "2025",
    resume:
      "Sitio informativo para el consulado de Boca en Roma: calendario de eventos, comunidad y galería. Priorizamos simpleza, performance y coherencia con la identidad azul/amarilla.",
    role: ["Diseño UI", "Maquetación", "Implementación"],
    stack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Estructurar la información de forma clara para socios y público nuevo.",
      "Mantener el sitio liviano y de carga rápida.",
    ],
    solution: [
      "Arquitectura simple de secciones (eventos, comunidad, galería).",
      "Componentes semánticos y estilos optimizados.",
    ],
    results: ["Tiempo de carga bajo y navegación clara.", "Base lista para añadir futuras secciones (merch, noticias)."],
    repo: "https://github.com/lucasfrancoromani/consulado-boca-roma",
    cover: "/images/Captura_Consulado1.png",
    gallery: ["/images/Captura_Consulado1.png", "/images/Captura_Consulado2.png"],
    category: "web",
  },
  {
    slug: "bienestar-app-mvp",
    title: "Bienestar App (MVP)",
    period: "2025",
    resume:
      "Marketplace móvil para servicios de bienestar: autenticación, reservas, perfiles profesionales y reprogramación. Integración con Stripe Connect.",
    role: ["Arquitectura", "Front Mobile", "Integraciones"],
    stack: ["React Native", "Expo", "Supabase", "Stripe"],
    challenges: ["Flujos seguros de reserva y reprogramación.", "Diseño simple y claro para usuarios y profesionales."],
    solution: ["Modelo de datos mínimo para MVP (usuarios, profesionales, reservas).", "Integración con Stripe Connect y Supabase Auth."],
    results: ["MVP funcional para testear mercado.", "Base para escalar con métricas y notificaciones."],
    repo: "https://github.com/lucasfrancoromani/bienestar-mvp",
    cover: "/images/captura-bienestar.png",
    gallery: ["/images/captura-bienestar.png"],
    category: "mobile",
  },
  {
    slug: "zeroprocrastinacion-landing",
    title: "ZeroProcrastinación – Landing + Embudo",
    period: "2025",
    resume:
      "Landing en Next.js enfocada en captación: guía gratuita, email capture, GA4, Meta Pixel y TikTok Pixel. Preparada para A/B testing de hero y pricing.",
    role: ["UX/Copy", "Desarrollo", "Medición"],
    stack: ["Next.js", "Tailwind", "Vercel", "GA4"],
    challenges: ["Medición multicanal sin sobrecargar la página.", "Copy claro y creíble alineado a la propuesta de valor."],
    solution: ["Arquitectura de eventos (page_view, lead_submit, purchase).", "Secciones concisas con beneficios, prueba social y CTA fuertes."],
    results: ["Infra de analytics lista para iterar y escalar campañas.", "Tiempos de build/deploy rápidos con Vercel."],
    repo: "https://github.com/lucasfrancoromani/zeroprocrastinacion",
    cover: "/images/captura-zero.png",
    gallery: ["/images/captura-zero.png"],
    category: "web",
  },
  {
    slug: "portfolio-laura",
    title: "Portfolio Laura – Periodista & Locutora",
    period: "2025",
    resume:
      "Portfolio oscuro en Next.js con secciones de prensa, locución, videoteca de YouTube y formulario de contacto vía API route.",
    role: ["UI/UX", "Desarrollo", "Integraciones"],
    stack: ["Next.js", "Tailwind", "API Route"],
    challenges: ["Estructurar piezas de prensa y locución con SEO.", "Integrar videos y contacto sin fricción."],
    solution: ["Rutas dedicadas a trabajos y prensa con metadatos OG.", "API route para contacto y despliegue automático en Vercel."],
    results: ["Perfil profesional presentable para propuestas y prensa.", "Base para agregar blog/press-kit y métricas."],
    repo: "https://github.com/lucasfrancoromani/laura-portfolio",
    cover: "/images/captura-laura.png",
    gallery: ["/images/captura-laura.png"],
    category: "web",
  },
];

export default function ProyectosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    window.location.href = href;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between" aria-label="Principal">
          <a href="/" className="min-w-0 font-semibold tracking-wide text-slate-100">
            <span className="block truncate">Lucas Franco Romani</span>
            <span className="text-sky-400">· Portfolio</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3 text-sm">
            <a href="/#sobre-mi" className="hover:text-sky-300">
              Sobre mí
            </a>
            <a href="/#skills" className="hover:text-sky-300">
              Skills
            </a>
            <a href="/#contacto" className="hover:text-sky-300">
              Contacto
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              aria-label="Abrir menú"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <span className="mr-2 text-slate-200/90">Menú</span> ☰
            </button>
          </div>
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-[70] md:hidden" role="dialog" aria-modal="true" aria-label="Menú">
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            />
            <div className="absolute right-3 top-3 left-3 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-200/90">Navegación</div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                >
                  ✕
                </button>
              </div>

              <div className="mt-3 grid gap-2 text-base">
                <button
                  type="button"
                  onClick={() => goTo("/")}
                  className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06]"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => goTo("/#sobre-mi")}
                  className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06]"
                >
                  Sobre mí
                </button>
                <button
                  type="button"
                  onClick={() => goTo("/#skills")}
                  className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06]"
                >
                  Skills
                </button>
                <button
                  type="button"
                  onClick={() => goTo("/#contacto")}
                  className="w-full text-left rounded-2xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 hover:bg-sky-500/15"
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Proyectos</h1>
        <p className="mt-2 text-slate-300/90">Selección de trabajos con resumen, retos, solución y resultados.</p>

        <div className="mt-8 grid gap-6">
          {projects.map((p) => (
            <article key={p.slug} className="rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-slate-900">
                <Image src={p.cover} alt={p.title} fill sizes="(max-width: 768px) 100vw, 1000px" className="object-cover" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl md:text-2xl font-semibold">{p.title}</h2>
                  <span className="text-xs text-slate-300/70 border border-white/10 rounded-full px-2 py-0.5">{p.period}</span>
                </div>

                <p className="mt-3 text-slate-300/90">{p.resume}</p>

                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <InfoList title="Rol" items={p.role} />
                  <InfoList title="Stack" items={p.stack} />
                </div>

                <div className="mt-4 grid md:grid-cols-3 gap-6">
                  <InfoList title="Retos" items={p.challenges} />
                  <InfoList title="Solución" items={p.solution} />
                  <InfoList title="Resultados" items={p.results} />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.repo && <A href={p.repo}>Código</A>}
                  {p.demo && <A href={p.demo} variant="solid">Demo</A>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-10 py-8 text-center text-slate-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Lucas Romani · Hecho con Next.js + Tailwind
      </footer>
    </main>
  );
}

/* ---------- UI ---------- */
function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wide text-slate-300/80">{title}</h3>
      <ul className="mt-2 space-y-1">
        {items.map((it, i) => (
          <li key={i} className="text-slate-200/90 leading-relaxed">
            • {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function A({ href, children, variant = "ghost" }: { href: string; children: React.ReactNode; variant?: "ghost" | "solid" }) {
  const base = "inline-flex items-center rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60";
  const style =
    variant === "solid"
      ? "bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-medium"
      : "border border-white/15 hover:border-white/30";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${style}`}>
      {children}
    </a>
  );
}
