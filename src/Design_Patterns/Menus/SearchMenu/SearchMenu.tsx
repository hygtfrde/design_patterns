import React, {useRef} from "react";
import './search_menu_styles.css';

const SearchMenu = () => {
    interface InputValue {
        value?: string;
    }
    const vanillaSearchFunction = () => {
        var input, filter: string|undefined, ul, li, a, i;
        input = document.getElementById("mySearch") as InputValue;
        filter = input?.value?.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul!.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (filter !== undefined && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
            } 
            else {
                li[i].style.display = "none";
            }
        }
    }
    const searchRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const hotSearchFunction = () => {

        let filter, ul, li, a, i;

        const inputValue = searchRef?.current?.value.toUpperCase();
        const liAnchors: any = menuRef?.current?.childNodes;
        const liCount = menuRef.current? menuRef.current.childElementCount : 0;
        for (i = 0; i < liCount; i++) {
            let anchorText = liAnchors[i].childNodes[0].textContent.toUpperCase();
            if (inputValue !== undefined && anchorText.indexOf(inputValue) > -1) {
                liAnchors[i].style.display = "block";
            } 
            else {
                liAnchors[i].style.display = "none";
            }
        }
    }
    return (
        <div>
            <h2>Search Menu</h2>
            <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>

            <div className="row">
            <div className="left" style={{backgroundColor: "#bbb"}}>
                <h2>Menu</h2>
                <button onClick={hotSearchFunction}>click</button>
                <input ref={searchRef} type="text" id="mySearch" onKeyUp={()=>hotSearchFunction()} placeholder="Search..." />
                <ul ref={menuRef} id="myMenu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">PHP</a></li>
                    <li><a href="#">Python</a></li>
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">SQL</a></li>
                    <li><a href="#">Bootstrap</a></li>
                    <li><a href="#">Node.js</a></li>
                </ul>
            </div>
            
            <div className="right" style={{backgroundColor: "#ddd"}}>
                <h2>Page Content</h2>
                <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
                <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
                <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
                <p>Some text..</p>
            </div>
            </div>
        </div>
    )

}

export default SearchMenu;