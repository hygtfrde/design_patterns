import React from "react";
import './full_page_tabs_styles.css'

const FullPageHeaders = () => {
    interface TabContent extends HTMLElement {
        style: any;
        length: number;
        [i: number]: any
    }
    function openPage(pageName: any, color: any) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent") as unknown as TabContent;
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink") as unknown as TabContent;
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName)!.style.display = "block";
      }
      
      // Get the element with id="defaultOpen" and click on it
    return (
        <div>
            <button className="tablink" onClick={()=>openPage('Home', 'red')}>Home</button>
            <button className="tablink" onClick={()=>openPage('News', 'green')} id="defaultOpen">News</button>
            <button className="tablink" onClick={()=>openPage('Contact', 'blue')}>Contact</button>
            <button className="tablink" onClick={()=>openPage('About', 'orange')}>About</button>

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