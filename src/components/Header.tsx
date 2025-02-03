'use client'

import { useEffect, useState } from 'react';
import { HiCubeTransparent } from "react-icons/hi";
import Dropdown from './Dropdown';
import { motion } from "framer-motion";
import HoverAnimatedText from './HoverAnimatedText';

interface HeaderProps {
  setIsHovering: (hovering: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsHovering }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    hover: { y: [0, -5, 0], transition: { duration: 0.3 } },
  };

  return (
    <header className={`fixed top-0 z-30 w-full transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'} bg-black bg-opacity-0 backdrop-blur-md shadow-md`}>
  <div className="max-w-7xl px-8 py-8 flex justify-between items-center">
    <div
      className="flex items-center space-x-5 ml-5"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src="/logo.png" alt="Logo" className="h-16 w-16 rounded-md" />
      <a href='' className="text-4xl font-bold text-white hidden md:block">Lupz</a>
    </div>
    <nav className="flex absolute items-center right-10 bottom-8 space-x-8">
      <a href='https://wa.me/5511963520983'
        className="hidden sm:block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <HoverAnimatedText 
          text="contact me"
          className="px-4 py-2 md:px-6 md:py-4 font-bold text-lg md:text-xl border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        />
      </a>
      <motion.button
        className="p-6 bg-white rounded-full"
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ y: -2, rotate: 90 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      ><HiCubeTransparent className="text-black text-2xl md:text-3xl" />
      </motion.button>
    </nav>
  </div>
  <Dropdown isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
</header>
  );
};

export default Header;