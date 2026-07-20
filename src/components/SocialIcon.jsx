const sizeClasses = {
  sm: 'h-9 w-9 text-sm',
  md: 'h-11 w-11 text-base',
  lg: 'h-14 w-14 text-xl',
};

const SocialIcon = ({ url, icon, label, size = 'md' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-xl border border-gray-600 bg-gray-800/80 text-gray-300 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 ${sizeClasses[size] || sizeClasses.md}`}
    >
      <i className={`${icon}`} />
    </a>
  );
};

export default SocialIcon;
