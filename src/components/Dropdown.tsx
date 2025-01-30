import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import HoverAnimatedText from './HoverAnimatedText';


interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    initial: { backgroundColor: 'white', color: 'black' },
    hover: { backgroundColor: 'black', color: 'white', transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute right-5 top-25 bg-white shadow-lg rounded-lg p-4 w-64 h-80 md:right-20 md:top-25 md:p-6 md:w-72 md:h-96"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="text-black text-2xl">
            <a href="#portfolio" className="block mb-4">
              <HoverAnimatedText text="portfolio" />
            </a>
            <a href="#about" className="block mb-4">
              <HoverAnimatedText text="about" />
            </a>
            <a href="#expertise" className="block mb-4">
              <HoverAnimatedText text="expertise" />
            </a>
            <a href="#contact" className="block mb-4">
              <HoverAnimatedText text="contact us" />
            </a>
          </div>
          <div className="flex space-x-4 mt-12 text-2xl justify-center">
            <motion.a
              href="https://wa.me/+5511963520983"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaWhatsapp className="text-current" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lservollo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaLinkedin className="text-current" />
            </motion.a>
            <motion.a
              href="https://twitter.com/LucasSvrl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <FaTwitter className="text-current" />
            </motion.a>
          </div>
          <a href=''>
          <p className=" mt-2 text-xl text-black text-center">lservollo@gmail.com</p>
          </a>
        </motion.div>
        
      )}
    </AnimatePresence>
  );
};

export default Dropdown;