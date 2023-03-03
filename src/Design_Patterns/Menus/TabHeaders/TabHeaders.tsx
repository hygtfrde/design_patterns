import React, {useState} from "react";
import './tab_headers_styles.css'

const TabHeaders = () => {
    interface TabContent extends HTMLElement {
        style: any;
        length: number;
        [i: number]: any
    }
    const [activeIndex, setActiveIndex] = useState<string|number>('');
    
    const openTab = (idx: string|number) => {
        setActiveIndex(idx);
    }

    const items = ['London', 'Paris', 'Tokyo', 'Oslo'];

    return (
        <div>
            <p>Click on the buttons inside the tabbed menu: </p>

            <div className="container">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`tabLink ${activeIndex === index ? 'tabContent' : ''}`}
                        onClick={() => openTab(index)}
                        id={items[index]}
                    >
                        {item}
                    </div>
                ))}
            </div>
    
        </div>
    );
        
    
}

export default TabHeaders;