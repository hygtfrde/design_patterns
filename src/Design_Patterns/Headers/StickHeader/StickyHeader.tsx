import React from 'react';
import './StickyHeader.css';
import Filler from './Filler';

const StickyHeader = () => {
  return (
    <>
        <header className="sticky-header">
        <h1>Sticky Header</h1>
        </header>
        <Filler/>
    </>
  );
};

export default StickyHeader;
