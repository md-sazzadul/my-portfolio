import { useState } from "react";

interface IProjectCardProps {
  project: {
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    image: string;
    github: string;
    liveDemo: string;
  };
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-all duration-300"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
          {showFullDesc ? project.fullDescription : project.shortDescription}
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-blue-500 hover:underline ml-2"
          >
            {showFullDesc ? "Read Less" : "Read More"}
          </button>
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
        <div className="flex-grow"></div>
        <div className="mt-6 flex justify-between items-center">
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
  );
};

export default ProjectCard;
