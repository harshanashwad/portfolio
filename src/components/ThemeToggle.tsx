
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full p-1 transition-all duration-500 ease-in-out
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-500'
        }
        ${isTransitioning ? 'opacity-75' : 'opacity-100'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isTransitioning}
    >
      <motion.div
        className={`
          w-6 h-6 rounded-full shadow-lg flex items-center justify-center text-sm
          ${theme === 'dark' ? 'bg-slate-800 text-purple-300' : 'bg-white text-orange-500'}
        `}
        animate={{
          x: theme === 'dark' ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
};
