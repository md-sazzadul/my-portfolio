import CineRental01 from "../assets/cinerental-01.jpg";
import Luxex01 from "../assets/luxex-01.jpg";
import TicTacToe01 from "../assets/tic-tac-toe-01.jpg";
import WeatherDashboard01 from "../assets/weather-dashboard-01.jpg";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Luxex - Luxury E-Commerce Website",
    shortDescription:
      "A sleek e-commerce template for luxury brands with a modern design.",
    fullDescription:
      "A modern and elegant e-commerce website template designed for luxury brands. This project features a responsive design, interactive product listings, and a clean, user-friendly interface.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)"],
    image: Luxex01,
    github: "https://github.com/md-sazzadul/luxex",
    liveDemo: "https://md-sazzadul.github.io/luxex/",
  },
  {
    title: "Weather Dashboard",
    shortDescription:
      "A real-time weather app with location search and forecasts.",
    fullDescription:
      "A web application built with React, Vite, and Tailwind CSS that provides real-time weather information. It allows users to search for weather conditions, save favorite locations, and view detailed forecasts.",
    techStack: [
      "React with Vite",
      "React Context API",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
    image: WeatherDashboard01,
    github: "https://github.com/md-sazzadul/weather-dashboard",
    liveDemo: "https://weather-dashboard-sazzad15.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    shortDescription: "An interactive game with dark mode and game history.",
    fullDescription:
      "An interactive Tic Tac Toe game built with React, TypeScript, and Tailwind CSS, featuring dynamic player names, game history, dark mode, responsive design, and sound effects for a fun user experience.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "ESLint",
      "LocalStorage",
      "Audio Effects",
    ],
    image: TicTacToe01,
    github: "https://github.com/md-sazzadul/tic-tac-toe",
    liveDemo: "https://tic-tac-toe-sazzad15.netlify.app/",
  },
  {
    title: "Cinerental",
    shortDescription:
      "An online movie rental platform with a watchlist and reviews.",
    fullDescription:
      "A movie rental platform that allows users to browse, search, and rent movies online. It features a responsive design, dark mode, and functionalities such as cart management, watchlist, and reviews.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Toastify",
      "ESLint",
    ],
    image: CineRental01,
    github: "https://github.com/md-sazzadul/cinerental",
    liveDemo: "https://cinerental-sazzad15.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 text-center">
          Here are some of my favourite projects showcasing my skills and
          expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
