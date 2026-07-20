import SkillBadge from './SkillBadge';

const statusStyles = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  planned: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const ProjectCard = ({ project }) => {
  const { title, description, tech = [], github, demo, features = [], status, image, icon, iconColor, iconBg } = project;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-blue-500/5">
      {image ? (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      ) : (
        <div className={`flex h-48 w-full items-center justify-center bg-gradient-to-br ${iconBg || 'from-gray-700/50 to-gray-800/50'}`}>
          <i className={`bi ${icon || 'bi-code-slash'} text-6xl ${iconColor || 'text-gray-500'} transition-transform duration-300 group-hover:scale-110`} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {status && (
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[status] || statusStyles.completed}`}
            >
              {status}
            </span>
          )}
        </div>

        <p className="mb-4 text-gray-300">{description}</p>

        {features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <i className="bi bi-check2 text-green-400" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <SkillBadge key={i} name={t} variant="blue" />
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-2 text-sm text-gray-200 transition-all duration-200 hover:border-gray-500 hover:bg-gray-600/50"
            >
              <i className="bi bi-github" />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-400"
            >
              <i className="bi bi-box-arrow-up-right" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
