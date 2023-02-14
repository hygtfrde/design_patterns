import React from "react";
import { useRef } from "react";
import './accordion_styles.css';

const Accordion = () => {
    const elementRef = useRef<any>(null);
    const clickHandler = () => {
        if (elementRef.current && !elementRef.current.nextElementSibling.style.display) {
            elementRef.current.nextElementSibling.style.display = 'block';
        }
        else if (elementRef.current && elementRef.current.nextElementSibling.style.display == 'block') {
            elementRef.current.nextElementSibling.style.display = '';
        }
    }

    return (
        <div className="accordion-container">
            <h2>Accordion</h2>

            <button className="accordion" onClick={clickHandler} ref={elementRef}>Section 1</button>
            <div className="panel">
                <p>CONTENT 1</p>
            </div>

            <button className="accordion" onClick={clickHandler} ref={elementRef}>Section 2</button>
            <div className="panel">
                <p>CONTENT 2</p>
            </div>

            <button className="accordion" onClick={clickHandler} ref={elementRef}>Section 3</button>
            <div className="panel">
                <p>CONTENT 3</p>
            </div>
        </div>
    )
};

export default Accordion;