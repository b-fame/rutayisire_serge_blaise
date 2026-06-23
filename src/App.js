// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <main className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center py-4 sm:py-6 text-gray-600 text-[0.5rem] sm:text-xs border-t border-[#253141] mt-4 sm:mt-8">
          <p>© {new Date().getFullYear()} RUTAYISIRE SERGE BLAISE. Built with ❤️</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;