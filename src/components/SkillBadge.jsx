const variants = {
  default: 'hover:border-gray-400 hover:bg-gray-600/50',
  blue: 'hover:border-blue-500 hover:bg-blue-500/10 text-blue-400',
  purple: 'hover:border-purple-500 hover:bg-purple-500/10 text-purple-400',
  green: 'hover:border-green-500 hover:bg-green-500/10 text-green-400',
};

const SkillBadge = ({ name, icon, variant = 'default' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-gray-700/80 px-3 py-1 text-sm text-gray-200 transition-all duration-200 hover:scale-110 ${variants[variant] || variants.default}`}
    >
      {icon && <i className={`${icon} text-base`} />}
      {name}
    </span>
  );
};

export default SkillBadge;
