
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <motion.span
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-300
                  ${isActive(item.path)
                    ? 'text-white dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`
                      block px-4 py-2 rounded-lg transition-all duration-300
                      ${isActive(item.path)
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                      }
                    `}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
