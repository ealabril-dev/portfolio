export default function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl border shadow-sm backdrop-blur",
        "border-slate-200 bg-white text-slate-900",
        "dark:border-white/10 dark:bg-white/[0.05] dark:text-white",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}