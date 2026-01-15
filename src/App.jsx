import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B1324] dark:text-white">
      <Navbar mode={mode} setMode={setMode} />

      <main>
        <Home />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
