import React, {useRef, useEffect, useState} from "react";
import './side_navigation_styles.css';

const SideNavigation = () => {
    const sideNav: React.LegacyRef<HTMLDivElement> | undefined = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [countSideNav, setCountSideNav] = useState<number>(0);
    const [countIsOpen, setCountIsOpen] = useState<number>(0);

    useEffect(() => {
        console.log('countIsOpen ', countIsOpen)
        setCountIsOpen(countIsOpen+1)

        sideNav.current && sideNav.current.addEventListener('click', sideNavClick);

        return () => {
            sideNav.current && sideNav.current.removeEventListener('click', sideNavClick);
        };
    }, [isOpen]);

    useEffect(() => {
        console.log('countSideNav ', countSideNav)
        setCountSideNav(countSideNav+1)

        document.addEventListener('click', pageOutsideClick);
        return () => {
            document.removeEventListener('click', pageOutsideClick);
        };
    }, [sideNav.current])
    
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
    const sideNavClick = (event: { stopPropagation: () => void, target: any }) => {
        if (sideNav.current && sideNav.current.contains(event.target)) {
            console.log('MOCK NAV ANALYTICS INVOKED - clicked sideNav - ####')
        }
    };
    const pageOutsideClick = (event: MouseEvent) => {
        if (!isOpen) return;
        else if (sideNav.current && !sideNav.current.contains(event.target as Node)) {
            console.log('Clicked OUTSIDE of sideNav');
            hotCloseNav();
        }
    }
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