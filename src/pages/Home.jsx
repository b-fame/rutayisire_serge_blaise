import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import StatCounter from '../components/StatCounter';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer | Full-Stack Developer | AI Enthusiast';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 lg:space-y-8">
      <SectionReveal>
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800/80 backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 p-6 sm:p-10 lg:flex-row lg:p-12">
            <div className="relative shrink-0">
              <div className="h-36 w-36 overflow-hidden rounded-full ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/10 sm:h-44 sm:w-44">
                <img
                  src="/images/profile.jpg"
                  alt={portfolio.personal.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-5xl font-bold text-white sm:text-6xl">B</div>';
                  }}
                />
              </div>
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-gray-800 bg-green-400" />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                {portfolio.personal.name}
              </h1>
              <p className="mt-2 h-6 text-gray-300 sm:text-lg">
                {typedText}
                <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-blue-400" />
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gray-700/50 px-3 py-1 text-sm text-gray-300">
                  <span className="text-base">🇷🇼</span> {portfolio.personal.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Available for opportunities
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-blue-500/40 hover:brightness-110"
                >
                  <i className="bi bi-folder2-open" /> View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-all duration-200 hover:border-blue-500 hover:text-blue-400"
                >
                  <i className="bi bi-envelope" /> Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {portfolio.stats.map((stat, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-gray-700/30 p-4">
                <StatCounter end={stat.value} label={stat.label} icon={stat.icon} />
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={200}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolio.skills.technical.map((skill, i) => (
              <SkillBadge key={i} name={skill.name} icon={skill.icon} />
            ))}
          </div>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-white">AI &amp; Prompt Engineering</h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.skills.ai.map((skill, i) => (
              <SkillBadge key={i} name={skill.name} icon={skill.icon} variant="purple" />
            ))}
          </div>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-white">Tools &amp; Software</h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.skills.tools.map((skill, i) => (
              <SkillBadge key={i} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              View All <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {portfolio.projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}

            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-600 bg-gray-800/40 p-10 text-center">
              <i className="bi bi-lightning-charge text-4xl text-gray-500" />
              <p className="mt-3 text-lg font-semibold text-gray-400">More Coming Soon</p>
              <p className="text-sm text-gray-500">New projects are in the works</p>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal delay={200}>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">What I Do</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {portfolio.services.map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/5 bg-gray-700/30 p-6 transition-all duration-300 hover:border-blue-500/20 hover:bg-gray-700/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <i className={`bi ${service.icon} text-xl`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  );
};

export default Home;
