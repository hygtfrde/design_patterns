import React, { useState, useEffect, useRef } from 'react';
import './StickyScroller.css';

const StickyHeader = () => {
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [reinsertPosition, setReinsertPosition] = useState(null);
  const [resetOriginalPosition, setResetOriginalPosition] = useState(false);

  const handleScroll = () => {
    const rect = stickyRef.current.getBoundingClientRect();
    const maximumScrollPoint = (document.documentElement.scrollHeight - window.innerHeight) / 8;

    if (isSticky) {
      if (window.scrollY <= maximumScrollPoint) {
        setResetOriginalPosition(true);
        setReinsertPosition(null);
      } else if (window.scrollY > maximumScrollPoint && !reinsertPosition) {
        setReinsertPosition(window.scrollY);
        setResetOriginalPosition(false);
      }
    } else {
      setResetOriginalPosition(false);
    }

    setIsSticky(rect.top <= 0 && window.scrollY <= maximumScrollPoint);
  };

  useEffect(() => {
    const scrollListener = () => handleScroll();

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSticky, reinsertPosition, resetOriginalPosition]);

  useEffect(() => {
    if (resetOriginalPosition) {
      stickyRef.current.style.position = 'initial';
      stickyRef.current.style.top = 'initial';
    } else if (reinsertPosition !== null) {
      const newPosition = reinsertPosition - (window.innerHeight / 2);
      stickyRef.current.style.position = 'relative';
      stickyRef.current.style.top = `${newPosition}px`;
    }
  }, [reinsertPosition, resetOriginalPosition]);

  return (
    <div className={`sticky-container ${isSticky ? 'sticky' : ''}`}>
      <div ref={stickyRef} className="sticky-component">
        <h2>Sticky Scroll</h2>
      </div>
    </div>
  );
};

export default StickyHeader;
