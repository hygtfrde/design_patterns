import React, { useState, useEffect, useRef } from 'react';
import './StickyScroller.css';

const StickyHeader = () => {
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const debounceTimerRef = useRef(null);

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;


  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      const maximumScrollPoint = (document.documentElement.scrollHeight - window.innerHeight) / 4;
      setIsSticky(rect.top <= 0 && window.scrollY <= maximumScrollPoint);
      localStorage.setItem('scrollPosition', window.scrollY);
    }
  };

  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');

    if (savedScrollPosition !== null) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }
    
    const scrollListener = () => handleScroll(); // Using the memoized handleScroll function

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(debounceTimerRef.current);
    };
  }, []); // No dependencies needed here

  return (
    <div className={`sticky-container ${isSticky ? 'sticky' : ''}`}>
      <div ref={stickyRef} className="sticky-component">
        <h2>Sticky Scroll</h2>
      </div>
    </div>
  );
};

export default StickyHeader;
