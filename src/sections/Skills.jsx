import Section from "../components/Section";
import Card from "../components/Card";

const skills = [
  {
    title: "Frontend Engineering",
    desc: "Building responsive, accessible interfaces with React/Vue.js, TypeScript, and modern CSS.",
    bullets: ["React & React Hooks", "State management", "Component-driven architecture"],
  },
  {
    title: "Backend Development",
    desc: "Designing robust APIs and services across Node.js, and Laravel environments, utilizing industry best practices",
    bullets: ["RESTful APIs", "Authentication & authorization", "Database modeling"],
  },
  {
    title: "Software Craftsmanship",
    desc: "Focus on maintainability, testing, and clean code for long-term success.",
    bullets: ["Clean architecture", "Testing mindset", "Collaboration & documentation"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core capabilities I bring to teams and projects."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <Card key={s.title} className="p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{s.desc}</p>

            <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/80">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
