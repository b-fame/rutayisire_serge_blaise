// pages/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Car Wash Bay Payments 🚗',
      description: 'A full-stack application for managing car wash bay operations. Features include vehicle entry/exit, payment calculation based on size and package, session management, and daily/weekly/monthly report generation.',
      github: 'https://github.com/b-fame/car-wash-bay-payements',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      status: '✅ Public',
      statusColor: 'bg-green-900/40 text-green-300 border-green-700/50'
    },
    {
      title: 'Ride Nation 🚗',
      description: 'A ride-hailing platform connecting drivers and passengers. Built with modern web technologies for seamless ride booking and tracking.',
      github: 'https://github.com/b-fame/ride-nation',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      status: '🔒 Private',
      statusColor: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/50'
    },
    {
      title: 'School Management System 🏫',
      description: 'A full-stack web application for managing school departments, books, projects, and committees. Features include CRUD operations, search by tags, and role-based access.',
      github: 'https://github.com/b-fame/school-management-system-in-react-node-js-and-express-js',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
      status: '✅ Public',
      statusColor: 'bg-green-900/40 text-green-300 border-green-700/50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5">
        <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-200">
          <span>📁</span> My Projects
        </h1>
        <p className="text-gray-400 mt-2">Here are some of the projects I've worked on. Click on the links to explore the repositories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <span className={`text-xs px-3 py-1 rounded-full ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-300 text-sm mt-3 flex-1">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="skill-tag text-xs">{tech}</span>
              ))}
            </div>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors text-sm font-medium bg-[#1f2a3a] px-4 py-2 rounded-full w-fit border border-[#2d3a4f] hover:border-blue-400"
            >
              <span>🔗</span> View on GitHub
            </a>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl p-6 border border-white/5 mt-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-purple-200"><span>💡</span> More Coming Soon</h2>
        <p className="text-gray-400 text-sm">I'm constantly working on new projects. Stay tuned for more updates!</p>
      </div>
    </div>
  );
};

export default Projects;