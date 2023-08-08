import React, { useState, useEffect } from 'react';
import './StickyScroller.css';
import Filler from '../../Constants/Filler';

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200;
      setIsSticky(scrollPosition >= maxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky-header ${isSticky ? 'sticky' : ''}`}>
      <h2>Sticky Scroller</h2>
    </header>
  );
};

export default StickyHeader;
