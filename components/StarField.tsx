"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  delay: number;
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2
    }));
    setStars(newStars);
    const generateShootingStar = () => {
      const newShootingStar = {
        id: Date.now(),
        top: Math.random() * 50,
        left: Math.random() * 50,
        delay: 0
      };
      setShootingStars(prev => [...prev.slice(-5), newShootingStar]);
    };

    const interval = setInterval(generateShootingStar, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          initial={{
            opacity: 1,
            transform: "rotate(-45deg) translateX(-100%)",
          }}
          animate={{
            opacity: [1, 1, 0],
            transform: [
              "rotate(-45deg) translateX(-100%)",
              "rotate(-45deg) translateX(200%)",
              "rotate(-45deg) translateX(200%)",
            ],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.8, 1],
          }}
          onAnimationComplete={() => {
            setShootingStars(prev => prev.filter(s => s.id !== star.id));
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-purple-950/20" />
    </div>
  );
}