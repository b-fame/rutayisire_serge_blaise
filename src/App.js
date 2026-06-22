// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0c0f14] text-gray-200">
        <nav className="sticky top-0 z-50 bg-[#141b24]/80 backdrop-blur-md border-b border-[#253141] px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-1 sm:gap-4">
            <span className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              🧑‍💻 <span className="hidden xs:inline">Serge Blaise</span>
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-2 text-[0.55rem] sm:text-xs md:text-sm">
              <NavLink to="/" className={({ isActive }) => 
                `px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>🏠 <span className="hidden xs:inline">Home</span></NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>👤 <span className="hidden xs:inline">About</span></NavLink>
              <NavLink to="/projects" className={({ isActive }) => 
                `px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>📁 <span className="hidden xs:inline">Projects</span></NavLink>
              <NavLink to="/profile" className={({ isActive }) => 
                `px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>🌐 <span className="hidden xs:inline">Profiles</span></NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>📬 <span className="hidden xs:inline">Contact</span></NavLink>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-2 sm:p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;