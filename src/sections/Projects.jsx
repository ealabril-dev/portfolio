import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const withBase = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;


const projects = [
  {
    title: "HPDAI Website",
    role: "Full Stack Developer",
    desc: "Built a full-stack web platform with authentication, dashboards, and API integration.",
    tech: ["HTML5", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
    details: [
      "Implemented authentication and role-based access.",
      "Built dashboards and admin utilities for internal workflows.",
      "Integrated API endpoints and improved performance for common flows.",
    ],
    links: {
      demo: "",
      github: "",
    },
  },
  {
    title: "Dental Access Android Application",
    role: "Android Developer",
    desc: "Developed a native Android application focused on intuitive content presentation and browsing, utilizing reliable API integration for seamless access to up-to-date informational data.",
    tech: ["Java", "SQLite", "Laravel", "MySQL"],
    details: [
      "Designed an easy-to-navigate UI for browsing content.",
      "Implemented API-driven data sync and caching.",
      "Improved offline reliability with local storage patterns.",
    ],
    links: { demo: "", github: "" },
    images: [
      withBase("projects/dental_access_ss.png"),
    ]
  },
  {
    title: "ITMS Iris Timeclock",
    role: "Android Developer",
    desc: "Delivered a full-stack solution integrating native Android development (Java/Kotlin) on biometric hardware with a custom API for PostgreSQL database connectivity.",
    tech: ["Java/Kotlin", "PHP", "MySQL"],
    details: [
      "Integrated with biometric hardware for time logging.",
      "Created a custom API layer for device ↔ server communication.",
      "Ensured database integrity and operational stability.",
    ],
    links: { demo: "", github: "" },
    images: [
      withBase("projects/iris_machine_ss1.png"),
    ]
  },
  {
    title: "EFTC Time Management System",
    role: "Full Stack Developer",
    desc: "Managed stability and continuous development of the payroll platform. Optimized performance and delivered complex new features while ensuring reliability and compliance.",
    tech: ["Vue.js", "Laravel", "MySQL"],
    details: [
      "Built and shipped new timekeeping & payroll features.",
      "Improved performance and reliability of critical workflows.",
      "Maintained maintainable code practices for long-term scaling.",
    ],
    links: { demo: "", github: "" },
    images: [
      withBase("projects/eftc_ss1.png"),
    ]
  },
  {
    title: "Facility WordPress Websites",
    role: "WordPress Developer",
    desc: "Ensured stability and optimized performance of a network of CMS websites. Developed custom themes/plugins and implemented security enhancements.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    details: [
      "Built custom themes/plugins and maintained update lifecycles.",
      "Improved performance, caching, and page stability.",
      "Implemented security hardening and monitoring practices.",
    ],
    links: { demo: "", github: "" },
    images: [
      withBase("projects/wordpress_ss1.png"),
      withBase("projects/wordpress_ss2.png"),
      withBase("projects/wordpress_ss3.png"),
    ]
  },
  {
    title: "Travel One – Web System",
    role: "Freelance Web Developer",
    desc: "Developed a full booking platform for a travel agency, delivering seamless workflows for users and admin staff.",
    tech: ["Vue.js", "Laravel", "MySQL"],
    details: [
      "Built booking flow and admin management tools.",
      "Implemented role-based features for users/admin staff.",
      "Delivered a complete end-to-end system workflow.",
    ],
    links: { demo: "", github: "" },
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work that showcases my experience across the stack."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <button
            key={p.title}
            onClick={() => setSelected(p)}
            className="text-left"
          >
            <Card className="p-6 h-full hover:translate-y-[-2px] transition-transform">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="mt-1 block text-xs text-orange-400">{p.role}</span>

              <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700
                               dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-xs text-slate-500 dark:text-white/60">
                Click to view details
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </Section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl
                        dark:border-white/10 dark:bg-[#0B1324]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-orange-500 dark:text-orange-300">
                {project.role}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50
                         dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:bg-white/[0.07]"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
            {project.desc}
          </p>

          {/* Screenshots */}
          {project.images?.length ? (
            <div className="mt-5">
              <div className="text-sm font-semibold">Screenshots</div>
              <div className="mt-3">
                <ImageCarousel images={project.images} title={project.title} />
              </div>
            </div>
          ) : null}

          {/* Details */}
          {project.details?.length ? (
            <div className="mt-5">
              <div className="text-sm font-semibold">Highlights</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-white/80">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/70" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Tech */}
          <div className="mt-6">
            <div className="text-sm font-semibold">Tech</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700
                             dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links (optional) */}
          {(project.links?.demo || project.links?.github) ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-black hover:bg-orange-400 transition"
                >
                  Live Demo
                </a>
              ) : null}

              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition
                             dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.07]"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ImageCarousel({ images, title }) {
  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (images.length <= 1) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50
                    dark:border-white/10 dark:bg-white/[0.03]">
      {/* Image */}
      <img
        src={images[i]}
        alt={`${title} screenshot ${i + 1}`}
        className="h-56 w-full object-cover sm:h-72"
        loading="lazy"
      />

      {/* Controls (only if > 1 image) */}
      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow hover:bg-white
                       dark:border-white/10 dark:bg-black/40 dark:text-white/90 dark:hover:bg-black/55"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow hover:bg-white
                       dark:border-white/10 dark:bg-black/40 dark:text-white/90 dark:hover:bg-black/55"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                className={`h-2 w-2 rounded-full transition ${
                  idx === i
                    ? "bg-orange-500"
                    : "bg-slate-300 hover:bg-slate-400 dark:bg-white/30 dark:hover:bg-white/45"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

