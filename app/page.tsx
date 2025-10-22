// app/page.tsx

export default function PortfolioLucasRomani() {
  const projects = [
    {
      title: "Consulado Boca Juniors Roma",
      period: "2025",
      blurb:
        "Sitio web informativo del Consulado de Boca Juniors en Roma. Diseño azul y amarillo, secciones de eventos, socios y galería de encuentros. Proyecto desarrollado desde cero con HTML, CSS y JavaScript.",
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["Web", "Diseño UI", "Comunidad"],
      repo: "https://github.com/lucasfrancoromani/consulado-boca-roma",
      demo: "",
      imageAlt: "Capturas del sitio Consulado Boca Juniors Roma",
      images: [
        "/images/Captura_Consulado1.png",
      ],
    },
    {
      title: "Bienestar App (MVP)",
      period: "2025",
      blurb:
        "Marketplace móvil para servicios de bienestar (masajes, facial, uñas). Autenticación, reservas, reprogramación, panel profesional, Stripe Connect.",
      stack: ["React Native", "Expo", "Supabase", "Stripe"],
      tags: ["Mobile", "Full-Stack", "Stripe"],
      repo: "https://github.com/lucasfrancoromani/bienestar-mvp",
      demo: "",
      imageAlt: "Pantallas de la app Bienestar",
      images: ["/images/Captura_bienestar.png"], 
    },
  ];

  const skills = [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind"] },
    { group: "Backend / DB", items: ["Supabase (Postgres / RLS)", "SQL", "APIs REST"] },
    { group: "Dev & Tools", items: ["Git / GitHub", "Stripe Connect", "Figma / Canva", "DaVinci Resolve"] },
  ];

  const links = {
    email: "mailto:dev@lucasromani.com",
    github: "https://github.com/lucasfrancoromani",
    linkedin: "https://www.linkedin.com/in/lucasfrancoromani/",
    youtube: "https://www.youtube.com/@cronicasdeunviaje",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Skip link (accesibilidad, no cambia el diseño) */}
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-sky-500/90 focus:text-slate-900 focus:px-3 focus:py-2 focus:rounded-md"
      >
        Saltar al contenido
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <nav
          className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between"
          aria-label="Principal"
        >
          <a href="#top" className="font-semibold tracking-wide text-slate-100">
            Lucas Franco Romani<span className="text-sky-400"> · Portfolio</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#proyectos" className="hover:text-sky-300">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-sky-300">Sobre mí</a>
            <a href="#skills" className="hover:text-sky-300">Skills</a>
            <a href="#contacto" className="inline-flex items-center rounded-xl border border-sky-500/40 px-3 py-1.5 hover:bg-sky-500/10">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/90">Full-Stack · Mobile · Creativo</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Construyo experiencias digitales <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">claras y útiles</span>
            </h1>
            <p className="mt-5 text-slate-300/90 text-lg">
              Desarrollador web y mobile. Actualmente creando un marketplace de bienestar con Supabase & Stripe y un sitio para el Consulado de Boca Juniors en Roma.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#proyectos" className="rounded-2xl px-5 py-2.5 bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-medium shadow-lg shadow-sky-500/20">Ver proyectos</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-2.5 border border-white/15 hover:border-white/30">GitHub</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-sky-500/20 via-teal-500/10 to-sky-500/20 ring-1 ring-white/10 p-1">
              <div className="h-full w-full rounded-2xl bg-slate-950/60 backdrop-blur flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-6 w-full">
                  <GradientCard title="React Native" subtitle="Expo" />
                  <GradientCard title="Supabase" subtitle="Auth · RLS · SQL" />
                  <GradientCard title="Stripe" subtitle="Connect" />
                  <GradientCard title="HTML/CSS/JS" subtitle="Web" />
                  <GradientCard title="Tailwind" subtitle="UI" />
                  <GradientCard title="GitHub" subtitle="Flujo Git" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Proyectos" subtitle="Selección de trabajos y MVPs" />
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-sky-500/20 via-teal-400/10 to-sky-500/20 overflow-hidden" role="img" aria-label={p.imageAlt}>
                {p.images && p.images[0] && (
                  <img src={p.images[0]} alt={p.imageAlt} className="object-cover w-full h-full" />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="text-xs text-slate-300/70 border border-white/10 rounded-full px-2 py-0.5">{p.period}</span>
                </div>
                <p className="mt-2 text-slate-300/90">{p.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300/80">
                  {p.stack.map((s, idx) => (
                    <li key={idx} className="rounded-full border border-white/10 px-2 py-0.5">{s}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm rounded-xl px-3 py-1.5 border border-white/15 hover:border-white/30"
                    >
                      Código
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm rounded-xl px-3 py-1.5 bg-sky-500/90 hover:bg-sky-400 text-slate-900"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Sobre mí" subtitle="Perfil y enfoque" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 leading-relaxed text-slate-300/90">
            <p>
              Soy desarrollador argentino viviendo en Italia. Me interesan los productos útiles y bien diseñados.
              Trabajo con React/React Native, Supabase y Stripe. Me gusta construir MVPs funcionales rápido y mejorar en ciclos cortos.
            </p>
            <p className="mt-4">
              También creo contenido de videoblog ("Crónicas de un Viaje") y disfruto del diseño simple, la edición de video y la escritura.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <ul className="space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3"><Dot/> <span>Enfoque en UX clara, estados y flujos coherentes.</span></li>
              <li className="flex items-start gap-3"><Dot/> <span>Buenas prácticas: Git Flow simple, RLS en base de datos, manejo de errores y logs.</span></li>
              <li className="flex items-start gap-3"><Dot/> <span>MVPs con Stripe Connect, reservas y perfiles profesionales.</span></li>
              <li className="flex items-start gap-3"><Dot/> <span>Aprendizaje continuo (React, SQL, Unity, edición).</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Skills" subtitle="Tecnologías y herramientas" />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-semibold text-slate-100">{s.group}</h4>
              <ul className="mt-3 space-y-1 text-slate-300/90">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-center gap-2"><SmallDot/> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle title="Contacto" subtitle="Agendemos una llamada" />
        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-teal-500/10 p-6 md:p-8">
          <p className="text-slate-200 text-lg">
            ¿Tenés una idea o un proyecto? Escribime y vemos cómo puedo ayudarte con un MVP rápido y un plan claro.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={links.email} className="rounded-2xl px-5 py-2.5 bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-medium">Enviar email</a>
            <a href={links.github} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-2.5 border border-white/15 hover:border-white/30">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-2.5 border border-white/15 hover:border-white/30">LinkedIn</a>
            <a href={links.youtube} target="_blank" rel="noreferrer" className="rounded-2xl px-5 py-2.5 border border-white/15 hover:border-white/30">YouTube</a>
          </div>
        </div>
        <footer className="mt-10 py-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Lucas Franco Romani · Hecho con React/Next.js + Tailwind.
        </footer>
      </section>
    </main>
  );
}

/** ===== Tipos para evitar "implicit any" en TS ===== */
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
    <div className="rounded-2xl p-4 ring-1 ring-white/10 bg-gradient-to-br from-sky-500/10 via-teal-400/10 to-sky-500/10 min-h-[92px]">
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
