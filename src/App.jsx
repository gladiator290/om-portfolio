import { Toaster } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import StatsBar from "./components/hero/StatsBar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Profiles from "./components/profiles/Profiles";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div
      className="
      min-h-screen
      bg-[#FAFBFF]
      overflow-x-hidden
    "
    >
      <Navbar />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      <main
        className="
        pt-[120px]
        w-[94%]
        max-w-[1400px]
        mx-auto
      "
      >
        <Hero />

        <StatsBar />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Profiles />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;