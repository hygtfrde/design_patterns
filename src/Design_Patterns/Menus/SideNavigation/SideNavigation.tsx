import React, {useRef, useEffect, useState} from "react";
import './side_navigation_styles.css';

const SideNavigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sideNav = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // const handleSideNavClick = (event: { stopPropagation: () => void; }) => {
        //     event.stopPropagation(); // Prevent the click event from bubbling up to the document
        // };

        // Add the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);
        // sideNav.current && sideNav.current.addEventListener('click', handleSideNavClick);

        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleClickOutside);
        //   sideNav.current && sideNav.current.removeEventListener('click', handleSideNavClick);
        };
    }, []); // Empty dependency array ensures the effect runs only once
    
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

    // Function to handle clicks outside of the element
    const handleClickOutside = (event: { stopPropagation: () => void, target: any }) => {
        console.log('sideNav.current:', sideNav.current?.contains(event.target));
        console.log('event.target:', event.target);
        if (sideNav.current && !sideNav.current.contains(event.target)) {
            if (!isOpen) {
                console.log('!isOpen RETURN ', !isOpen)
                return; // Early return if the sideNav is already closed
            }
            hotCloseNav();
        }
    };
    const hotOpenNav = () => {
        console.log('OPEN')
        setIsOpen(prevState => true);
    }
    const hotCloseNav = () => {
        console.log('CLOSE')
        setIsOpen(prevState => false);
    }
    return (
        <div>
            {
                isOpen && 
                <div ref={sideNav} id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={()=>hotCloseNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            }

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span style={{fontSize: '30px', cursor: 'pointer'}} onClick={()=>hotOpenNav()}>&#9776; open</span>
        </div>
    )
}

export default SideNavigation;