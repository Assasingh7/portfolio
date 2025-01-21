import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen] = useState(true);

  return (
    <motion.aside
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? '0%' : '-100%' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white fixed ${
        isOpen ? 'flex' : 'hidden'
      } lg:flex flex-col items-center py-8`}
    >
      <div className="mb-12">
        <motion.h1
          className="text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          Portfolio
        </motion.h1>
      </div>
      <nav className="flex flex-col space-y-8 w-full">
      {[
  { id: 'hero', label: 'Home', icon: <FaHome /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
].map((item) => (
  <motion.a
    key={item.id}
    href={`#${item.id}`}
    className="flex items-center px-6 py-3 hover:bg-gray-800 rounded transition-all"
    whileHover={{ scale: 1.1 }}
  >
    {React.cloneElement(item.icon, { className: 'mr-4' })}
    <span>{item.label}</span>
  </motion.a>
))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
