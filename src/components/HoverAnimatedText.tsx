'use client'

import { motion, Variant } from "framer-motion";
import { useState, CSSProperties } from "react";

type HoverAnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: -5,
    transition: {
      duration: 0.05,
    },
  },
};

const HoverAnimatedText = ({
  text,
  className,
  style,
  animation = defaultAnimations,
}: HoverAnimatedTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={className}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.02 } },
          hidden: {},
        }}
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            variants={animation}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
};

export default HoverAnimatedText; 