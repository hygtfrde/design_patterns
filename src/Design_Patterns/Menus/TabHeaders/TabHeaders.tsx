import React, {useState} from "react";
import './tab_headers_styles.css'

const TabHeaders = () => {
    interface TabContent extends HTMLElement {
        style: any;
        length: number;
        [i: number]: any
    }
    const [isActive, setIsActive] = useState(false);
    
    const openTab = (idx: string) => {
        setIsActive(!isActive);
    }
    return (
        <div className="container">

            

            <p>Click on the buttons inside the tabbed menu:</p>

            <div id="London" className="tabContent">
                <h1>London</h1>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabContent">
                <h1>Paris</h1>
                <p>Paris is the capital of France.</p> 
            </div>

            <div id="Tokyo" className="tabContent">
                <h1>Tokyo</h1>
                <p>Tokyo is the capital of Japan.</p>
            </div>

            <div id="Oslo" className="tabContent">
                <h1>Oslo</h1>
                <p>Oslo is the capital of Norway.</p>
            </div>

            <button className={`tabLink ${isActive ? 'tabContent' : ''}`} onClick={()=>openTab('London')} id="London">London</button>
            <button className="tabLink" onClick={()=>openTab('Paris')} id="Paris">Paris</button>
            <button className="tabLink" onClick={()=>openTab('Tokyo')} id="Tokyo">Tokyo</button>
            <button className="tabLink" onClick={()=>openTab('Oslo')} id="Oslo">Oslo</button>
        </div>
    )
}

export default TabHeaders;