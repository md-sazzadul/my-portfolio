import { lazy, Suspense, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
          className="flex items-center justify-center w-14 h-14 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-800 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transform hover:scale-110 transition-all duration-300"
        >
          {darkMode ? (
            <FaSun className="text-2xl animate-spin-slow" />
          ) : (
            <FaMoon className="text-2xl animate-pulse" />
          )}
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
