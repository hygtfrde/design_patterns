import React, { useRef, useEffect, useState } from "../../../pkgs/react";
import "./multi_grid_styles.css";

// Passing props as an object and using object destructuring

const MultiGrid = ({ rows, columns, gridContentJSX, moreClassNames, widthBreakPoint1, makeLink }) => {
  const gridItemRefs = useRef([]);
  const [activeRows, setActiveRows] = useState(rows);
  const [activeColumns, setActiveColumns] = useState(columns);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // define handler for resize of window inner width
    // add and remove resize event below
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth < parseInt(widthBreakPoint1)) {
        setActiveRows(columns);
        setActiveColumns(rows);
      } else {
        setActiveRows(rows);
        setActiveColumns(columns);
      }
    };

    // add
    window.addEventListener("resize", handleResize);

    // Set initial values based on window width
    // Allows first render to capture these variables
    // otherwise page load is required
    if (window.innerWidth < parseInt(widthBreakPoint1)) {
      setActiveRows(columns);
      setActiveColumns(rows);
    } else {
      setActiveRows(rows);
      setActiveColumns(columns);
    }

    return () => {
      // remove
      window.removeEventListener("resize", handleResize);
    };
  }, [rows, columns, widthBreakPoint1]);

  // Separate concern: 
  //      Setting active grid rows and columns from calculation in above useEffect
  useEffect(() => {
    gridItemRefs.current = Array(activeRows * activeColumns)
      .fill()
      .map((_, index) => gridItemRefs.current[index] || React.createRef());
  }, [activeRows, activeColumns]);

  // logic to generate grids
  const generateGridItems = () => {
    // init empty array to push into
    const gridItems = [];
    const loopSize = gridContentJSX.length || (activeRows * activeColumns);
    for (let i = 0; i < loopSize; i++) {
      const ref = useRef(null);
      // ref array
      // set the current ref index to a new child ref
      gridItemRefs.current[i] = ref;

      const content = gridContentJSX[i] || "";

      gridItems.push(
        <div className={`multi-grid-item ${moreClassNames}`} key={i} ref={ref}>
          {content}
        </div>
      );
    }
    return gridItems;
  };

  // console.log('makeLink => ', makeLink)

  return (
    <>
      {makeLink ?
        <div className="multi-grid-container">
          <div className="multi-grid" style={{ gridTemplateColumns: `repeat(${activeColumns}, 1fr)` }}>
            {generateGridItems()}
          </div>
        </div> : 
          <div className="multi-grid-container">
            <div className="multi-grid" style={{ gridTemplateColumns: `repeat(${activeColumns}, 1fr)` }}>
              {generateGridItems()}
            </div>
          </div>
        
      }
    </>

  );
};

export default MultiGrid;