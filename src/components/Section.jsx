export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600 dark:text-white/70">
                {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
