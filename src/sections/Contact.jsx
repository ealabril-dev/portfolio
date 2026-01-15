import Section from "../components/Section";
import Card from "../components/Card";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // Later: connect EmailJS / backend API
    alert("Message submitted (demo) ✅");
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="If you’d like to collaborate, discuss a role, or just say hello, feel free to reach out."
    >
      <div className="flex justify-center">
        <Card className="w-full max-w-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                        dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/40"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me a bit about what you have in mind..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                            dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/40"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
