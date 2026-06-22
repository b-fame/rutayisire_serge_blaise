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
        <nav className="sticky top-0 z-50 bg-[#141b24]/80 backdrop-blur-md border-b border-[#253141] px-4 py-3 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              🧑‍💻 Serge Blaise
            </span>
            <div className="flex flex-wrap gap-2 text-sm md:text-base">
              <NavLink to="/" className={({ isActive }) => 
                `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>🏠 Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>👤 About</NavLink>
              <NavLink to="/projects" className={({ isActive }) => 
                `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>📁 Projects</NavLink>
              <NavLink to="/profile" className={({ isActive }) => 
                `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>🌐 Profiles</NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40' : 'hover:bg-[#1f2a3a] text-gray-300'}`
              }>📬 Contact</NavLink>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-4 md:p-6">
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