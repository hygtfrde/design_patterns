import React, {useRef} from "react";
import './side_navigation_styles.css';

const SideNavigation = () => {
    const vanillaOpenNav = () => {
        const mySidenav = document.getElementById("mySidenav");
        if (mySidenav !== null) {
          mySidenav.style.width = "250px";
        }    
    }
    const vanillaCloseNav = () => {
        const mySidenav = document.getElementById("mySidenav");
        if (mySidenav !== null) {
          mySidenav.style.width = "0px";
        }    
    }
    const sideNav = useRef<HTMLDivElement>(null);
    const hotOpenNav = () => {
        if (sideNav.current !== null) {
            sideNav.current.style.width = "250px";
        }  
    }
    const hotCloseNav = () => {
        if (sideNav.current !== null) {
            sideNav.current.style.width = "0px";
        } 
    }
    return (
        <div>
            <div ref={sideNav} id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={()=>hotCloseNav()}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span style={{fontSize: '30px', cursor: 'pointer'}} onClick={()=>hotOpenNav()}>&#9776; open</span>
        </div>
    )
}

export default SideNavigation;