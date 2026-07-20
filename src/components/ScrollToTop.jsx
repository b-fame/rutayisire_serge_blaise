import { useState, useEffect } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

const ScrollToTop = () => {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 400);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-gray-800/80 text-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <i className="bi bi-arrow-up text-lg" />
    </button>
  );
};

export default ScrollToTop;
