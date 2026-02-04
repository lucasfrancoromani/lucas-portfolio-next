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
      tags: ["Mobile", "Product Design"],
      repo: "https://github.com/lucasfrancoromani/bienestar-mvp",
      imageAlt: "Pantallas de la app Bienestar",
      images: ["/images/captura-bienestar.png"], // captura temporal
      category: "mobile",
    },
    {
      title: "ZeroProcrastinación – Landing + Embudo",
      period: "2025",
      blurb:
        "Landing en Next.js + Tailwind. Captura de emails, guía gratuita, GA4, Meta Pixel, TikTok Pixel y pruebas A/B del hero.",
      stack: ["Next.js", "Tailwind", "Vercel", "GA4"],
      tags: ["Web", "Marketing", "Landing"],
      repo: "https://github.com/lucasfrancoromani/zeroprocrastinacion",
      imageAlt: "Hero de ZeroProcrastinación",
      images: ["/images/captura-zero.png"], // captura temporal
      category: "web",
    },
    {
      title: "Portfolio Laura – Periodista & Locutora",
      period: "2025",
      blurb:
        "Portfolio oscuro en Next.js con prensa, locución, videos de YouTube y formulario de contacto con API route.",
      stack: ["Next.js", "Tailwind", "API Route"],
      tags: ["Web", "SEO", "Contacto"],
      repo: "https://github.com/lucasfrancoromani/laura-portfolio",
      imageAlt: "Mock del portfolio de Laura",
      images: ["/images/captura-laura.png"], // captura temporal
      category: "web",
    },
  ];

  /** Filtro (Todos/Web/Mobile) */
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const projects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter, allProjects]);

  /** Links */
  const links = {
    email: "mailto:dev@lucasromani.com",
    github: "https://github.com/lucasfrancoromani",
    linkedin: "https://www.linkedin.com/in/lucasfrancoromani/",
    youtube: "https://www.youtube.com/@cronicasdeunviaje",
  };

  /** ===== Mobile menu ===== */
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
    // navegación simple con anchor
    window.location.href = href;
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
          {/* Marca */}
          <a
            href="#top"
            className="min-w-0 font-semibold tracking-wide text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md"
          >
            <span className="block truncate">Lucas Franco Romani</span>
            <span className="text-sky-400">· Portfolio</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3 text-sm">
            <a href="/proyectos" className="hover:text-sky-300">
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md px-1"
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              className="hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-md px-1"
            >
              Skills
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl border border-sky-500/40 px-3 py-1.5 hover:bg-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
            >
              Contacto
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              aria-label="Abrir menú"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <span className="mr-2 text-slate-200/90">Menú</span>
              <span aria-hidden>☰</span>
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
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
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              <div className="mt-3 grid gap-2 text-base">
                <button
                  type="button"
                  onClick={() => goTo("/proyectos")}
                  className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06]"
                >
                  Proyectos
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

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/90">DESARROLLADOR & CREADOR DIGITAL</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Construyo experiencias{" "}
              <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">
                claras y útiles
              </span>
            </h1>

            {/* STATUS badge */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Disponible para proyectos
              </span>
            </div>

            <p className="mt-5 text-slate-300/90 text-lg">
              Diseño y desarrollo interfaces modernas con Next.js y React Native. Me enfoco en la experiencia de usuario, el rendimiento y la atención al detalle visual.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/proyectos" variant="primary">
                Ver proyectos
              </ButtonLink>
              <ButtonLink href={links.github} external>
                GitHub
              </ButtonLink>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/80">
              {["Next.js", "UX/UI", "React Native", "Tailwind CSS", "Diseño de Producto"].map((b) => (
                <li key={b} className="rounded-full border border-white/10 px-3 py-1">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* FOTO + TARJETA */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-tr from-sky-500/20 via-teal-500/10 to-sky-500/20 ring-1 ring-white/10 p-1">
              <div className="rounded-2xl bg-slate-950/60 backdrop-blur p-6">
                <div className="flex items-center gap-4">
                  <div className="relative size-32 md:size-40 overflow-hidden rounded-3xl ring-1 ring-white/10">
                    <Image
                      src="/images/perfil2.jpg"
                      alt="Foto de Lucas Franco Romani"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Lucas Franco Romani</div>
                    <div className="text-sm text-slate-300/90">Web & SEO Specialist · Digital Designer</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200/90">
                        <BriefcaseIcon className="size-4 opacity-90" />
                        Freelance / Proyectos
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200/90">
                        <LocationIcon className="size-4 opacity-90" />
                        España
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <GradientCard title="UX/UI" subtitle="Diseño" />
                  <GradientCard title="Mobile" subtitle="Expo / React" />
                  <GradientCard title="Frontend" subtitle="Next.js" />
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
                filter === btn.k
                  ? "bg-sky-500/90 text-slate-950 border-sky-500/50"
                  : "border-white/15 hover:border-white/30"
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
                  <span className="text-xs text-slate-300/70 border border-white/10 rounded-full px-2 py-0.5">
                    {p.period}
                  </span>
                </div>
                <p className="mt-2 text-slate-300/90">{p.blurb}</p>

                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300/80">
                  {p.stack.map((s, idx) => (
                    <li key={idx} className="rounded-full border border-white/10 px-2 py-0.5">
                      {s}
                    </li>
                  ))}
                </ul>

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
      <section id="sobre-mi" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-20">
        <SectionTitle title="Sobre mí" subtitle="Perfil, enfoque y experiencia" />

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          {/* FOTO GRANDE */}
          <div className="relative">
            <div className="relative w-full max-w-[640px] aspect-[3.5/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/images/lucas-about.jpg"
                alt="Lucas Romani"
                fill
                className="object-cover object-center"
                sizes="1024px"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-slate-300/90 leading-relaxed">
              <p>
                Soy desarrollador argentino viviendo en España. Me enfoco en crear productos digitales claros,
                funcionales y bien diseñados, priorizando la experiencia de usuario y el rendimiento.
              </p>

              <p className="mt-4">
                Trabajo principalmente con <strong>React, Next.js y React Native</strong>, desarrollando MVPs que
                validan ideas rápido y escalan de forma ordenada. Me siento cómodo moviéndome entre frontend, lógica de negocio y base de datos.
              </p>

              <p className="mt-4">
                Además, creo contenido en <em>Crónicas de un Viaje</em> y tengo un fuerte interés por el diseño, la
                edición de video y el desarrollo de videojuegos con <strong>Unity (C#)</strong>.
              </p>
            </div>

            {/* EXPERIENCIA (Actualizada: Frontend & UX/UI) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 border border-white/10 w-12 h-12 shrink-0 text-sky-300">
                  {/* Icono de Diseño/Código */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-100">Digital Designer / Web & SEO Specialist</h4>
                    <span className="text-xs border border-white/10 rounded-full px-2 py-0.5 text-slate-300/80">
                      Actual
                    </span>
                  </div>
                  <p className="text-xs text-sky-400 mt-0.5 mb-1 font-medium">Proyectos Propios / Freelance</p>
                  <p className="text-sm text-slate-300/90">
                    Diseño de interfaces, desarrollo de MVPs y optimización de experiencia de usuario en web y mobile.
                  </p>
                </div>
              </div>
            </div>

            {/* LISTA DE ENFOQUE */}
            <ul className="space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3">
                <Dot /> Diseño centrado en el usuario y flujos intuitivos.
              </li>
              <li className="flex items-start gap-3">
                <Dot /> Código limpio y componentes reutilizables.
              </li>
              <li className="flex items-start gap-3">
                <Dot /> MVPs funcionales listos para escalar.
              </li>
              <li className="flex items-start gap-3">
                <Dot /> Combinación de estética y rendimiento técnico.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Skills" subtitle="Tecnologías y herramientas con las que trabajo" />

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillChipGroup
            title="Frontend & UI"
            items={[
              { name: "Next.js", icon: "next" },
              { name: "React", icon: "react" },
              { name: "Tailwind CSS", icon: "tailwind" },
              { name: "TypeScript", icon: "ts" },
              { name: "HTML/CSS", icon: "html" },
            ]}
          />

          <SkillChipGroup
            title="Mobile & App"
            items={[
              { name: "React Native", icon: "react" },
              { name: "Expo", icon: "expo" },
            ]}
          />

          <SkillChipGroup
            title="Creativo & Tools"
            items={[
              { name: "Git / GitHub", icon: "github" },
              { name: "DaVinci Resolve", icon: "davinci" },
              { name: "Photoshop", icon: "photoshop" },
              { name: "Unity (C#)", icon: "unity" },
            ]}
          />

           <SkillChipGroup
            title="Servicios / Backend"
            items={[
              { name: "Supabase", icon: "supabase" },
              { name: "Stripe", icon: "stripe" },
              { name: "SQL", icon: "sql" },
              { name: "APIs REST", icon: "api" },
            ]}
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Contacto" subtitle="Hablemos de tu proyecto" />
        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-teal-500/10 p-6 md:p-8">
          <p className="text-slate-200 text-lg">
            ¿Buscas mejorar tu presencia digital o validar una idea? Escribime y vemos cómo combinar diseño y código para crear algo único.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={links.email} variant="primary">
              Enviar email
            </ButtonLink>
            <ButtonLink href={links.github} external>
              GitHub
            </ButtonLink>
            <ButtonLink href={links.linkedin} external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={links.youtube} external>
              YouTube
            </ButtonLink>
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

/** ===== Iconos Skills ===== */
type SkillIconKey =
  | "react"
  | "next"
  | "tailwind"
  | "supabase"
  | "stripe"
  | "github"
  | "unity"
  | "expo"
  | "ts"
  | "js"
  | "html"
  | "css"
  | "sql"
  | "api"
  | "java"
  | "davinci"
  | "photoshop"
  | "google";

type SkillChip = { name: string; icon: SkillIconKey };

function SkillChipGroup({ title, items }: { title: string; items: SkillChip[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
      <h4 className="font-semibold text-slate-100">{title}</h4>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200/90 hover:bg-white/[0.06] transition"
          >
            <SkillIcon name={item.icon} className="size-4 text-slate-100/90" />
            <span className="font-medium">{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TextBadgeIcon({ text }: { text: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-[9px] font-semibold leading-none text-slate-100/90"
    >
      {text}
    </span>
  );
}

function SkillIcon({ name, className }: { name: SkillIconKey; className?: string }) {
  switch (name) {
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
        </svg>
      );

    case "next":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 15.5V8.5l6 7V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M7 10c1-2 2.5-3 4.5-3 3 0 3.5 2 5.5 2 1.5 0 2.5-1 3.5-3-1 2-2.5 3-4.5 3-3 0-3.5-2-5.5-2-1.5 0-2.5 1-3.5 3Z" />
          <path d="M7 16c1-2 2.5-3 4.5-3 3 0 3.5 2 5.5 2 1.5 0 2.5-1 3.5-3-1 2-2.5 3-4.5 3-3 0-3.5-2-5.5-2-1.5 0-2.5 1-3.5 3Z" />
        </svg>
      );

    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M11 3.5c.7-1.2 2.4-.9 2.6.5l1 6.8h5.1c1.3 0 2 1.6 1 2.5l-8.4 7.6c-.9.8-2.4.3-2.6-.9l-.8-5.8H4.1c-1.3 0-2-1.6-1-2.5L11 3.5Z" />
        </svg>
      );

    case "stripe":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M9.2 10.2c0-.9.7-1.3 2-1.3 1.7 0 3.7.5 5.4 1.4V7.1C15 6.4 13.1 6 11.4 6 7.9 6 5.6 7.8 5.6 10.7c0 4.5 6.3 3.8 6.3 5.8 0 .8-.7 1.4-2.2 1.4-1.8 0-4.1-.7-5.9-1.7v3.3c1.9.9 3.8 1.3 5.9 1.3 3.6 0 6-1.8 6-4.7 0-4.9-6.4-4-6.4-6.2Z" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 3.8a8.2 8.2 0 0 0-2.6 16c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.9 1.2.9.7 1.2 1.9.8 2.4.6.1-.5.3-.8.5-1-1.8-.2-3.7-.9-3.7-4a3 3 0 0 1 .8-2.1 2.9 2.9 0 0 1 .1-2.1s.7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1 .1 1.8.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A8.2 8.2 0 0 0 12 3.8Z" />
        </svg>
      );

    case "unity":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 4.5 8.2 6.7l-1.9 3.7 1.9 3.7 3.8 2.2 3.8-2.2 1.9-3.7-1.9-3.7L12 4.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );

    case "expo":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M7.5 17.5c2.5-4 4.2-9.5 4.5-11.5.3 2 2 7.5 4.5 11.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M9 17.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "ts":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="5" y="6" width="14" height="12" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 11h2v6" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M15.5 11.2c-.3-.4-.8-.6-1.4-.6-.9 0-1.5.4-1.5 1 0 1.4 3.3.8 3.3 2.8 0 1.1-1 1.9-2.6 1.9-1 0-1.9-.4-2.5-1.1"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    
    // Icono genérico para Google/Analytics
    case "google":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
        </svg>
      );

    case "html":
      return <TextBadgeIcon text="H" />;
    case "css":
      return <TextBadgeIcon text="CSS" />;
    case "js":
      return <TextBadgeIcon text="JS" />;
    case "sql":
      return <TextBadgeIcon text="SQL" />;
    case "api":
      return <TextBadgeIcon text="API" />;
    case "java":
      return <TextBadgeIcon text="J" />;
    case "davinci":
      return <TextBadgeIcon text="DR" />;
    case "photoshop":
      return <TextBadgeIcon text="Ps" />;

    default:
      return null;
  }
}

/** ===== Iconos inline (sin librerías) ===== */
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 7V6.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 8.6c0-.88.72-1.6 1.6-1.6h10.8c.88 0 1.6.72 1.6 1.6V19c0 .88-.72 1.6-1.6 1.6H6.6C5.72 20.6 5 19.88 5 19V8.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
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