// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', icon: 'bi-house-fill', label: 'Home' },
    { to: '/about', icon: 'bi-person-fill', label: 'About' },
    { to: '/projects', icon: 'bi-folder-fill', label: 'Projects' },
    { to: '/profile', icon: 'bi-globe2', label: 'Profiles' },
    { to: '/contact', icon: 'bi-envelope-fill', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: 'bi-github', url: 'https://github.com/b-fame', label: 'GitHub' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/blaise-fame-759820418', label: 'LinkedIn' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/__rutayisire/', label: 'Instagram' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0c0f14]/95 backdrop-blur-xl border-b border-[#253141]/80 shadow-2xl shadow-black/50' 
        : 'bg-[#141b24]/80 backdrop-blur-md border-b border-[#253141]'
    }`}>
      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              🧑‍💻
            </span>
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient hidden xs:block">
              BFAME
            </span>
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient xs:hidden">
              BF
            </span>
          </NavLink>

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
                  <i className={`${link.icon} text-base lg:text-lg`}></i>
                  <span>{link.label}</span>
                </span>
                {({ isActive }) => isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                )}
              </NavLink>
            ))}
          </div>

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
                <i className={`${link.icon} text-xl`}></i>
                <span>{link.label}</span>
                {({ isActive }) => isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                )}
              </NavLink>
            ))}
            
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
                    <i className={`${social.icon} text-sm`}></i>
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