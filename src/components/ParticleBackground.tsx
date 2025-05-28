
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export const ParticleBackground = () => {
  const { theme, isTransitioning } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  const darkModeConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981"],
      },
      links: {
        color: "#8b5cf6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const lightModeConfig = {
    ...darkModeConfig,
    particles: {
      ...darkModeConfig.particles,
      color: {
        value: ["#8b5cf6", "#06b6d4", "#ec4899", "#f59e0b"],
      },
      links: {
        color: "#374151",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      opacity: {
        value: 0.8,
      },
    },
  };

  return (
    <motion.div 
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 0.3 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={theme === 'dark' ? darkModeConfig : lightModeConfig}
        className="absolute inset-0"
      />
    </motion.div>
  );
};
