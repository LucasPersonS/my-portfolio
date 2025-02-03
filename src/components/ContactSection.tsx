'use client'

import { FaEnvelope, FaWhatsapp,} from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-white text-center overflow-hidden rounded-top shadow-md-dark">
      <div className="flex flex-col items-center">
        <img src="/handshake.svg" alt="Design" className="h-32 w-32 mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-2 text-black">Let's talk about</h2>
        <h3 className="text-4xl font-bold mb-8 text-black">Collaboration</h3>
        <div className="flex space-x-4">
          <a href="mailto:lservollo@gmail.com" className="flex items-center px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
            <FaEnvelope className="mr-2" /> Get in Touch
          </a>
          <a href="https://wa.me/5511963520983" className="flex items-center px-6 py-3 bg-white text-black font-bold border border-black rounded-full hover:bg-gray-200 transition">
            <FaWhatsapp className="mr-2" /> Hire me Now
          </a>
        </div>
      </div>
      <footer className="mt-16 text-gray-600">
        <p>© 2024 All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/lservollo/" className="hover:underline">Linkedin</a>
          <span>/</span>
          <a href="https://x.com/LucasSrvl" className="hover:underline">Twitter</a>
          <span>/</span>
          <a href="https://github.com/LucasPersonS" className="hover:underline">GitHub</a>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection; 