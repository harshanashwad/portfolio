
import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Dynamic color selection based on theme
  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#8b5cf6', emissive: '#4c1d95' }, // Purple
      { main: '#06b6d4', emissive: '#0e7490' }, // Cyan
      { main: '#ec4899', emissive: '#be185d' }, // Pink
      { main: '#10b981', emissive: '#047857' }, // Emerald
      { main: '#f59e0b', emissive: '#d97706' }, // Amber
    ];
    
    const lightModeColors = [
      { main: '#7c3aed', emissive: '#5b21b6' }, // Purple
      { main: '#0891b2', emissive: '#0e7490' }, // Cyan
      { main: '#db2777', emissive: '#be185d' }, // Pink
      { main: '#059669', emissive: '#047857' }, // Emerald
      { main: '#d97706', emissive: '#92400e' }, // Amber
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      
      // Pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 2) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3 + pulseFactor * 0.4;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[-3, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={colors.main}
          emissive={colors.emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Outer glow sphere */}
      <mesh position={[-3, 0, 0]}>
        <sphereGeometry args={[1.3, 16, 16]} />
        <meshBasicMaterial 
          color={colors.main}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#8b5cf6', emissive: '#4c1d95' },
      { main: '#06b6d4', emissive: '#0e7490' },
      { main: '#ec4899', emissive: '#be185d' },
      { main: '#10b981', emissive: '#047857' },
      { main: '#f59e0b', emissive: '#d97706' },
    ];
    
    const lightModeColors = [
      { main: '#7c3aed', emissive: '#5b21b6' },
      { main: '#0891b2', emissive: '#0e7490' },
      { main: '#db2777', emissive: '#be185d' },
      { main: '#059669', emissive: '#047857' },
      { main: '#d97706', emissive: '#92400e' },
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime) * 0.3;
      
      // Pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 1.8 + 1) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3 + pulseFactor * 0.4;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[3, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial 
          color={colors.main}
          emissive={colors.emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Outer glow box */}
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[1.9, 1.9, 1.9]} />
        <meshBasicMaterial 
          color={colors.main}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const darkModeColors = [
      { main: '#8b5cf6', emissive: '#4c1d95' },
      { main: '#06b6d4', emissive: '#0e7490' },
      { main: '#ec4899', emissive: '#be185d' },
      { main: '#10b981', emissive: '#047857' },
      { main: '#f59e0b', emissive: '#d97706' },
    ];
    
    const lightModeColors = [
      { main: '#7c3aed', emissive: '#5b21b6' },
      { main: '#0891b2', emissive: '#0e7490' },
      { main: '#db2777', emissive: '#be185d' },
      { main: '#059669', emissive: '#047857' },
      { main: '#d97706', emissive: '#92400e' },
    ];
    
    const colorPalette = theme === 'dark' ? darkModeColors : lightModeColors;
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
      
      // Pulsing glow effect
      const pulseFactor = (Math.sin(state.clock.elapsedTime * 2.2 + 2) + 1) * 0.5;
      if (meshRef.current.material) {
        (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3 + pulseFactor * 0.4;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color={colors.main}
          emissive={colors.emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Outer glow torus */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.4, 0.4, 12, 80]} />
        <meshBasicMaterial 
          color={colors.main}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.2 : 0.4} />
      <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 0.8 : 1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[0, 5, 5]} intensity={0.3} color="#06b6d4" />
      
      <AnimatedSphere />
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
