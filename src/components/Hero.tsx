import CV from "../assets/CV_Islam.pdf";
import Profile from "../assets/Md_Sazzadul_Islam.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-secondary to-accent dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 h-screen flex flex-col items-center justify-center text-center text-white dark:text-gray-200">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>
      <img
        src={Profile}
        alt="Profile"
        className="relative z-10 w-40 h-40 rounded-full border-4 border-white dark:border-gray-500 shadow-lg mb-6 animate-bounce-slow"
      />

      <h1 className="relative z-10 text-5xl font-fancy mb-4">
        Hi, I'm Md Sazzadul Islam
      </h1>

      <p className="relative z-10 text-xl font-medium max-w-xl">
        I'm a passionate{" "}
        <span className="font-semibold text-accent dark:text-indigo-300">
          Front-End Developer
        </span>{" "}
        who loves crafting beautiful, responsive, and user-friendly websites.
      </p>

      <div className="relative z-10 flex space-x-6 mt-6">
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary dark:bg-gray-700 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-primary hover:text-white dark:hover:bg-gray-600 transition-all"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/md-sazzadul"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white dark:border-gray-500 py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-primary dark:hover:bg-gray-600 dark:hover:text-gray-300  transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/md-sazzadul-islam15/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white dark:border-gray-500 py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-primary dark:hover:bg-gray-600 dark:hover:text-gray-300 transition-all"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
