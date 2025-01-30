'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorTrailProps {
  isHovering: boolean;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ isHovering }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailSize, setTrailSize] = useState(10);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-10"
        style={{
          width: trailSize,
          height: trailSize,
          borderRadius: '50%',
          border: isHovering ? '2px solid #00ffcc' : 'none',
          backgroundColor: isHovering ? 'transparent' : '#ff00b3',
          boxShadow: isHovering ? '0 0 10px #00ffcc, 0 0 20px #00ffcc' : 'none',
        }}
        animate={{
          x: mousePosition.x - trailSize / 2,
          y: mousePosition.y - trailSize / 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          width: trailSize + 10,
          height: trailSize + 10,
          borderRadius: '50%',
          border: '3px solid #ffa6ef',
          backgroundColor: 'transparent',
          boxShadow: '0 0 10px #ffa6ef, 0 0 20px #ffa6ef',
        }}
        animate={{
          x: mousePosition.x - (trailSize + 10) / 2,
          y: mousePosition.y - (trailSize + 10) / 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20,
        }}
      />
    </>
  );
};

export default CursorTrail;