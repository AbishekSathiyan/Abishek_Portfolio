import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Gradient background with glass morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md bg-opacity-90 border-b border-gray-800" />
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <p className="text-2xl font-bold">
          <span className="text-white">Abishek S</span>{' '}
          <span className="text-blue-400">Portfolio</span>
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors relative text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-gray-200 focus:outline-none z-50 hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg bg-opacity-95 border-t border-gray-700">
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-200 hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-gray-800/50"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}