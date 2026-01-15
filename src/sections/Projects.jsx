import Section from "../components/Section";
import Card from "../components/Card";

const projects = [
  {
    title: "HPDAI Website",
    role: "Full Stack Developer",
    desc: "Built a full-stack web platform with authentication, dashboards, and API integration.",
    tech: "HTML5 · JavaScript · jQuery · Bootstrap",
  },
  {
    title: "Dental Access Android Application",
    role: "Android Developer",
    desc: "Developed a native Android application focused on intuitive content presentation and browsing, utilizing reliable API integration for seamless access to up-to-date informational data.",
    tech: "Java · SQLite · Laravel · PostgreSQL",
  },
  {
    title: "ITMS Iris Timeclock",
    role: "Full Stack Developer",
    desc: "Delivered a full-stack solution integrating native Android development (Java/Kotlin) on biometric hardware with a custom API for PostgreSQL database connectivity.",
    tech: "Java/Kotlin · PHP · PostgreSQL",
  },
  {
    title: "EFTC Time Management System",
    role: "Full Stack Developer",
    desc: "Managed the stability and continuous development of the EFTC payroll platform. Optimized system performance and delivered complex new features while ensuring reliability and compliance.",
    tech: "Vue.js · Laravel · PostgreSQL",
  },
  {
    title: "Facility WordPress Websites",
    role: "WordPress Developer",
    desc: "Ensured high stability and optimized performance of a network of CMS websites. Developed custom themes/plugins and implemented robust security enhancements.",
    tech: "PHP · MySQL · HTML · CSS",
  },
  {
    title: "Travel One – Web System",
    role: "Freelance Web Developer",
    desc: "Developed a full booking platform for a travel agency, delivering seamless workflows for users and admin staff.",
    tech: "Vue.js · Laravel · PostgreSQL",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work that showcases my experience across the stack."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <Card key={p.title} className="p-6 flex flex-col">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <span className="mt-1 text-xs text-orange-400">{p.role}</span>

            <p className="mt-4 text-sm text-slate-500 dark:text-white/600 dark:text-white/70 flex-1">
              {p.desc}
            </p>

            <div className="mt-4 text-xs text-slate-500 dark:text-white/60">
              {p.tech}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
