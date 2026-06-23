// pages/About.js - All Tailwind, no CSS imports
import React from 'react';

const About = () => {
  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
      <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 border border-white/5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1.5 sm:gap-3 text-blue-200">
          <span>👤</span> About Me
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1">Get to know more about who I am and what drives me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 md:col-span-2">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-4">👋 Who I Am</h2>
          <div className="space-y-2 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
            <p>
              I'm <span className="text-blue-300 font-medium">RUTAYISIRE SERGE BLAISE</span>, a passionate Software Engineering student at ULK Kigali. 
              I have a strong foundation in software development, with a focus on building scalable and user-friendly applications.
            </p>
            <p>
              My journey in tech started during my A-Level studies in Software Development at Lycee Saint Alexandre Sauli de Muhura, 
              where I developed a deep interest in full-stack web development.
            </p>
            <p className="hidden sm:block">
              I believe in writing clean, efficient code and creating solutions that make a difference.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-4">🎯 Quick Facts</h2>
          <div className="space-y-1.5 sm:space-y-3 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-2 rounded-lg bg-[#1a2332]/30">
              <span className="text-lg sm:text-2xl">📍</span>
              <div>
                <div className="text-gray-400 text-[0.5rem] sm:text-xs">Location</div>
                <div className="text-white text-xs sm:text-sm md:text-base">Kigali, Rwanda</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-2 rounded-lg bg-[#1a2332]/30">
              <span className="text-lg sm:text-2xl">🎓</span>
              <div>
                <div className="text-gray-400 text-[0.5rem] sm:text-xs">Education</div>
                <div className="text-white text-xs sm:text-sm md:text-base">Software Engineering</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-2 rounded-lg bg-[#1a2332]/30">
              <span className="text-lg sm:text-2xl">💼</span>
              <div>
                <div className="text-gray-400 text-[0.5rem] sm:text-xs">Status</div>
                <div className="text-green-400 text-xs sm:text-sm md:text-base">Available</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-2 rounded-lg bg-[#1a2332]/30">
              <span className="text-lg sm:text-2xl">💡</span>
              <div>
                <div className="text-gray-400 text-[0.5rem] sm:text-xs">Interests</div>
                <div className="text-white text-xs sm:text-sm md:text-base">Web Dev · AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-4">🚀 My Mission</h2>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          To leverage my skills in software development to create innovative solutions that solve real-world problems.
        </p>
        <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
          <span className="skill-tag text-[0.45rem] sm:text-xs">🌱 Learning</span>
          <span className="skill-tag text-[0.45rem] sm:text-xs">💡 Innovation</span>
          <span className="skill-tag text-[0.45rem] sm:text-xs">🤝 Collaboration</span>
          <span className="skill-tag text-[0.45rem] sm:text-xs">🌟 Excellence</span>
        </div>
      </div>
    </div>
  );
};

export default About;