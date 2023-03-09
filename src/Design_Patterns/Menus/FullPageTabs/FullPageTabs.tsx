import React from "react";
import './full_page_tabs_styles.css'

const FullPageHeaders = () => {
    return (
        <div>
            <button className="tablink" onClick="openPage('Home', this, 'red')">Home</button>
            <button className="tablink" onClick="openPage('News', this, 'green')" id="defaultOpen">News</button>
            <button className="tablink" onClick="openPage('Contact', this, 'blue')">Contact</button>
            <button className="tablink" onClick="openPage('About', this, 'orange')">About</button>

            <div id="Home" className="tabcontent">
            <h3>Home</h3>
            <p>Home is where the heart is..</p>
            </div>

            <div id="News" className="tabcontent">
            <h3>News</h3>
            <p>Some news this fine day!</p> 
            </div>

            <div id="Contact" className="tabcontent">
            <h3>Contact</h3>
            <p>Get in touch, or swing by for a cup of coffee.</p>
            </div>

            <div id="About" className="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
            </div>
        </div>
    )
}

export default FullPageHeaders