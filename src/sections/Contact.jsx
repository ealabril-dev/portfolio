import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeeovne"; // Formspree endpoint URL

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
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
                name="name"
                required
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
                name="email"
                required
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
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about what you have in mind..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                           dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/40"
              />
            </div>

            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black hover:bg-orange-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" ? (
              <p className="text-sm text-green-600 dark:text-green-400">
                Message sent! I’ll get back to you soon.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
            ) : null}
          </form>
        </Card>
      </div>
    </Section>
  );
}
