import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Interactive Portfolio Website",
      description: (
        <>
          A fully customized, <strong>production-grade developer portfolio</strong> designed to showcase my work, skillset, and certifications in AI/ML, Data Science, and Software Engineering.
        </>
      ),
      tech: ["React", "Three.js", "Framer Motion", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      github: "https://github.com/harshanashwad/portfolio",
      demo: null
    },
    {
      title: "Image Denoising using Markov Random Fields",
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <li>Developed a toolkit for image denoising using <strong>MRF</strong>-methods like <strong>Graph Cuts, Gibbs Sampling, and ICM</strong> to handle Salt & Pepper, Gaussian, and Uniform noise.</li>
            <li>Explored spatial priors and probabilistic inference techniques for image restoration, evaluated with metrics such as PSNR and SSIM.</li>
          </ul>
        </>
      ),
      tech: ["OpenCV", "PyTorch", "MRF", "NumPy"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      github: "https://github.com/harshanashwad/MRF-Variants-for-Noise-Reduction",
      demo: null
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <motion.a
                      href={project.github}
                      className="px-4 py-2 bg-white/90 text-gray-800 rounded-full font-semibold hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demo
                    </motion.a> */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/90 text-gray-800 rounded-full font-semibold hover:bg-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="relative z-10 text-center mt-16 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
              <p className="text-white/90 text-lg mb-6">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <motion.button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
