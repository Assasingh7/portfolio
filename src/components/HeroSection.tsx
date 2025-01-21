import { motion } from 'framer-motion';
import { FaGithub,  } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-gray-800 text-white">
      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Assa Singh 👋
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Aspiring Software Engineer | Full Stack Developer 
      </motion.p>
      <div className="mt-6 flex gap-4">
        <a href="https://github.com/Assasingh7" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a> */}
      </div>
    </section>
  );
};

export default HeroSection;
