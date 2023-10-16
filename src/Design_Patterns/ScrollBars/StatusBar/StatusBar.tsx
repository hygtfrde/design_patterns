import React, { useState, useEffect, useRef } from 'react';
import './StatusBar.css';

const StatusBar = () => {
    useEffect(() => {
        const updateScrollBar = () => {
          const scrollStatus = document.querySelector(".scroll-status");
          const scrollBar = document.querySelector(".scroll-bar") as HTMLElement;
    
          if (scrollStatus && scrollBar) {
            const windowHeight = window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollPercentage = (window.scrollY / pageHeight) * 100;
    
            scrollBar.style.height = scrollPercentage + "%";
          }
        };
    
        window.addEventListener("scroll", updateScrollBar);
    
        return () => {
          window.removeEventListener("scroll", updateScrollBar);
        };
      }, []);
    
    return (
        <div className='scroll-bar-container'>
            <div className="scroll-status">
                <div className="scroll-bar"></div>
            </div>
        </div>
    )

}

export default StatusBar