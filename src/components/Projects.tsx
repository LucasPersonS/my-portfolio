'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const projects = [
  {
    title: 'Register & Login APIs',
    image: '/PROJECT1.png',
    tags: ['AUTHENTICATION', 'SOCIAL MEDIA', 'APIs'],
    link: 'https://example.com/project1',
    github: 'https://github.com/user/project1',
  },
  {
    title: 'Ogi Insurance Chatbot',
    image: '/PROJECT2.png',
    tags: ['ARTIFICIAL INTELLIGENCE', "CHATBOT", "GEMINI"],
  },
  {
    title: 'Porto Insurance Website',
    image: '/PROJECT3.png',
    tags: ['APIs', "CHATBOT", "AUTHENTICATION"],
  },
  {
    title: 'Twitch Clicker Game',
    image: '/PROJECT4.png',
    tags: ['GAMING', "DESIGN", "CODING"],
  },
  {
    title: 'COLLEGE DASHBOARD',
    image: '/PROJECT5.png',
    tags: ['DASHBOARD', "DESIGN", "APIs"],
  },
  {
    title: 'COMMUNITY WEBSITE',
    image: '/PROJECT6.png',
    tags: ['COMMUNITY', "DESIGN", "CODING"],
  },
  {
    title: 'PORTFOLIO',
    image: '/PROJECT7.png',
    tags: ['WEBSITE DESIGN', "CODING"],
  },
  {
    title: 'STREAMING WEBSITE',
    image: '/PROJECT8.png',
    tags: ['DESIGN', "CODING"],
  },
];

interface ProjectsProps {
  setIsHovering: (hovering: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setIsHovering }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (inView) {
    controls.start('visible');
  }

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  const openPopup = (index: number) => {
    setSelectedProject(index);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
<section id="projects" className="relative py-20 bg-white text-center rounded-intersection shadow-md-dark overflow-hidden">
  <div className="max-w-8xl mx-auto px-4">
    <h2 className="text-3xl md:text-8xl font-bold text-left text-black mb-4 ml-4 md:ml-24 font-bebas">Featured Projects</h2>
    <hr className="border-t border-gray-300 mb-8 ml-4 md:ml-24" />
    <div className="flex justify-center p-4 md:p-24 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-4xl md:text-9xl">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-32 md:h-64 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 md:h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 md:h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ) : (
          projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`p-4 md:p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${hovered === index ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => {
                setHovered(index);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setHovered(null);
                setIsHovering(false);
              }}
              onClick={() => openPopup(index)}
            >
              <div className="flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-48 md:h-96 object-cover rounded-md mb-4" />
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
    {!loading && visibleProjects < projects.length && (
      <div className="flex justify-center">
        <button
          onClick={loadMoreProjects}
          className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
        >
          More Projects
        </button>
      </div>
    )}
    {selectedProject !== null && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-lg w-full">
          <img src={projects[selectedProject].image} alt={projects[selectedProject].title} className="w-full h-48 md:h-64 object-cover rounded-md" />
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">{projects[selectedProject].title}</h3>
          <p className="mb-6 text-center">Description of the project goes here.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {projects[selectedProject].tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 md:px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mb-6">
            <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              <FaLink size={24} />
            </a>
            <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <FaGithub size={24} />
            </a>
          </div>
          <div className="flex justify-center">
            <button onClick={closePopup} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    )}
  </div>
</section>
  );
};

export default Projects;