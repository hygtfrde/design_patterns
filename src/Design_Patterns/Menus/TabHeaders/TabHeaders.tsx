import React, {useRef} from "react";
import './tab_headers_styles.css'

const TabHeaders = () => {
    interface TabContent extends HTMLElement {
        style: any;
        length: number;
        [i: number]: any
    }
    
    const openTab = (e: any) => {

    }
    return (
        <div className="container">
            <p>Click on the buttons inside the tabbed menu:</p>

            <div id="London" className="tabcontent">
                <h1>London</h1>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabcontent">
                <h1>Paris</h1>
                <p>Paris is the capital of France.</p> 
            </div>

            <div id="Tokyo" className="tabcontent">
                <h1>Tokyo</h1>
                <p>Tokyo is the capital of Japan.</p>
            </div>

            <div id="Oslo" className="tabcontent">
                <h1>Oslo</h1>
                <p>Oslo is the capital of Norway.</p>
            </div>

            <button className="tablink" onClick={()=>openTab('London')} id="defaultOpen">London</button>
            <button className="tablink" onClick={()=>openTab('Paris')}>Paris</button>
            <button className="tablink" onClick={()=>openTab('Tokyo')}>Tokyo</button>
            <button className="tablink" onClick={()=>openTab('Oslo')}>Oslo</button>
        </div>
    )
}

export default TabHeaders;