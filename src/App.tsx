import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans leading-relaxed tracking-wide">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
