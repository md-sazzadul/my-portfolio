const projects = [
  {
    title: "Personal Finance Dashboard",
    description:
      "A responsive dashboard to track income, expenses, and savings with interactive charts.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/assets/finance-dashboard.png", // Replace with your project image
    github: "https://github.com/yourusername/finance-dashboard",
    liveDemo: "https://finance-dashboard-demo.com",
  },
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website with product listing, filtering, and cart functionality.",
    techStack: ["React", "Redux", "Tailwind CSS", "Node.js"],
    image: "/assets/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce-website",
    liveDemo: "https://ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "An elegant portfolio website to showcase projects and skills with smooth animations.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://portfolio-demo.com",
  },
  {
    title: "Weather App",
    description:
      "A weather forecast app fetching live data from OpenWeather API with a beautiful UI.",
    techStack: ["React", "JavaScript", "CSS", "OpenWeather API"],
    image: "/assets/weather-app.png",
    github: "https://github.com/yourusername/weather-app",
    liveDemo: "https://weather-app-demo.com",
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
            <div
              key={index}
              className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Tech Stack:
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <li
                        key={i}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full shadow-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline transform hover:scale-105 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline transform hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
