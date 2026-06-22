// pages/Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [age, setAge] = useState(0);
  const currentYear = new Date().getFullYear(); // Changed: removed setCurrentYear

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
    { name: 'Word', icon: '💻' },
    { name: 'Excel', icon: '📊' },
    { name: 'PowerPoint', icon: '📽️' },
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Figma', icon: '🎭' },
    { name: 'Sublime Text', icon: '📝' },
    { name: 'VSCode', icon: '⚡' },
    { name: 'Git Bash', icon: '🐙' },
    { name: 'XAMPP', icon: '⚙️' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Android Studio', icon: '📱' },
  ];

  // AI & Prompt Engineering Skills
  const aiSkills = [
    { name: 'Prompt Engineering', icon: '🎯' },
    { name: 'AI Integration', icon: '🤖' },
    { name: 'LLM Optimization', icon: '⚡' },
    { name: 'Context Management', icon: '🔄' },
    { name: 'API Integration', icon: '🔗' },
    { name: 'Response Engineering', icon: '📊' },
    { name: 'Chatbot Development', icon: '💬' },
    { name: 'AI Workflow Design', icon: '🧠' },
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
    <div className="space-y-8">
      {/* Professional Hero Section */}
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-1000"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-1000 delay-300"></div>
        
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="/images/profile.jpg" 
                alt="Serge Blaise Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-blue-500/30 shadow-2xl shadow-blue-500/10 hover:ring-blue-500/50 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl border-2 border-dashed border-blue-500/30">
                      <span>🧑‍💻</span>
                    </div>
                  `;
                }}
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-[#0c0f14] rounded-full"></span>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent tracking-tight animate-gradient">
                RUTAYISIRE SERGE BLAISE
              </h1>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                🚀 Available
              </span>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto md:mx-0 mb-4">
              Software Engineering Student · Full-Stack Developer · AI Enthusiast
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
              <span className="flex items-center gap-1 bg-[#1a2332]/50 px-3 py-1 rounded-full border border-[#2d3a4f]">
                <span>🇷🇼</span> Rwandan
              </span>
              <span className="flex items-center gap-1 bg-[#1a2332]/50 px-3 py-1 rounded-full border border-[#2d3a4f]">
                <span>🎂</span> {age} years
              </span>
              <span className="flex items-center gap-1 bg-[#1a2332]/50 px-3 py-1 rounded-full border border-[#2d3a4f]">
                <span>📞</span> (+250) 791642822
              </span>
              <a href="mailto:blaisefam5242@gmail.com" className="flex items-center gap-1 bg-[#1a2332]/50 px-3 py-1 rounded-full border border-[#2d3a4f] hover:border-blue-500/50 transition-all hover:text-blue-300">
                <span>✉️</span> Email
              </a>
            </div>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="relative mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-2xl border border-blue-500/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300">{programmingLanguages.length}</div>
            <div className="text-xs text-gray-500">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-300">{frameworks.length}</div>
            <div className="text-xs text-gray-500">Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">{aiSkills.length}</div>
            <div className="text-xs text-gray-500">AI Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">3</div>
            <div className="text-xs text-gray-500">Projects</div>
          </div>
        </div>

        {/* Certification */}
        <div className="relative mt-5 p-4 bg-blue-900/10 rounded-2xl border border-blue-500/10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="text-gray-400 flex items-center gap-2">
              <span className="text-lg">📜</span>
              <span className="italic">I certify that the information given is correct.</span>
            </span>
            <span className="text-blue-300 font-mono text-xs bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              RUTAYISIRE SERGE BLAISE
            </span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
        opacity: isVisible.education ? 1 : 0,
        transform: isVisible.education ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out'
      }}>
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-blue-200">
          <span className="text-3xl">🎓</span> Education Journey
          <span className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent"></span>
        </h2>
        <div className="space-y-4">
          {[
            { year: '2026 – 2030', school: 'University at ULK Kigali', program: 'Software Engineering', icon: '🏛️' },
            { year: '2023 – 2025', school: 'Lycee Saint Alexandre Sauli de Muhura', program: 'Software Development', icon: '📚' },
            { year: '2019 – 2022', school: 'Saint Matthews, Rusizi District', program: 'O-Level', icon: '📖' },
            { year: '2012 – 2018', school: 'EP Mururu, Rusizi', program: 'Primary Certificate', icon: '✏️' },
          ].map((edu, index) => (
            <div key={index} className="flex items-start gap-4 p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all duration-300 border border-transparent hover:border-blue-500/20">
              <span className="text-2xl mt-1">{edu.icon}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-medium text-white">{edu.year}</span>
                  <span className="text-blue-300">{edu.school}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{edu.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages and Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div id="languages" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.languages ? 1 : 0,
          transform: isVisible.languages ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-blue-200">
            <span className="text-3xl">🗣️</span> Languages
          </h2>
          <div className="space-y-4">
            {[
              { lang: 'English', flag: '🇬🇧', scores: [5, 5, 5, 5] },
              { lang: 'French', flag: '🇫🇷', scores: [2, 2, 2, 3] },
              { lang: 'Kinyarwanda', flag: '🇷🇼', scores: [5, 5, 5, 5] },
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-xl bg-[#1a2332]/30 hover:bg-[#1a2332]/60 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.flag}</span>
                  <span className="font-medium text-white flex-1">{item.lang}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {['Read', 'Speak', 'Write', 'Understand'].map((label, i) => (
                    <div key={i} className="text-center">
                      <div className="text-gray-500 mb-1">{label}</div>
                      <span className="lang-score hover:scale-110 transition-transform cursor-default">
                        {item.scores[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.skills ? 1 : 0,
          transform: isVisible.skills ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.8s ease-out 0.4s'
        }}>
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-blue-200">
            <span className="text-3xl">🛠️</span> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 cursor-default">
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-[#1a2332]/30">
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-2"><span>🤝</span> Team working</span>
              <span className="flex items-center gap-2"><span>💬</span> Communication</span>
              <span className="flex items-center gap-2"><span>⏳</span> Time management</span>
              <span className="flex items-center gap-2"><span>👥</span> Group management</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI & Prompt Engineering Skills Section */}
      <div id="ai-skills" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500 hover:border-purple-500/20" style={{
        opacity: isVisible['ai-skills'] ? 1 : 0,
        transform: isVisible['ai-skills'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 0.5s'
      }}>
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-purple-200">
          <span className="text-3xl">🤖</span> AI & Prompt Engineering
          <span className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></span>
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {aiSkills.map((skill, index) => (
            <span key={index} className="skill-tag hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
        <div className="mt-3 p-3 bg-[#1a2332]/30 rounded-xl border border-purple-500/10">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="text-purple-400">🧠</span> LLM Optimization
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">🔗</span> API Integration
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">💬</span> Chatbot Development
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">⚡</span> Prompt Design
            </span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400">📊</span> Response Engineering
            </span>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex gap-4">
          <span>🔥 Experienced with GPT, Claude, and other LLMs</span>
          <span>📚 Building AI-powered applications</span>
        </div>
      </div>

      {/* Programming & Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="programming" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.programming ? 1 : 0,
          transform: isVisible.programming ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-purple-200">
            <span className="text-3xl">💻</span> Programming Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {programmingLanguages.map((lang, index) => {
              const icons = {
                'Python': '🐍',
                'JavaScript': '🟡',
                'TypeScript': '🔷',
                'C++': '⚡',
                'Dart': '🎨',
                'SQL': '🗄️',
                'NoSQL': '📦',
                'HTML': '🌐',
                'CSS': '🎨',
                'PHP': '🐘'
              };
              return (
                <span key={index} className="skill-tag hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
                  {icons[lang] && <span className="mr-1">{icons[lang]}</span>}
                  {lang}
                </span>
              );
            })}
          </div>
        </div>

        <div id="frameworks" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
          opacity: isVisible.frameworks ? 1 : 0,
          transform: isVisible.frameworks ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out 0.8s'
        }}>
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-purple-200">
            <span className="text-3xl">🧩</span> Frameworks & Libraries
          </h2>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => {
              const icons = {
                'Express.js': '🚂',
                'Vue.js': '🟢',
                'Bootstrap': '🟣',
                'React': '⚛️',
                'Flutter': '📱',
                'Laravel': '🧩',
                'Tailwind CSS': '🎨',
                'Node.js': '🟢',
                'Next.js': '▲'
              };
              return (
                <span key={index} className="skill-tag hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
                  {icons[framework] && <span className="mr-1">{icons[framework]}</span>}
                  {framework}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Referees */}
      <div id="referees" className="animate-section glass-card rounded-2xl p-6 border border-white/5 transition-all duration-500" style={{
        opacity: isVisible.referees ? 1 : 0,
        transform: isVisible.referees ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out 1s'
      }}>
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-blue-200">
          <span className="text-3xl">📇</span> Referees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'TUYISENGE Ernest', role: 'Teacher', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+250782392783' },
            { name: 'UWIDUHAYE Olivier', role: 'Petron', institution: 'Lycée Saint Alexandre Sauli de Muhura', phone: '+25070652125' },
          ].map((ref, index) => (
            <div key={index} className="referee-cell hover:scale-105 transition-all duration-300 hover:border-l-4 hover:border-blue-400">
              <div className="font-medium text-white flex items-center gap-2">
                <span className="text-blue-400">{index + 1}.</span> {ref.name}
              </div>
              <div className="text-sm text-gray-400">{ref.institution} · {ref.role}</div>
              <div className="text-xs text-blue-300 mt-1 flex items-center gap-1">
                <span>📞</span> {ref.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;