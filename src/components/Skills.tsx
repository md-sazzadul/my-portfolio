const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Redux", icon: "🌀" },
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "HTML & CSS", icon: "🌐" },
    { name: "UI/UX Design", icon: "🎭" },
    { name: "Responsive Design", icon: "📱" },
  ];

  return (
    <section className="bg-gray-50  dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Here's a list of my technical skills and expertise that I bring to
          every project.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg transform hover:scale-105 transition duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
