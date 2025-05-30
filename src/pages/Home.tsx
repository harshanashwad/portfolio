
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Hero3D } from "../components/Hero3D";
import { useTheme } from "../contexts/ThemeContext";
import { Github, Linkedin, Youtube } from "lucide-react";

export const Home = () => {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            {/* Left Side - Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left mb-12 lg:mb-0 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
                  Hi,
                </span>
                <br />
                <span className="text-gray-800 dark:text-white">
                  I'm Harshan
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                A self-driven Software Dev and AI enthusiast with a knack for building smart, scalable systems.
                From deep learning models to full-stack apps — I turn ideas into impactful code.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div 
                className="flex gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={24} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/harshan-ashwad-539629211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={24} />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@Harshan_Ashwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - 3D Elements */}
            <motion.div 
              className="flex-1 w-full lg:w-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col items-center justify-start">
                {/* Hero Image Section */}
                <motion.div
                  className="mt-24 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-600 via-cyan-500 to-pink-500 p-1">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/dp.jpg" 
                          alt="Profile"
                          className="w-[130%] h-[130%] object-cover scale-100 translate-y-[+9%]"
                        />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-10 h-10 bg-purple-500 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-8 h-8 bg-cyan-500 rounded-full"
                      animate={{
                        y: [0, 10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>

                <Hero3D />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
