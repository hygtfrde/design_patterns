import React, {useRef, useEffect} from 'react';
import './App.css';
import Filler from './Design_Patterns/Constants/Filler';
import Filler2 from './Design_Patterns/Constants/Filler2';
import Filler3 from './Design_Patterns/Constants/Filler3';

import Pattern from './Design_Patterns/Headers/StickyScroller/StickyScroller2';

function App() {
  const elementsRef = useRef([] as any);

  useEffect(() => {
    const generateElements = () => {
      const elements = [];
      for (let i = 0; i < 1000; i++) {
        elements.push(
          <Filler3 />
        );
      }
      elementsRef.current = elements;
    };
    generateElements();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Design Patterns</h1>
      </header>
      

      <div className='filler-cont'>
        {[...Array(5)].map((i) => {
          return <Filler3 key={i}/>
        })}
      </div>

      <Pattern/>

      <div className='filler-cont'>
        {[...Array(20)].map((i) => {
          return <Filler3 key={i}/>
        })}
      </div>

    </div>
  );
}



export default App;
