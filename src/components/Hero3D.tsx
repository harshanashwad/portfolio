import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

const AnimatedPyramid = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Dynamic color selection based on theme with brighter, more vibrant colors
  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#a855f7', emissive: '#7c3aed', glow: '#8b5cf6' }, // Bright Purple
      { main: '#22d3ee', emissive: '#0891b2', glow: '#06b6d4' }, // Bright Cyan
      { main: '#f472b6', emissive: '#ec4899', glow: '#f472b6' }, // Bright Pink
      { main: '#34d399', emissive: '#10b981', glow: '#34d399' }, // Bright Emerald
      { main: '#fbbf24', emissive: '#f59e0b', glow: '#fbbf24' }, // Bright Amber
    ];
    
    const lightModeColors = [
      { main: '#9333ea', emissive: '#7c3aed', glow: '#a855f7' }, // Bright Purple
      { main: '#0ea5e9', emissive: '#0284c7', glow: '#22d3ee' }, // Bright Blue
      { main: '#e11d48', emissive: '#be185d', glow: '#f43f5e' }, // Bright Rose
      { main: '#059669', emissive: '#047857', glow: '#10b981' }, // Bright Emerald
      { main: '#ea580c', emissive: '#dc2626', glow: '#f97316' }, // Bright Orange
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      
      // Enhanced pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 2) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + pulseFactor * 0.8;
      }
    }
  });

  // Create pyramid geometry with more segments for smoother edges
  const pyramidGeometry = useMemo(() => {
    const geometry = new THREE.ConeGeometry(1, 1.5, 16); // Increased segments from 4 to 16
    return geometry;
  }, []);

  return (
    <mesh ref={meshRef} position={[-3, 0, 0]} geometry={pyramidGeometry}>
      <meshStandardMaterial 
        color={colors.main}
        emissive={colors.emissive}
        emissiveIntensity={0.6}
        metalness={0.1}
        roughness={0.1}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
};

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#a855f7', emissive: '#7c3aed', glow: '#8b5cf6' },
      { main: '#22d3ee', emissive: '#0891b2', glow: '#06b6d4' },
      { main: '#f472b6', emissive: '#ec4899', glow: '#f472b6' },
      { main: '#34d399', emissive: '#10b981', glow: '#34d399' },
      { main: '#fbbf24', emissive: '#f59e0b', glow: '#fbbf24' },
    ];
    
    const lightModeColors = [
      { main: '#9333ea', emissive: '#7c3aed', glow: '#a855f7' },
      { main: '#0ea5e9', emissive: '#0284c7', glow: '#22d3ee' },
      { main: '#e11d48', emissive: '#be185d', glow: '#f43f5e' },
      { main: '#059669', emissive: '#047857', glow: '#10b981' },
      { main: '#ea580c', emissive: '#dc2626', glow: '#f97316' },
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime) * 0.3;
      
      // Enhanced pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 1.8 + 1) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + pulseFactor * 0.8;
      }
    }
  });

  // Create rounded box geometry using subdivisions for smoother appearance
  const roundedBoxGeometry = useMemo(() => {
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 8, 8, 8); // Added subdivisions for smoother look
    return geometry;
  }, []);

  return (
    <mesh ref={meshRef} position={[3, 0, 0]} geometry={roundedBoxGeometry}>
      <meshStandardMaterial 
        color={colors.main}
        emissive={colors.emissive}
        emissiveIntensity={0.6}
        metalness={0.1}
        roughness={0.1}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#a855f7', emissive: '#7c3aed', glow: '#8b5cf6' },
      { main: '#22d3ee', emissive: '#0891b2', glow: '#06b6d4' },
      { main: '#f472b6', emissive: '#ec4899', glow: '#f472b6' },
      { main: '#34d399', emissive: '#10b981', glow: '#34d399' },
      { main: '#fbbf24', emissive: '#f59e0b', glow: '#fbbf24' },
    ];
    
    const lightModeColors = [
      { main: '#9333ea', emissive: '#7c3aed', glow: '#a855f7' },
      { main: '#0ea5e9', emissive: '#0284c7', glow: '#22d3ee' },
      { main: '#e11d48', emissive: '#be185d', glow: '#f43f5e' },
      { main: '#059669', emissive: '#047857', glow: '#10b981' },
      { main: '#ea580c', emissive: '#dc2626', glow: '#f97316' },
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
      
      // Enhanced pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 2.2 + 2) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + pulseFactor * 0.8;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial 
        color={colors.main}
        emissive={colors.emissive}
        emissiveIntensity={0.6}
        metalness={0.1}
        roughness={0.1}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1.2 : 1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#22d3ee" />
      
      <AnimatedPyramid />
      <AnimatedBox />
      <AnimatedTorus />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <motion.div
      className="w-full h-64 md:h-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};
