import React, { useState, useEffect } from 'react';
import './StickyScroller.css';

const StickyScroller2 = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const maximumScrollPoint = (document.documentElement.scrollHeight - window.innerHeight) / 8;
    setIsSticky(window.scrollY > maximumScrollPoint);
  };

  useEffect(() => {
    const scrollListener = () => handleScroll();

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className={`sticky-container ${isSticky ? 'sticky' : ''}`}>
      <div className="sticky-component">
        <h2>Sticky Scroll</h2>
      </div>
    </div>
  );
};

export default StickyScroller2;
