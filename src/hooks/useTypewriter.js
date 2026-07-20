import { useState, useEffect, useRef } from 'react';

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const tick = () => {
      const currentWord = words[indexRef.current];

      if (!isDeletingRef.current) {
        charRef.current++;
        setDisplayText(currentWord.slice(0, charRef.current));

        if (charRef.current === currentWord.length) {
          isDeletingRef.current = true;
          setIsTyping(false);
          timeoutRef.current = setTimeout(tick, pauseDuration);
          return;
        }
        timeoutRef.current = setTimeout(tick, typingSpeed);
      } else {
        charRef.current--;
        setDisplayText(currentWord.slice(0, charRef.current));

        if (charRef.current === 0) {
          isDeletingRef.current = false;
          setIsTyping(true);
          indexRef.current = (indexRef.current + 1) % words.length;
          timeoutRef.current = setTimeout(tick, typingSpeed);
          return;
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed);
      }
    };

    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping };
};

export default useTypewriter;
