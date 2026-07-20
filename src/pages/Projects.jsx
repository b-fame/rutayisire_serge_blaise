import { useState } from 'react';
import portfolio from '../data/portfolio';
import SectionReveal from '../components/SectionReveal';
import ProjectCard from '../components/ProjectCard';

const filters = ['All', 'React', 'Node.js', 'Full Stack'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = portfolio.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    const techLower = project.tech.map((t) => t.toLowerCase());
    const filter = activeFilter.toLowerCase();
    if (filter === 'react') return techLower.some((t) => t.includes('react'));
    if (filter === 'node.js') return techLower.some((t) => t.includes('node') || t.includes('express'));
    if (filter === 'full stack') return techLower.length >= 3;
    return true;
  });

  return (
    <div className="space-y-6 lg:space-y-8">
      <SectionReveal>
        <section className="rounded-2xl border border-white/10 bg-gray-800/80 p-6 backdrop-blur-xl sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
            <i className="bi bi-folder-fill text-blue-400" /> My Projects
          </h1>
          <p className="mt-2 text-gray-400">
            A collection of projects I've built with passion and purpose.
          </p>
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'border border-gray-600 bg-gray-800/80 text-gray-300 hover:border-blue-500 hover:text-blue-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={200}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-gray-600 bg-gray-800/40 p-12 text-center">
              <i className="bi bi-search text-4xl text-gray-500" />
              <p className="mt-3 text-lg font-semibold text-gray-400">No projects found</p>
              <p className="text-sm text-gray-500">Try selecting a different filter.</p>
            </div>
          )}
        </div>
      </SectionReveal>

      <SectionReveal delay={100}>
        <div className="rounded-2xl border border-dashed border-gray-600 bg-gray-800/80 p-8 text-center backdrop-blur-xl">
          <i className="bi bi-lightbulb text-3xl text-yellow-400" />
          <h3 className="mt-3 text-lg font-bold text-white">More Projects Coming Soon</h3>
          <p className="mt-1 text-sm text-gray-400">
            I'm always working on new ideas and experiments. Stay tuned!
          </p>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Projects;
