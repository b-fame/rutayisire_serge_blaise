// pages/Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date(2006, 8, 24);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Word', icon: 'bi-microsoft-word' },
    { name: 'Excel', icon: 'bi-microsoft-excel' },
    { name: 'PowerPoint', icon: 'bi-microsoft-powerpoint' },
    { name: 'Photoshop', icon: 'bi-brush' },
    { name: 'Figma', icon: 'bi-figma' },
    { name: 'Sublime Text', icon: 'bi-code-square' },
    { name: 'VSCode', icon: 'bi-file-code' },
    { name: 'Git Bash', icon: 'bi-git' },
    { name: 'XAMPP', icon: 'bi-database' },
    { name: 'MySQL', icon: 'bi-database' },
    { name: 'MongoDB', icon: 'bi-leaf' },
    { name: 'Android Studio', icon: 'bi-phone' },
  ];

  const aiSkills = [
    { name: 'Prompt Engineering', icon: 'bi-bullseye' },
    { name: 'AI Integration', icon: 'bi-robot' },
    { name: 'LLM Optimization', icon: 'bi-lightning' },
    { name: 'Context Management', icon: 'bi-arrow-repeat' },
    { name: 'API Integration', icon: 'bi-link-45deg' },
    { name: 'Response Engineering', icon: 'bi-bar-chart' },
    { name: 'Chatbot Development', icon: 'bi-chat-dots' },
    { name: 'AI Workflow Design', icon: 'bi-diagram-3' },
  ];

  const programmingLanguages = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 
    'Python', 'PHP', 'C++', 'Dart', 'SQL', 'NoSQL'
  ];

  const frameworks = [
    'Express.js', 'Vue.js', 'Bootstrap', 
    'React', 'Flutter', 'Laravel',
    'Tailwind CSS', 'Node.js', 'Next.js'
  ];

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
      {/* Hero Section */}
      <div className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 border border-white/5 relative overflow-hidden glow-pulse">
        <div className="absolute -top-20 sm:-top-24 -right-20 sm:-right-24 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 sm:-bottom-32 -left-24 sm:-left-32 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative flex flex-col items-center md:flex-row md:items-start gap-3 sm:gap-5 md:gap-8">
          <div className="flex-shrink-0 animate-bounce-slow">
            <div className="relative">
              <img 
                src="/images/profile.jpg" 
                alt="Serge Blaise Profile"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover ring-4 ring-blue-500/30 shadow-2xl shadow-blue-500/10 hover:ring-blue-500/50 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-3xl sm:text-5xl md:text-6xl border-2 border-dashed border-blue-500/30">
                      <i class="bi bi-person-fill text-blue-300"></i>
                    </div>
                  `;
                }}
              />
              <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-400 border-2 border-[#0c0f14] rounded-full"></span>
            </div>
            <p className="text-[0.4rem] sm:text-[0.55rem] md:text-[0.6rem] uppercase tracking-widest text-gray-500 mt-1 text-center">
              <i className="bi bi-camera me-1"></i>Me
            </p>
          </div>
          
          <div className="flex-1 text-center md:text-left w-full">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 sm:gap-3 mb-1">
              <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent tracking-tight animate-gradient leading-tight">
                RUTAYISIRE SERGE BLAISE
              </h1>
              <span className="text-[0.5rem] sm:text-xs bg-blue-500/20 text-blue-300 px-1.5 sm:px-3 py-0.5 rounded-full border border-blue-500/30 animate-pulse-slow">
                <i className="bi bi-rocket-takeoff me-1"></i>Available
              </span>
            </div>
            
            <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto md:mx-0 mb-1.5 sm:mb-4">
              <i className="bi bi-laptop me-1"></i>Software Engineering Student · Full-Stack Developer · AI Enthusiast
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 sm:gap-2 md:gap-3 text-[0.5rem] sm:text-xs md:text-sm">
              <span className="flex items-center gap-0.5 sm:gap-1 bg-[#1a2332]/50 px-1.5 sm:px-3 py-0.5 rounded-full border border-[#2d3a4f]">
                <i className="bi bi-flag-fill text-red-500"></i> Rwandan
              </span>
              <span className="flex items-center gap-0.5 sm:gap-1 bg-[#1a2332]/50 px-1.5 sm:px-3 py-0.5 rounded-full border border-[#2d3a4f]">
                <i className="bi bi-cake2"></i> {age}
              </span>
              <span className="flex items-center gap-0.5 sm:gap-1 bg-[#1a2332]/50 px-1.5 sm:px-3 py-0.5 rounded-full border border-[#2d3a4f]">
                <i className="bi bi-telephone-fill"></i> <span className="hidden xs:inline">(+250) </span>791642822
              </span>
              <a href="mailto:blaisefam5242@gmail.com" className="flex items-center gap-0.5 sm:gap-1 bg-[#1a2332]/50 px-1.5 sm:px-3 py-0.5 rounded-full border border-[#2d3a4f] hover:border-blue-500/50 transition-all hover:text-blue-300">
                <i className="bi bi-envelope-fill"></i> <span className="hidden xs:inline">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-3 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 p-2 sm:p-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl sm:rounded-2xl border border-blue-500/10">
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-2xl font-bold text-blue-300">{programmingLanguages.length}</div>
            <div className="text-[0.4rem] sm:text-xs text-gray-500">
              <i className="bi bi-code-square me-1"></i>Languages
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-2xl font-bold text-purple-300">{frameworks.length}</div>
            <div className="text-[0.4rem] sm:text-xs text-gray-500">
              <i className="bi bi-layers me-1"></i>Frameworks
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-2xl font-bold text-green-300">{aiSkills.length}</div>
            <div className="text-[0.4rem] sm:text-xs text-gray-500">
              <i className="bi bi-robot me-1"></i>AI Skills
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm sm:text-lg md:text-2xl font-bold text-yellow-300">3</div>
            <div className="text-[0.4rem] sm:text-xs text-gray-500">
              <i className="bi bi-folder2-open me-1"></i>Projects
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="relative mt-2 sm:mt-4 md:mt-5 p-1.5 sm:p-3 md:p-4 bg-blue-900/10 rounded-xl sm:rounded-2xl border border-blue-500/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-[0.5rem] sm:text-xs md:text-sm">
            <span className="text-gray-400 flex items-center gap-1 sm:gap-2">
              <i className="bi bi-pencil-square text-sm sm:text-lg"></i>
              <span className="italic text-center sm:text-left">I certify that the information given is correct.</span>
            </span>
            <span className="text-blue-300 font-mono text-[0.45rem] sm:text-xs bg-blue-500/10 px-1.5 sm:px-3 py-0.5 rounded-full border border-blue-500/20 text-center">
              RUTAYISIRE SERGE BLAISE
            </span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
        opacity: isVisible.education ? 1 : 0,
        transform: isVisible.education ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out'
      }}>
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-blue-200">
          <i className="bi bi-mortarboard-fill text-xl sm:text-3xl"></i> Education Journey
          <span className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent"></span>
        </h2>
        <div className="space-y-2 sm:space-y-4">
          {[
            { year: '2026 – 2030', school: 'University at ULK Kigali', program: 'Software Engineering', icon: 'bi-building' },
            { year: '2023 – 2025', school: 'Lycee Saint Alexandre Sauli de Muhura', program: 'Software Development', icon: 'bi-book' },
            { year: '2019 – 2022', school: 'Saint Matthews, Rusizi District', program: 'O-Level', icon: 'bi-journal-bookmark' },
            { year: '2012 – 2018', school: 'EP Mururu, Rusizi', program: 'Primary Certificate', icon: 'bi-pencil' },
          ].map((edu, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-4 p-1.5 sm:p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              <i className={`${edu.icon} text-lg sm:text-2xl mt-0.5 text-blue-300`}></i>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1 sm:gap-3">
                  <span className="font-medium text-white text-[0.6rem] sm:text-sm md:text-base">{edu.year}</span>
                  <span className="text-blue-300 text-[0.6rem] sm:text-sm md:text-base break-words">{edu.school}</span>
                </div>
                <p className="text-gray-400 text-[0.55rem] sm:text-xs md:text-sm mt-0.5">{edu.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages & Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        <div id="languages" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.languages ? 1 : 0,
          transform: isVisible.languages ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-blue-200">
            <i className="bi bi-chat-dots-fill text-xl sm:text-3xl"></i> Languages
          </h2>
          <div className="space-y-2 sm:space-y-4">
            {[
              { lang: 'English', flag: 'bi-flag-fill', scores: [5, 5, 5, 5] },
              { lang: 'French', flag: 'bi-flag-fill', scores: [2, 2, 2, 3] },
              { lang: 'Kinyarwanda', flag: 'bi-flag-fill', scores: [5, 5, 5, 5] },
            ].map((item, index) => (
              <div key={index} className="p-1.5 sm:p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all">
                <div className="flex items-center gap-1.5 sm:gap-3 mb-1 sm:mb-2">
                  <i className={`${item.flag} text-lg sm:text-2xl text-blue-400`}></i>
                  <span className="font-medium text-white flex-1 text-xs sm:text-sm md:text-base">{item.lang}</span>
                </div>
                <div className="grid grid-cols-4 gap-0.5 sm:gap-2 text-[0.45rem] sm:text-xs">
                  {['Read', 'Speak', 'Write', 'Understand'].map((label, i) => (
                    <div key={i} className="text-center">
                      <div className="text-gray-500 mb-0.5 text-[0.4rem] sm:text-xs">{label}</div>
                      <span className="lang-score hover:scale-110 transition-transform cursor-default text-xs sm:text-sm">
                        {item.scores[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.skills ? 1 : 0,
          transform: isVisible.skills ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.8s ease-out 0.4s'
        }}>
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-blue-200">
            <i className="bi bi-tools text-xl sm:text-3xl"></i> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag text-[0.45rem] sm:text-xs hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 cursor-default">
                <i className={`${skill.icon} me-0.5`}></i> {skill.name}
              </span>
            ))}
          </div>
          <div className="mt-2 sm:mt-4 p-1.5 sm:p-3 rounded-xl bg-[#1a2332]/30">
            <div className="flex flex-wrap gap-1 sm:gap-3 text-[0.55rem] sm:text-sm">
              <span className="flex items-center gap-0.5 sm:gap-2"><i className="bi bi-people-fill"></i> Team working</span>
              <span className="flex items-center gap-0.5 sm:gap-2"><i className="bi bi-chat-text-fill"></i> Communication</span>
              <span className="flex items-center gap-0.5 sm:gap-2"><i className="bi bi-clock-fill"></i> Time management</span>
              <span className="flex items-center gap-0.5 sm:gap-2"><i className="bi bi-person-workspace"></i> Group management</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Skills */}
      <div id="ai-skills" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500 hover:border-purple-500/20" style={{
        opacity: isVisible['ai-skills'] ? 1 : 0,
        transform: isVisible['ai-skills'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 0.5s'
      }}>
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-purple-200">
          <i className="bi bi-robot text-xl sm:text-3xl"></i> AI & Prompt Engineering
          <span className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></span>
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
          {aiSkills.map((skill, index) => (
            <span key={index} className="skill-tag text-[0.45rem] sm:text-xs hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
              <i className={`${skill.icon} me-0.5`}></i> {skill.name}
            </span>
          ))}
        </div>
        <div className="mt-1.5 sm:mt-3 p-1.5 sm:p-3 bg-[#1a2332]/30 rounded-xl border border-purple-500/10">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 text-[0.55rem] sm:text-xs md:text-sm text-gray-300">
            <span className="flex items-center gap-0.5 sm:gap-1"><i className="bi bi-cpu text-purple-400"></i> LLM Optimization</span>
            <span className="flex items-center gap-0.5 sm:gap-1"><i className="bi bi-link-45deg text-purple-400"></i> API Integration</span>
            <span className="flex items-center gap-0.5 sm:gap-1"><i className="bi bi-chat-dots text-purple-400"></i> Chatbots</span>
            <span className="flex items-center gap-0.5 sm:gap-1"><i className="bi bi-lightning text-purple-400"></i> Prompt Design</span>
            <span className="flex items-center gap-0.5 sm:gap-1"><i className="bi bi-bar-chart text-purple-400"></i> Response Eng.</span>
          </div>
        </div>
        <div className="mt-1 sm:mt-2 text-[0.4rem] sm:text-xs text-gray-500 flex flex-wrap gap-1 sm:gap-3">
          <span><i className="bi bi-fire me-1"></i>Experienced with GPT, Claude, and other LLMs</span>
          <span><i className="bi bi-book me-1"></i>Building AI-powered applications</span>
        </div>
      </div>

      {/* Programming & Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        <div id="programming" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.programming ? 1 : 0,
          transform: isVisible.programming ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-purple-200">
            <i className="bi bi-code text-xl sm:text-3xl"></i> Programming Languages
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {programmingLanguages.map((lang, index) => {
              const icons = {
                'Python': 'bi-filetype-py',
                'JavaScript': 'bi-filetype-js',
                'TypeScript': 'bi-filetype-ts',
                'C++': 'bi-filetype-cpp',
                'Dart': 'bi-filetype-dart',
                'SQL': 'bi-database',
                'NoSQL': 'bi-database-fill',
                'HTML': 'bi-filetype-html',
                'CSS': 'bi-filetype-css',
                'PHP': 'bi-filetype-php'
              };
              return (
                <span key={index} className="skill-tag text-[0.45rem] sm:text-xs hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
                  <i className={`${icons[lang] || 'bi-code'} me-0.5`}></i>
                  {lang}
                </span>
              );
            })}
          </div>
        </div>

        <div id="frameworks" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.frameworks ? 1 : 0,
          transform: isVisible.frameworks ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out 0.8s'
        }}>
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-purple-200">
            <i className="bi bi-grid-3x3-gap-fill text-xl sm:text-3xl"></i> Frameworks & Libraries
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {frameworks.map((framework, index) => (
              <span key={index} className="skill-tag text-[0.45rem] sm:text-xs hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
                <i className="bi bi-box me-0.5"></i>
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Referees */}
      <div id="referees" className="animate-section glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 border border-white/5 transition-all duration-500" style={{
        opacity: isVisible.referees ? 1 : 0,
        transform: isVisible.referees ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 1s'
      }}>
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-5 text-blue-200">
          <i className="bi bi-person-lines-fill text-xl sm:text-3xl"></i> Referees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {[
            { name: 'TUYISENGE Ernest', role: 'Teacher', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+250782392783' },
            { name: 'UWIDUHAYE Olivier', role: 'Patron', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+25070652125' },
          ].map((ref, index) => (
            <div key={index} className="referee-cell hover:scale-105 transition-all duration-300 hover:border-l-4 hover:border-blue-400 p-1.5 sm:p-3">
              <div className="font-medium text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                <span className="text-blue-400">{index + 1}.</span> {ref.name}
              </div>
              <div className="text-[0.5rem] sm:text-xs md:text-sm text-gray-400 break-words">{ref.institution} · {ref.role}</div>
              <div className="text-[0.45rem] sm:text-xs text-blue-300 mt-0.5 flex items-center gap-0.5 sm:gap-1">
                <i className="bi bi-telephone-fill"></i> {ref.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;