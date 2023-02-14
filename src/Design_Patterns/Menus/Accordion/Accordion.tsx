import React from "react";
import { useRef } from "react";
import './accordion_styles.css';

const Accordion = () => {
    interface HTMLMouseEvent {
        target: any;

    }

    const clicky = (el: HTMLMouseEvent) => {;
        if (!el.target.nextElementSibling.style.display) {
            el.target.nextElementSibling.style.display = 'block';
        }
        else if (el.target.nextElementSibling.style.display == 'block') {
            el.target.nextElementSibling.style.display = '';
        }
    }

    return (
        <div className="accordion-container">
            <h2>Accordion</h2>

            <button className="accordion" onClick={clicky} >Section 1</button>
            <div className="panel">
                <p>CONTENT 1</p>
            </div>

            <button className="accordion" onClick={clicky} >Section 2</button>
            <div className="panel">
                <p>CONTENT 2</p>
            </div>

            <button className="accordion" onClick={clicky} >Section 3</button>
            <div className="panel">
                <p>CONTENT 3</p>
            </div>
        </div>
    )
};

export default Accordion;