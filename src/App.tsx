import React from 'react';
import './App.css';
import Filler from 'Design_Patterns/Constants/Filler';
import Filler2 from 'Design_Patterns/Constants/Filler2';

import Pattern from './Design_Patterns/Headers/StickyScroller/StickyScroller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Design Patterns</h1>
      </header>
      
      <Pattern/>
      {[...Array(1000)].map((i) => {
        return <Filler2 key={i}/>
      })}
    </div>
  );
}

export default App;
