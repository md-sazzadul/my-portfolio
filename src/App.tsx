import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans leading-relaxed tracking-wide">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-800 py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition duration-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
