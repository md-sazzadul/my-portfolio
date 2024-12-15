const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️", proficiency: 90 },
    { name: "Tailwind CSS", icon: "🎨", proficiency: 80 },
    { name: "Redux", icon: "🌀", proficiency: 85 },
    { name: "JavaScript (ES6+)", icon: "📜", proficiency: 95 },
    { name: "HTML & CSS", icon: "🌐", proficiency: 100 },
    { name: "UI/UX Design", icon: "🎭", proficiency: 75 },
    { name: "Responsive Design", icon: "📱", proficiency: 90 },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
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
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {skill.proficiency}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
