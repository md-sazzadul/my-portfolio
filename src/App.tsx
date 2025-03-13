import { lazy, Suspense, useEffect, useState } from "react";

const AboutMe = lazy(() => import("./components/AboutMe"));
const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

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
          className="bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-800 py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
