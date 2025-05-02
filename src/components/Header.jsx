import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/partners', label: 'Partners' },
    { to: '/what-we-do', label: 'What We Do' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact Us' },

  ];

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Custom Link component
  const Link = ({ to, className, children, onClick }) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isActive = currentPath === to;

    return (
      <a
        href={to}
        className={typeof className === 'function' ? className(isActive) : className}
        onClick={(e) => {
          if (onClick) onClick();
        }}
      >
        {children}
      </a>
    );
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    open: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'dark:bg-gray-900'
      }`}
    >
      {/* Desktop & Mobile Header */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="flex items-center"
          >
            <div
              className={`relative ${
                scrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
              } p-2 rounded-lg mr-3 transition-colors duration-300`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <span
                  className={`text-2xl font-bold ${
                    scrolled ? 'text-white' : 'text-blue-600'
                  }`}
                >
                  A
                </span>
              </motion.div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg transform rotate-45 z-0"></div>
            </div>

            <motion.h1
              variants={logoVariants}
              className={`text-xl font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              } transition-colors duration-300`}
            >
              Attributics Tech
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                variants={navItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={(isActive) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? scrolled
                          ? 'bg-blue-100 text-gray-900 font-bold'
                          : 'bg-white/20 text-white font-bold'
                        : scrolled
                          ? 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'
                          : 'text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3"
            >
              <button
                className="px-4 py-2 rounded-md text-sm font-medium shadow-md transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                Get Started
              </button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`ml-3 p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial="closed"
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        className="md:hidden overflow-hidden"
      >
        <div
          className={`px-4 py-2 space-y-1 shadow-lg transition-colors duration-300 ${
            scrolled ? 'bg-white' : 'bg-blue-600'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={(isActive) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? scrolled
                      ? 'bg-blue-100 text-gray-900'
                      : 'bg-blue-700 text-white'
                    : scrolled
                      ? 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'
                      : 'text-white hover:bg-blue-700'
                }`
              }
            >
              {item.label}
            </Link>
          ))}
          <button
            className="w-full mt-3 px-4 py-2 rounded-md text-base font-medium shadow-md transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Header gradient underline */}
      {scrolled && (
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
      )}
    </motion.header>
  );
}

export default Header;