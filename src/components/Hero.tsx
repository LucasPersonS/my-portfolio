'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start('visible');
  }

  const handleShot = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section id="hero"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    className="h-screen relative flex flex-col justify-center items-center text-center bg-black text-white px-6 md:px-12 rounded-b-lg overflow-hidden"
  >
    <div className="relative z-10 max-w-xl md:max-w-2xl mt-4 md:mt-0 flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-6">
        <img src="/avatar.png" alt="Avatar" className="h-24 w-24 rounded-full" />
        <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full font-semibold">@LucasSrvl</span>
      </div>
      <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
        Building digital <br className="hidden md:block" /> products, brands, and <br className="hidden md:block" /> <span className="highlight">experience</span>.
      </h1>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition relative overflow-hidden"
        onClick={handleShot}
      >
        Give a Shot
      </a>
    </div>
    <video
      className="absolute inset-0 w-full h-full object-cover opacity-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/noise.mp4" type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  </motion.section>
  );
};

export default Hero;