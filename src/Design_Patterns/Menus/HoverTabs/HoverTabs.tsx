import React from "react";
import './hover_tabs_styles.css';

const HoverTabs = () => {
    interface TabContent extends Element {
        style: CSSStyleDeclaration;
        length: number;
        [index: number]: HTMLElement
    }
    function openCity(cityName: string) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent") as unknown as TabContent;
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName)!.style.display = "block";
      }
    return (
        <div>
            <h2>Hover Tabs</h2>
            <p>Move the mouse over a button inside the tabbed menu:</p>

            <div className="tab">
                <button className="tablinks" onMouseOver={()=>openCity('London')}>London</button>
                <button className="tablinks" onMouseOver={()=>openCity('Paris')}>Paris</button>
                <button className="tablinks" onMouseOver={()=>openCity('Tokyo')}>Tokyo</button>
            </div>

            <div id="London" className="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>

            <div className="clearfix"></div>
        </div>
    )
}

export default HoverTabs;