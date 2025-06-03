import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Code } from "lucide-react";

export const FlippableCard = () => {
  const [flipped, setFlipped] = useState(false);
  const flipBackTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setFlipped(prev => !prev); // toggle flip on click

    // Clear any existing timeout
    if (flipBackTimeout.current) clearTimeout(flipBackTimeout.current);
  };

  const handleMouseLeave = () => {
    if (flipped) {
      // Set auto flip-back only if currently flipped
      flipBackTimeout.current = setTimeout(() => {
        setFlipped(false);
      }, 1500);
    }
  };

  return (
    <motion.div
      className="group cursor-pointer perspective-1000"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        // transition: { duration: 0.3 }
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* FRONT */}
        <motion.div
          className="absolute inset-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-center group-hover:shadow-2xl group-hover:shadow-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300 p-6 rounded-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
            <Code
              size={48}
              className="text-purple-600 dark:text-purple-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            Complete Python Developer (ZTM)
          </h3>
          <p className="text-purple-600 dark:text-purple-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-semibold text-sm transition-colors">
            2021
          </p>
        </motion.div>

        {/* BACK */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 text-white p-6 rounded-xl flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <motion.p
            className="text-sm text-center max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Mastered Python as a full-stack tool — covering OOP, web frameworks, automation, testing, and production-grade best practices. Built real-world apps and wrote clean, scalable code.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
