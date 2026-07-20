import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-600 bg-gray-800/80 text-gray-300 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
    >
      <i className={`text-lg ${dark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}`} />
    </button>
  );
};

export default ThemeToggle;
