import CV from "../assets/CV_Islam.pdf";
import Profile from "../assets/Md_Sazzadul_Islam.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center text-center text-white">
      <img
        src={Profile}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
      />

      <h1 className="text-5xl font-bold mb-4">Hi, I'm Md Sazzadul Islam</h1>

      <p className="text-xl font-medium max-w-xl">
        I'm a passionate{" "}
        <span className="font-semibold">Front-End Developer</span> who loves
        crafting beautiful, responsive, and user-friendly websites. My skills
        include JavaScript, React, Tailwind CSS, and modern UI/UX design.
      </p>

      <div className="flex space-x-6 mt-6">
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-500 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-100"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/md-sazzadul"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-indigo-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/md-sazzadul-islam15/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-indigo-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
