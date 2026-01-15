import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ mode, setMode }) {
  const isDark = mode === "dark";
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Fix A: stable active section
  useEffect(() => {
    const ids = NAV.map((n) => n.id);

    const onScroll = () => {
      const offset = 120;
      const y = window.scrollY + offset;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0B1324]/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand */}
        <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900/5 border border-slate-200 dark:bg-white/[0.06] dark:border-white/10">
            <span className="text-sm font-semibold dark:text-white">EA</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Emmanuel</div>
            <div className="text-xs text-slate-500 dark:text-white/70">Full Stack Developer</div>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                className={`relative text-sm transition ${
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                }`}
              >
                {n.label}
                {isActive ? (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-400" />
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setMode(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition
                       dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:bg-white/[0.07] dark:hover:text-white"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 transition
                       dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:bg-white/[0.07]"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <div className="md:hidden border-t border-slate-200/70 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0B1324]/90">
          <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-2">
              {NAV.map((n) => {
                const isActive = active === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => goTo(n.id)}
                    className={`rounded-xl px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? "bg-orange-500/10 text-orange-600 dark:text-orange-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-white/80 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {n.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
