
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedSphere = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={[-3, 0, 0]}>
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#4c1d95" 
        emissiveIntensity={0.2} 
      />
    </Sphere>
  );
};

const AnimatedBox = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={[3, 0, 0]}>
      <meshStandardMaterial 
        color="#06b6d4" 
        emissive="#0e7490" 
        emissiveIntensity={0.2} 
      />
    </Box>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#ec4899" 
        emissive="#be185d" 
        emissiveIntensity={0.2} 
      />
    </Torus>
  );
};

export const Hero3D = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="w-full h-64 md:h-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={theme === 'dark' ? 0.3 : 0.6} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <AnimatedSphere />
        <AnimatedBox />
        <AnimatedTorus />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  );
};
