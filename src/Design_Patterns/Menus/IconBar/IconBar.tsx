import React from "react";
import './icon_bar_styles.css';

const IconBar = () => {
    return (
        <div className="container">
            <h3>Icon Bar</h3>
            <div className="icon-bar">
                <a className="active" href="#"><i className="fa fa-home"></i></a> 
                <a href="#"><i className="fa fa-search"></i></a> 
                <a href="#"><i className="fa fa-envelope"></i></a> 
                <a href="#"><i className="fa fa-globe"></i></a>
                <a href="#"><i className="fa fa-trash"></i></a> 
            </div>
        </div>
    )
};

export default IconBar;