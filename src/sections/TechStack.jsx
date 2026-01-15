import Section from "../components/Section";
import Card from "../components/Card";

const stacks = [
  {
    title: "Frontend",
    subtitle: "Modern, type-safe interfaces.",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Vue.js",
      "Next.js / Nuxt.js",
      "Styled Components / CSS Modules",
    ],
  },
  {
    title: "Backend",
    subtitle: "Secure & scalable APIs.",
    items: ["Node.js", "Laravel", "Python", "REST best practices"],
  },
  {
    title: "Data & Other",
    subtitle: "Persistence and infrastructure.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Git & GitHub", "CI/CD pipelines"],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech"
      title="Tech Stack"
      subtitle="Tools and technologies I use to deliver reliable solutions."
    >
      <div className="mx-auto max-w-xl space-y-6">
        {stacks.map((s) => (
          <Card key={s.title} className="p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{s.subtitle}</p>

            <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/80">
              {s.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
