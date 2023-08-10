import React, { useRef } from "../../../pkgs/react";
import "./grid_styles.css";

const Grid = ({ height, width, gridContentJSX, children}) => {
    const gridRef = useRef([]);
  
    return (
      <div className="grid-container">
        <div className="grid" ref={gridRef} style={{height: height, width: width}}>
          {gridContentJSX}
          {children}
        </div>
      </div>
    );
  };

export default Grid;