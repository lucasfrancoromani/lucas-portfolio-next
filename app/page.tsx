// app/page.tsx
import Image from "next/image";

export default function PortfolioLucasRomani() {
  // Ejemplo de proyectos. Ajusta a tus proyectos reales.
  const projects = [
    {
      title: "Consulado Boca Juniors Roma",
      period: "2025",
      blurb:
        "Sitio informativo del Consulado de Boca Juniors en Roma. Proyecto desde cero con HTML, CSS y JavaScript.",
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["Web", "Diseño UI", "Comunidad"],
      repo: "https://github.com/lucasfrancoromani/consulado-boca-roma",
      demo: "",
      imageAlt: "Capturas del sitio Consulado Boca Juniors Roma",
      images: ["/images/Captura_Consulado1.png", "/images/Captura_Consulado2.png"],
    },
    {
      title: "Bienestar App (MVP)",
      period: "2025",
      blurb:
        "Marketplace móvil de servicios de bienestar (masajes, faciales, etc.). Auth, reservas, reprogramación, panel profesional, Stripe Connect.",
      stack: ["Expo", "React Native", "Supabase", "Stripe"],
      tags: ["Mobile", "MVP", "Marketplace"],
      repo: "https://github.com/lucasfrancoromani/bienestar-mvp",
      demo: "",
      imageAlt: "Pantallas de la app Bienestar",
      images: ["/images/bienestar-1.png", "/images/bienestar-2.png"],
    },
  ];

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      id="top"
    >
      {/* Skip to content (accesibilidad) */}
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-sky-500/90 focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md"
      >
        Saltar al contenido
      </a>

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <nav
          className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between"
          aria-label="Principal"
        >
          <a href="#top" className="font-semibold tracking-wide text-slate-100">
            Lucas Franco Romani <span className="text-sky-400">· Portfolio</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#proyectos" className="hover:text-sky-300">
              Proyectos
            </a>
            <a href="#sobre-mi" className="hover:text-sky-300">
              Sobre mí
            </a>
            <a href="#skills" className="hover:text-sky-300">
              Skills
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl border border-sky-500/40 px-3 py-1.5 hover:bg-sky-500/10"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Desarrollador <span className="text-sky-400">Full-Stack & Mobile</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          Construyo MVPs con <strong>React</strong>, <strong>React Native</strong>,
          <strong> Supabase</strong> y <strong>Stripe</strong>, cuidando performance y UX.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#proyectos"
            className="rounded-xl bg-sky-500 text-slate-900 px-4 py-2 font-medium hover:bg-sky-400"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/lucasfrancoromani"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-sky-500/40 px-4 py-2 hover:bg-sky-500/10"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Proyectos</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-medium">{p.title}</h3>
                <span className="text-xs text-slate-400">{p.period}</span>
              </div>
              <p className="mt-2 text-slate-300">{p.blurb}</p>

              {/* Thumbnails (usa next/image para performance) */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {p.images.map((src, idx) => (
                  <div key={idx} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image src={src} alt={p.imageAlt} fill className="object-cover" />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-sky-500/10 px-2 py-1 text-sky-300">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 text-sm"
                  >
                    Código
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 text-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sobre mí</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Soy Lucas, dev argentino en Italia. Me enfoco en productos claros, medibles y
          escalables. Disfruto crear UIs limpias y flujos simples de usuario.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-slate-300">
          <li>React</li>
          <li>Next.js</li>
          <li>React Native (Expo)</li>
          <li>TypeScript</li>
          <li>Supabase</li>
          <li>Stripe</li>
          <li>PostgreSQL</li>
          <li>Tailwind</li>
        </ul>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contacto</h2>
        <p className="mt-3 text-slate-300">
          ¿Te interesa trabajar conmigo?{" "}
          <a
            href="mailto:dev@lucasromani.com"
            className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
          >
            dev@lucasromani.com
          </a>
        </p>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
        Hecho con <span className="text-sky-300">React/Next.js</span> + Tailwind.
      </footer>
    </main>
  );
}
