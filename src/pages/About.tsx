
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export const About = () => {
  const skills = [
    "React.js", "TypeScript", "Node.js", "Python", "Three.js", "Framer Motion",
    "TailwindCSS", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Led the development of interactive web applications using React and modern JavaScript frameworks."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built end-to-end web solutions with focus on performance and user experience."
    },
    {
      title: "Junior Developer",
      company: "StartupCo",
      period: "2019 - 2020",
      description: "Contributed to various projects while learning modern web development practices."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating beautiful, functional, and user-friendly applications
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            className="mb-16 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Started as a curious student exploring the world of programming, I've grown into a passionate developer 
                who believes in the power of technology to solve real-world problems. My journey has taken me through 
                various technologies and frameworks, always pushing me to learn and adapt.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community through articles and tutorials.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-white/90 text-lg mb-6">
                Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
