import React from "react";
import './search_menu_styles.css';

const SearchMenu = () => {
    interface InputValue {
        value?: string;
    }
    function searchFunction() {
        var input, filter: string|undefined, ul, li, a, i;
        input = document.getElementById("mySearch") as InputValue;
        filter = input?.value?.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul!.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (filter !== undefined && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } 
            else {
                li[i].style.display = "none";
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
                <input type="text" id="mySearch" onKeyUp={()=>searchFunction()} placeholder="Search.." title="Type in a category"/>
                <ul id="myMenu">
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