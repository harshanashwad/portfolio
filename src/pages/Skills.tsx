
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 80 },
        { name: "Svelte", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 82 },
        { name: "GraphQL", level: 85 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 78 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Design & Animation",
      skills: [
        { name: "Framer Motion", level: 92 },
        { name: "Three.js", level: 85 },
        { name: "CSS/SCSS", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Adobe Creative Suite", level: 75 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "Webpack", "Vite", "Jest", "Cypress", "Postman"
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
                Skills & Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-purple-600 dark:text-purple-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  className="px-6 py-3 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold border border-purple-200 dark:border-purple-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications/Achievements */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023"
              },
              {
                title: "React Developer Certification",
                issuer: "Meta",
                year: "2022"
              },
              {
                title: "Full Stack Web Development",
                issuer: "FreeCodeCamp",
                year: "2021"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-white/90 text-lg mb-6">
                Let's combine these skills to create your next project with cutting-edge technology and innovative solutions.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.button>
            </div>
          </motion.div> */}
        </div>
      </div>
    </PageTransition>
  );
};
