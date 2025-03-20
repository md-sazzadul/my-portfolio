const AboutMe = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
          About Me
        </h2>
        <div className="text-lg text-gray-600 dark:text-gray-400 space-y-6 leading-relaxed">
          <p>
            Hi there! I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Sazzad
            </span>
            , a passionate Front-End Developer with a keen eye for detail and a
            love for building beautiful, user-friendly websites.
          </p>
          <p>
            My journey began with a fascination for the web and its potential to
            connect people worldwide. I started exploring HTML and CSS during my
            early college years, and that curiosity soon grew into a
            full-fledged career. Over time, I honed my skills in JavaScript,
            React, and responsive design, turning complex ideas into
            interactive, visually appealing applications.
          </p>
          <p>
            What sets me apart is my ability to combine technical expertise with
            creative design, ensuring every project is both functional and
            delightful to use. Whether it's crafting pixel-perfect layouts or
            optimizing for performance, I bring a problem-solving mindset and a
            commitment to excellence to every task.
          </p>
          <p className="text-center">
            Let’s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
