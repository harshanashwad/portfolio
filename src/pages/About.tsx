import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export const About = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "IBM",
      period: "Jan 2022 - Nov 2023",
      description: "Led development of Quote To Cash application using Node.js and Vue.js, implementing real-time features and optimizing system performance. Built SMTP-based monitoring system reducing downtime by 25% and managed AWS infrastructure (EC2, IAM, S3) for deployments."
    }
  ];

  const education = [
    {
      degree: "Master of Computing in Artificial Intelligence",
      school: "National University of Singapore",
      period: "Jan 2024 - Jun 2025"
    },
    {
      degree: "BE Computer Science and Engineering",
      school: "Thiagarajar College of Engineering",
      period: "Aug 2018 - Aug 2022"
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
          </motion.div>

          {/* Personal Story */}
          <motion.div
            className="mb-16 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Software Developer with a strong foundation in AI, currently pursuing my Master's in Artificial Intelligence at NUS.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With past experience at IBM and hands-on work across full-stack development and machine learning, I enjoy building systems that merge logic with creativity — from real-time apps to LLM-powered assistants. I love to explore the intersection of technology and intelligence — a lifelong learner passionate about clean code and clever systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Outside of dev life, you'll find me having coffee, trying to fool LLMs or overthinking model architectures for fun.
              </p>
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

          {/* Education Timeline */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.school}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{edu.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
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
            <div className="relative z-20 bg-gradient-to-r from-purple-600/95 via-cyan-600/95 to-pink-600/95 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-xl border border-white/10">
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
