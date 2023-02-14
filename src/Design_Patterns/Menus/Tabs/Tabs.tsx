import React from "react";
import './tabs_styles.css';

const Tabs = () => {
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    return (
        <div>
            <h2>Tabs</h2>
            <p>Click on the buttons inside the tabbed menu:</p>

            <div className="tab">
            <button className="tablinks" onclick="openCity(event, 'London')">London</button>
            <button className="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
            <button className="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
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
        </div>
    )
}

export default Tabs;