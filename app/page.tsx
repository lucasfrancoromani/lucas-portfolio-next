"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/** ===== Tipos ===== */
type Project = {
  title: string;
  period: string;
  blurb: string;
  stack: string[];
  tags: string[];
  repo?: string;
  demo?: string;
  imageAlt: string;
  images: string[];
  category: "web" | "mobile";
};

/** ===== Página ===== */
export default function PortfolioLucasRomani() {
  /** Proyectos (web + mobile) */
  const allProjects: Readonly<Project[]> = [
    {
      title: "Consulado Boca Juniors Roma",
      period: "2025",
      blurb:
        "Sitio web informativo del Consulado de Boca Juniors en Roma. Diseño azul y amarillo, secciones de eventos, socios y galería de encuentros.",
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["Web", "UI", "Comunidad"],
      repo: "https://github.com/lucasfrancoromani/consulado-boca-roma",
      imageAlt: "Capturas del sitio Consulado Boca Juniors Roma",
      images: ["/images/Captura_Consulado1.png", "/images/Captura_Consulado2.png"],
      category: "web",
    },
    {
      title: "Bienestar App (MVP)",
      period: "2025",
      blurb:
        "Marketplace móvil para servicios de bienestar. Autenticación, reservas, reprogramación, panel profesional y Stripe Connect.",
      stack: ["React Native", "Expo", "Supabase", "Stripe"],
      tags: ["Mobile", "Full-Stack"],
      repo: "https://github.com/lucasfrancoromani/bienestar-mvp",
      imageAlt: "Pantallas de la app Bienestar",
      images: ["/images/bienestar-1.png"], // captura temporal
      category: "mobile",
    },
    {
      title: "ZeroProcrastinación – Landing + Embudo",
      period: "2025",
      blurb:
        "Landing en Next.js + Tailwind. Captura de emails, guía gratuita, GA4, Meta Pixel, TikTok Pixel y pruebas A/B del hero.",
      stack: ["Next.js", "Tailwind", "Vercel", "GA4"],
      tags: ["Web", "Marketing", "Landing"],
      repo: "https://github.com/lucasfrancoromani/zeroprocrastinacion-web",
      imageAlt: "Hero de ZeroProcrastinación",
      images: ["/images/zero-hero.png"], // captura temporal
      category: "web",
    },
    {
      title: "Portfolio Laura – Periodista & Locutora",
      period: "2025",
      blurb:
        "Portfolio oscuro en Next.js con prensa, locución, videos de YouTube y formulario de contacto con API route.",
      stack: ["Next.js", "Tailwind", "API Route"],
      tags: ["Web", "SEO", "Contacto"],
      repo: "https://github.com/lucasfrancoromani/portfolio-laura",
      imageAlt: "Mock del portfolio de Laura",
      images: ["/images/portfolio-lau-1.png"], // captura temporal
      category: "web",
    },
  ];

  /** Filtro (Todos/Web/Mobile) */
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const projects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter, allProjects]);

  /** Skills */
  const skills = [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind"] },
    { group: "Backend / DB", items: ["Supabase (Postgres / RLS)", "SQL", "APIs REST", "Java", "C#", "Python"] },
    { group: "Dev & Tools", items: ["Git / GitHub", "Stripe Connect", "Figma / Canva", "DaVinci Resolve", "Adobe Photoshop"] },
  ];

  /** Links */
  const links = {
    email: "mailto:dev@lucasromani.com",
    github: "https://github.com/lucasfrancoromani",
    linkedin: "https://www.linkedin.com/in/lucasfrancoromani/",
    youtube: "https://www.youtube.com/@cronicasdeunviaje",
  };

  /** ===== Lightbox ===== */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], alt: string, startAt = 0) => {
    if (!images?.length) return;
    setLightboxImages(images);
    setLightboxAlt(alt || "");
    setLightboxIndex(Math.min(Math.max(startAt, 0), images.length - 1));
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % lightboxImages.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Skip link */}
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-sky-500/90 focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md"
      >
        Saltar al contenido
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between" aria-label="Principal">
          <a href="#top" className="font-semibold tracking-wide text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md">
            Lucas Franco Romani<span className="text-sky-400"> · Portfolio</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#proyectos" className="hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md px-1">
              Proyectos
            </a>
            <a href="#sobre-mi" className="hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md px-1">
              Sobre mí
            </a>
            <a href="#skills" className="hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md px-1">
              Skills
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl border border-sky-500/40 px-3 py-1.5 hover:bg-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/90">Desarrollador & Creador Digital</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Construyo experiencias{" "}
              <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">claras y útiles</span>
            </h1>
            <p className="mt-5 text-slate-300/90 text-lg">
              Web y mobile con React/Next.js y React Native. Me enfoco en MVPs funcionales, rendimiento y una UX simple.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#proyectos" variant="primary">Ver proyectos</ButtonLink>
              <ButtonLink href="https://github.com/lucasfrancoromani" external>GitHub</ButtonLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/80">
              {["Next.js", "React Native", "Supabase", "Stripe Connect", "Tailwind"].map((b) => (
                <li key={b} className="rounded-full border border-white/10 px-3 py-1">{b}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-sky-500/20 via-teal-500/10 to-sky-500/20 ring-1 ring-white/10 p-1">
              <div className="h-full w-full rounded-2xl bg-slate-950/60 backdrop-blur flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-6 w-full">
                  <GradientCard title="React Native" subtitle="Expo" />
                  <GradientCard title="Supabase" subtitle="Auth · RLS · SQL" />
                  <GradientCard title="Stripe" subtitle="Connect" />
                  <GradientCard title="Next.js" subtitle="SSR · SSG" />
                  <GradientCard title="Tailwind" subtitle="UI" />
                  <GradientCard title="GitHub" subtitle="Flujo Git" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Proyectos" subtitle="Selección de trabajos y MVPs" />

        {/* Filtros */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { k: "all", label: "Todos" },
            { k: "web", label: "Web" },
            { k: "mobile", label: "Mobile" },
          ].map((btn) => (
            <button
              key={btn.k}
              onClick={() => setFilter(btn.k as "all" | "web" | "mobile")}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                filter === btn.k ? "bg-sky-500/90 text-slate-950 border-sky-500/50" : "border-white/15 hover:border-white/30"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:bg-white/[0.04] hover:shadow-lg hover:shadow-sky-500/5"
            >
              {/* Imagen principal clickeable */}
              <button
                type="button"
                onClick={() => openLightbox(p.images, p.imageAlt, 0)}
                className="block w-full text-left"
                aria-label={`Abrir galería de ${p.title}`}
              >
                <div
                  className="relative aspect-[16/9] w-full bg-gradient-to-br from-sky-500/20 via-teal-400/10 to-sky-500/20 overflow-hidden"
                  role="img"
                  aria-label={p.imageAlt}
                >
                  {p.images?.[0] && (
                    <Image
                      src={p.images[0]}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
              </button>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="text-xs text-slate-300/70 border border-white/10 rounded-full px-2 py-0.5">{p.period}</span>
                </div>
                <p className="mt-2 text-slate-300/90">{p.blurb}</p>

                {/* Chips stack */}
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300/80">
                  {p.stack.map((s, idx) => (
                    <li key={idx} className="rounded-full border border-white/10 px-2 py-0.5">
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Thumbs (si hay varias imágenes) */}
                {p.images.length > 1 && (
                  <div className="mt-4 flex gap-2">
                    {p.images.slice(0, 6).map((src, idx) => (
                      <button
                        key={src + idx}
                        type="button"
                        className="relative aspect-[16/9] w-24 overflow-hidden rounded-lg border border-white/10 hover:opacity-90"
                        onClick={() => openLightbox(p.images, p.imageAlt, idx)}
                        aria-label={`Abrir imagen ${idx + 1} de ${p.title}`}
                      >
                        <Image src={src} alt="" width={192} height={108} className="object-cover w-full h-full" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-3">
                  {p.repo && (
                    <ButtonLink href={p.repo} external size="sm" variant="ghost">
                      Código
                    </ButtonLink>
                  )}
                  {p.demo && (
                    <ButtonLink href={p.demo} external size="sm" variant="primary-strong">
                      Demo
                    </ButtonLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Sobre mí" subtitle="Perfil y enfoque" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 leading-relaxed text-slate-300/90">
            <p>
              Soy desarrollador argentino viviendo en Italia. Me interesan los productos útiles y bien diseñados. Trabajo con React/Next.js y React Native.
              Construyo MVPs funcionales rápido y mejoro en ciclos cortos.
            </p>
            <p className="mt-4">
              También creo contenido («Crónicas de un Viaje») y disfruto del diseño simple, la edición de video y la escritura. Actualmente exploro desarrollo de videojuegos con <strong>Unity (C#)</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <ul className="space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3"><Dot /> <span>UX clara, estados y flujos coherentes.</span></li>
              <li className="flex items-start gap-3"><Dot /> <span>Buenas prácticas: Git Flow simple, RLS en DB, manejo de errores y logs.</span></li>
              <li className="flex items-start gap-3"><Dot /> <span>MVPs con Stripe Connect, reservas y perfiles profesionales.</span></li>
              <li className="flex items-start gap-3"><Dot /> <span>Aprendizaje continuo (React, SQL, Unity, edición).</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Skills" subtitle="Tecnologías y herramientas" />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-semibold text-slate-100">{s.group}</h4>
              <ul className="mt-3 space-y-1 text-slate-300/90">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <SmallDot /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Contacto" subtitle="Agendemos una llamada" />
        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-teal-500/10 p-6 md:p-8">
          <p className="text-slate-200 text-lg">
            ¿Tenés una idea o un proyecto? Escribime y vemos cómo puedo ayudarte con un MVP rápido y un plan claro.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={links.email} variant="primary">Enviar email</ButtonLink>
            <ButtonLink href={links.github} external>GitHub</ButtonLink>
            <ButtonLink href={links.linkedin} external>LinkedIn</ButtonLink>
            <ButtonLink href={links.youtube} external>YouTube</ButtonLink>
          </div>
        </div>
        <footer className="mt-10 py-8 text-center text-slate-400 text-sm border-t border-white/10">
          © {new Date().getFullYear()} Lucas Romani · Hecho con Next.js + Tailwind
        </footer>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        open={lightboxOpen}
        images={lightboxImages}
        alt={lightboxAlt}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        setIndex={setLightboxIndex}
      />
    </main>
  );
}

/** ===== UI Reutilizable ===== */
type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "primary-strong" | "ghost";
  size?: "sm" | "md";
  external?: boolean;
};
function ButtonLink({ href, children, variant = "ghost", size = "md", external = false }: ButtonLinkProps) {
  const base = "inline-flex items-center rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-sky-400/60";
  const sizes = size === "sm" ? "px-3 py-1.5 text-sm" : "px-5 py-2.5";
  const styles =
    variant === "primary"
      ? "bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-medium shadow-lg shadow-sky-500/20"
      : variant === "primary-strong"
      ? "bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold"
      : "border border-white/15 hover:border-white/30";
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${sizes} ${styles}`}>
      {children}
    </a>
  );
}

type SectionTitleProps = { title: string; subtitle: string };
function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-slate-300/80">{subtitle}</p>
      </div>
      <div className="h-px grow bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}

type GradientCardProps = { title: string; subtitle: string };
function GradientCard({ title, subtitle }: GradientCardProps) {
  return (
    <div className="rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-br from-sky-500/10 via-teal-400/10 to-sky-500/10 min-h-[92px] transition-colors">
      <div className="text-sm text-slate-300/90">{subtitle}</div>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
}

function Dot() {
  return <span aria-hidden className="mt-2 inline-block size-2 rounded-full bg-sky-400/80 shadow shadow-sky-500/30" />;
}
function SmallDot() {
  return <span aria-hidden className="inline-block size-1.5 rounded-full bg-slate-300/70" />;
}

/** ===== Lightbox ===== */
/* eslint-disable @next/next/no-img-element */
type LightboxProps = {
  open: boolean;
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setIndex: (i: number) => void;
};
function Lightbox({ open, images, alt, index, onClose, onPrev, onNext, setIndex }: LightboxProps) {
  const hasImages = images && images.length > 0;
  const current = useMemo(() => (hasImages ? images[index] : ""), [images, index, hasImages]);

  const backdropRef = useRef<HTMLDivElement | null>(null);
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  // Swipe en mobile
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const threshold = 40;
    if (dx > threshold) onPrev();
    if (dx < -threshold) onNext();
    startX.current = null;
  };

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={onBackdropClick}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex flex-col"
      aria-modal="true"
      role="dialog"
      aria-label="Visor de imágenes de proyecto"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 text-slate-200">
        <div className="text-sm opacity-80">{alt}</div>
        <button
          onClick={onClose}
          className="inline-flex items-center rounded-lg px-3 py-1.5 bg-white/10 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      {/* Imagen principal */}
      <div className="relative grow flex items-center justify-center px-3" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {images.length > 1 && (
          <button
            onClick={onPrev}
            aria-label="Anterior"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/15 p-2 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          >
            ‹
          </button>
        )}

        {current && <img src={current} alt={alt} className="max-h[80vh] max-w-[92vw] object-contain rounded-xl shadow-2xl" />}

        {images.length > 1 && (
          <button
            onClick={onNext}
            aria-label="Siguiente"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/15 p-2 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          >
            ›
          </button>
        )}
      </div>

      {/* Tiras de miniaturas */}
      {images.length > 1 && (
        <div className="px-3 pb-4">
          <div className="mx-auto max-w-5xl flex gap-2 overflow-x-auto">
            {images.map((src, i) => {
              const active = i === index;
              return (
                <button
                  key={src + i}
                  onClick={() => setIndex(i)}
                  className={`relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-md border ${
                    active ? "border-sky-400" : "border-white/10"
                  }`}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img src={src} alt="" className="object-cover w-full h-full" />
                </button>
              );
            })}
          </div>
          <div className="mt-2 text-center text-xs text-slate-300/80">
            {index + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
