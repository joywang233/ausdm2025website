// Create a new HTML document
const templateNavDoc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
templateNavDoc.documentElement.innerHTML = `
<template id="template-nav">
    <div class="navbar-toggle">
        <button type="button" id="nav-trigger">
            <i class="fa fa-bars"></i>
        </button>
    </div>

    <nav>
        <div class="nav-container">
            <ul id="navbar">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./Call for Papers.html">Call for Papers <i class="arrow down"></i> </a>
                    <ul class="submenu">
                        <li><a href="./Call for Papers.html">Call for Papers</a></li>
                        <li><a href="./Call for Doctoral Consortium.html">Call for Doctoral Consortium</a></li>
                        <li><a href="./Submissions.html">Submissions</a></li>
                        <!-- <li><a href="./Call for Tutorials and Workshops.html">Call for Tutorials and Workshops</a></li>
                        <li><a href="./Special Sessions.html">Special Sessions</a></li> -->
                    </ul>
                </li>
                <li><a href="./Organizing Committee.html">Committees <i class="arrow down"></i> </a>
                    <ul class="submenu">
                        <li><a href="./Organizing Committee.html">Organising Committee</a></li>
                        <!-- <li><a href="./Program Committee.html">Program Committee</a></li> -->
                    </ul>
                </li>
                <li><a href="./Venue.html">Attending <i class="arrow down"></i> </a>
                    <ul class="submenu">
                        <li><a href="./Venue.html">Venue</a></li>
                    </ul>
                </li>
                <!-- <li><a href="./Registration.html">Registration</a></li> -->
                <!-- <li><a href="./Sponsorship.html">Sponsorship</a></li> -->
                <!-- <li><a href="#programme">Gallery</a></li> -->
            </ul>
        </div>
    </nav>
</template>

                    </ul>
                </li>
                <!--<li><a href="./Registration.html">Registration</a></li>-->
                <!--<li><a href="./Sponsorship.html">Sponsorship</a></li>-->
                <!--<li><a href="#programme">Gallery</a></li>--!>
                <!-- Add additional navbar items here -->
            </ul>
        </div>
</template>
`;

const templateNavStyleContent = `


.navbar-toggle {
    top: 0;
    width: 100%;
    background: #00406ae4;
    height: 80px;
    position: fixed;
    display: None;
}

#nav-trigger {
    background: #002e4de4;
    color: #fff;
    border: none;
    padding: 0;
    margin: 15px;
    font: inherit;
    cursor: pointer;
    outline: none;
    width: 50px;
    font-size: 30px;
    position: absolute;
    right: 0;
}

#nav-trigger:hover, #nav-trigger.active {
    background-color: #237db9; /* Darker blue for hover/active state */
}

nav {
    background: #00406ae4; /* Standard blue for the navigation */
    text-align: center;
    position: fixed; /* Makes the nav bar fixed */
    top: 0; /* Aligns the nav bar to the top */
    width: 100%; /* Ensures the nav bar extends full width */
    z-index: 800; /* Ensures the nav bar stays on top of other elements */
    height: 150px;
}

.nav-container {
    width: 80%;
    margin: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
}

#navbar {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 20px;
}

#navbar li {
    display: inline-block;
    margin: auto;
    padding: 5px;
    color: #fff;
}

#navbar a {
    text-decoration: none;
    padding: 15px;
    display: inline-block;
    font-weight: 550;
}

#navbar a:hover, #navbar a.active {
    background-color: #022c48; /* Darker blue for hover/active state */
}

#navbar .location {
    color: #d6cd47;
}

#navbar .submenu {
    display: none;
    border-top: 3px solid #d6cd47;
    background-color: #022c48;
    position: absolute;
    flex-direction: column;
    width: 350px;
    height: auto;
    z-index: 1200;
    padding: 0px;
    transition: height 0.3s ease;
    
}

#navbar .submenu a:hover{
    background-color: #001d30;
}


#navbar li:hover .submenu, #navbar a:hover .submenu{
    display: flex;
}

/* Responsive adjustments */
@media screen and (max-width: 1300px) {
    .navbar-toggle {
        display: block;
        z-index: 1000; 
    }

    nav {
        height: 80px;
    }

    .nav-container {
        display:block;
        overflow:visible;
    }

    #navbar {
        /* Existing styles */
        display: none; /* Hide the navbar items initially */
        flex-direction: column;
        width: 100%;
        margin-top: 80px;
        background: #00406ae4;
        
        /* Add these new styles */
        max-height: calc(100vh - 80px); /* Adjust the maximum height */
        overflow-y: auto; /* Enable vertical scrolling */
    }

    #navbar li {
        display: block;
        width: 100%;
        margin: 0;
    }

    #navbar a {
        display: block;
        width: 100%;
        text-align: left;
    }

    #navbar .submenu {
        width: 400px;
        padding-left: 15px; /* Add some left padding to align with main items */
        position: relative;
        margin-left: 0; /* Reset any unwanted left margins */
    }

    #navbar .submenu li{
        width: 100%;
        padding: 0px;
    }

    #navbar .submenu a{
        width: 370px;
        padding: 15px;
    }
}

.title-container {
    display: flex; /* Use flexbox */
    justify-content: center; /* Horizontally center the child */
    align-items: center;
    height: 800px;
    background-size: cover; /* Adjusts the size of the background image to cover the entire container */
    background-position: center;
}

.title {
    text-align: center;
    margin: 100px auto;
    padding:  auto;
    color: #fff;
    width: 800px;
}

.title h1{
    text-transform: uppercase;
    font-size: 45px;
    text-shadow: 0.1em 0.1em 0.3em #000000;
    font-weight: bold;
    font-style: normal;
}

.title h3{
    margin: 20px;
    font-size: 30px;
    text-shadow: 0.1em 0.1em 0.3em #000000;
    font-weight: bold;
    font-style: normal;
}

.arrow {
    border: solid rgb(228, 220, 171);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: 1px 0px 2px 1px;
}

.right {
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
}

.left {
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
}

.up {
transform: rotate(-135deg);
-webkit-transform: rotate(-135deg);
}

.down {
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
}
`;

class TemplateNav extends HTMLElement {
    static get TAG_NAME() {
      return 'template-nav';
    };

    static observedAttributes = ["page-name"];

    constructor() {
      super();
    }


    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });
        const template = templateNavDoc.getElementById('template-nav');
        const content = template.content.cloneNode(true);
        
        this.shadow.appendChild(content);

        const style = document.createElement("style");
        style.textContent = templateNavStyleContent;
        this.shadow.appendChild(style);

        const linkElem1 = document.createElement("link");
        linkElem1.setAttribute("rel", "stylesheet");
        linkElem1.setAttribute("href", "https://www.w3schools.com/w3css/4/w3.css");
        this.shadow.appendChild(linkElem1);

        const linkElem2 = document.createElement("link");
        linkElem2.setAttribute("rel", "stylesheet");
        linkElem2.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        this.shadow.appendChild(linkElem2);

        var nav = this.shadow.getElementById('navbar');
        this.shadow.getElementById('nav-trigger').addEventListener('click', function () {
                if (nav.style.display === 'block') {
                    nav.style = '';
                } else {
                    nav.style.display = 'block';
                }
        });

        var navElements = this.shadow.getElementById('navbar').children;
        //console.log(navElements)
        for(var element of navElements){
            
            var title = element.textContent
            if(title.includes('\n')){
                title = title.split('\n')[0].toString().trim()
            }
 
            if(title == this.pageName){
                element.style.color = "#d6cd47";
                break;
            }
        }  
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.pageName =  newValue;

    }
}

customElements.define(TemplateNav.TAG_NAME, TemplateNav);