export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm text-slate-600 dark:text-white/70">© {new Date().getFullYear()} Emmanuel — Full Stack Developer</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-white/70">Open to opportunities in web, backend, and cloud engineering.</p>
      </div>
    </footer>
  );
}
