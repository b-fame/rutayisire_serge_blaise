// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [window.location.pathname]);

  const navLinks = [
    { to: '/', icon: '🏠', label: 'Home' },
    { to: '/about', icon: '👤', label: 'About' },
    { to: '/projects', icon: '📁', label: 'Projects' },
    { to: '/profile', icon: '🌐', label: 'Profiles' },
    { to: '/contact', icon: '📬', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: '🐙', url: 'https://github.com/b-fame', label: 'GitHub' },
    { icon: '💼', url: 'https://www.linkedin.com/in/blaise-fame-759820418', label: 'LinkedIn' },
    { icon: '📸', url: 'https://www.instagram.com/__rutayisire/', label: 'Instagram' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0c0f14]/95 backdrop-blur-xl border-b border-[#253141]/80 shadow-2xl shadow-black/50' 
        : 'bg-[#141b24]/80 backdrop-blur-md border-b border-[#253141]'
    }`}>
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
              SB
            </div>
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient hidden xs:block">
              Serge Blaise
            </span>
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient xs:hidden">
              SB
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  relative px-3 lg:px-4 py-2 rounded-full transition-all duration-300 text-sm lg:text-base font-medium
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10' 
                    : 'text-gray-400 hover:text-white hover:bg-[#1f2a3a]/50'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base lg:text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                {({ isActive }) => isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#1f2a3a]/50 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span className={`block w-6 h-0.5 bg-gray-400 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-400 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-400 rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 space-y-1 border-t border-[#253141]/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/5' 
                    : 'text-gray-400 hover:text-white hover:bg-[#1f2a3a]/50'
                  }
                `}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
                {({ isActive }) => isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                )}
              </NavLink>
            ))}
            
            {/* Mobile Social Links */}
            <div className="pt-3 mt-3 border-t border-[#253141]/30 px-4">
              <p className="text-[0.6rem] uppercase tracking-wider text-gray-600 mb-2">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1f2a3a] flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 text-gray-400 hover:text-white"
                    aria-label={social.label}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;