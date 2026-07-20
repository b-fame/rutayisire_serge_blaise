import { useState, useEffect } from 'react';

const LoadingScreen = ({ loaded = false }) => {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (loaded) {
      const fadeTimer = setTimeout(() => setVisible(false), 300);
      const hideTimer = setTimeout(() => setHidden(true), 1000);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [loaded]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    const hideTimer = setTimeout(() => setHidden(true), 2200);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-white">
          <span className="text-blue-400">B</span>FAME
        </h1>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-700">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ${
              visible ? 'w-full' : 'w-0'
            }`}
          />
        </div>
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-600 border-t-blue-400" />
      </div>
    </div>
  );
};

export default LoadingScreen;
