'use client'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import CursorTrail from '@/components/CursorTrail';
import ContactSection from '../components/ContactSection';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t } = useTranslation('common');
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <Header setIsHovering={setIsHovering} />
      <main>
        <CursorTrail isHovering={isHovering} />
        <Hero />
        <Projects setIsHovering={setIsHovering} />
        <Services />
        <ContactSection />
      </main>
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-7 pointer-events-none z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/noise.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Home;