// src/components/Header.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window gets resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/article", label: "Article" },
    { href: "/#known", label: "Known" },
    { href: "/#hidden", label: "Hidden" }
  ];

  // Animations
  const hamburgerVariants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 }
  };
  
  const hamburgerMiddleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };
  
  const hamburgerBottomVariants = {
    open: { rotate: -45, y: -5 },
    closed: { rotate: 0, y: 0 }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-amber-800 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 md:py-3 flex justify-between items-center">
      {/* <Image 
          src={africaMap} 
          alt="Africa" 
          className="object-cover w-50" // Maintain aspect ratio
          priority // Load the image with high priority
        /> */}

        
        <Link href="/" className="flex items-center z-20" onClick={closeMenu}>
          <span className="text-xl font-bold text-white tracking-tight">
            True<span className="text-amber-300">Africa</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link 
              key={item.label}
              href={item.href} 
              className="text-white hover:text-amber-300 transition-colors font-medium relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <button 
          className="md:hidden z-20 w-8 h-8 flex flex-col justify-center space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span 
            className="w-8 h-0.5 bg-white block origin-center"
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-8 h-0.5 bg-white block"
            variants={hamburgerMiddleVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="w-8 h-0.5 bg-white block origin-center"
            variants={hamburgerBottomVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-amber-800 bg-opacity-98 z-10 overflow-hidden flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.nav className="flex flex-col items-center space-y-8">
              {navItems.map(item => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="overflow-hidden"
                >
                  <Link 
                    href={item.href} 
                    className="text-2xl font-medium text-white hover:text-amber-300 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div 
              className="absolute bottom-16 text-amber-200 text-center"
              variants={itemVariants}
            >
              <p className="mb-2">Discover the real Africa</p>
              <div className="flex space-x-4 justify-center">
                <span className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </span>
                <span className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </span>
                <span className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;