const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 text-center">
          Have a project in mind or just want to say hello? Feel free to reach
          out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <form
              action="https://formspree.io/f/myzylwog"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              You can also find me on:
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/md-sazzadul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-sazzadul-islam15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
                >
                  <span>🔗</span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:md.sazzadul.islam15@gmail.com"
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
                >
                  <span>✉️</span>
                  <span>md.sazzadul.islam15@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
