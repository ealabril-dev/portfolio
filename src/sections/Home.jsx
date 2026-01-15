import Card from "../components/Card";

export default function Home() {
  return (
    <section id="home" className="scroll-mt-28 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Card className="p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="text-xs tracking-widest text-orange-400">
                FULL STACK DEVELOPER
              </span>

              <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Hi, I’m Emmanuel.
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-600 dark:text-white/70">
                I design and build reliable, scalable solutions for both web and
                Android platforms — crafting everything from clean, responsive
                UIs to robust backend APIs and database architectures.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-400 transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.07] transition"
                >
                  Contact Me
                </a>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>Full Stack (React, Node, etc.)</Tag>
                <Tag>End-to-end delivery</Tag>
                <Tag>Focused on code quality</Tag>
              </div>
            </div>

            {/* RIGHT */}
            <Card className="p-6">
              <h3 className="text-sm font-semibold">Current Focus</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-600 dark:text-white/70">
                Building performant, maintainable web solutions.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-white/80">
                <li>• TypeScript-first development</li>
                <li>• Clean API design</li>
                <li>• CI/CD and best practices</li>
              </ul>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-700 dark:text-white/80">
      {children}
    </span>
  );
}
