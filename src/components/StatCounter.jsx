import { useState, useEffect, useRef } from 'react';

const StatCounter = ({ end, label, icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      {icon && <i className={`${icon} text-3xl text-blue-400`} />}
      <span className="text-4xl font-bold text-white">{count}</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
};

export default StatCounter;
