// Create a new HTML document
const templateAsideDoc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
templateAsideDoc.documentElement.innerHTML = `
<template id="template-aside">
    <aside>
        <div id="countdown">
            <h4>Days until Conference</h4>
            <div id="timer">
                <div><p><span id="days"> 000 </span></p> <p>Day</p></div> 
                <div><p><span>:</span></p><p>-</p></div>
                <div><p><span id="hours"> 00 </span> </p> <p>Hrs</p></div>
                <div><p><span>:</span></p><p>-</p></div> 
                <div><p><span id="minutes"> 00 </span> </p> <p>Min</p></div>
                <div><p><span>:</span></p><p>-</p></div> 
                <div><p><span id="seconds"> 00 </span> </p> <p>Sec</p> </div>
            </div>
        </div>

        <div id="Keydates">
            <h4>Important Dates (AoE 11.59pm)</h4>
            <ul>
              <li>Abstract Submission: <span style="text-decoration: line-through;">3 Aug 25</span> 10 Aug 25</li>
                <li>Paper submission: 10 Aug 25</li>
                <li>Paper notiﬁcation: 7 Sept 25 </li>
                <li>Camera-ready: 21 Sept 25 </li>
                <!--<li>Tutorial/Workshop submission: 18 Aug 24</li>
                <li>Tutorial/Workshop notiﬁcation: 15 Sept 24</li>
                <li>Doctoral Consortium Submission: 1 Sept 24</li>
                <li>Doctoral Consortium Notification: 29 Sept 24</li>--!>
                <li>Author Registration: 21 Sept 25</li>
            </ul>
        </div>
    </aside>
</template>
`;

const templateAsideStyleContent = `
        aside {
            display: block;
            line-height: 1.6;
            margin: auto 5px;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #fff;
            padding-top: 10px;
            width: max-content;
        }
        
        #countdown {
            width:240px;
            text-align: center;
            background-color: #056eb4;
            color: #fff;
            padding: 20px;
            margin-top: 20px;
            font-weight: bold;
        }

        #countdown h4{
            margin: 10px 0px;
        }
        
        #timer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100px;
        }
        
        #timer div {
            display: inline-block;
            font-size: 15px;
            margin: 5px;
        }
        
        #timer span {
            font-size: 20px;
        }
        
        #Keydates {
            margin: 50px 0px;
            text-align: left;
        }

        #Keydates ul{
            padding: 0;
        }
        
        #Keydates h4{
            color: #002d4b;
            font-weight: bold;
        }
        
        #Keydates li{
            list-style-type: none;
            font-size: smaller;
            font-weight: bold;
        }
        
        /* Responsive adjustments */
        @media screen and (max-width: 1300px) {
            aside {
                display: none;
            }
        }
        `   
    


class TemplateAside extends HTMLElement {
    static get TAG_NAME() {
      return 'template-aside';
    };

    constructor() {
      super();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });
        const template = templateAsideDoc.getElementById('template-aside');
        const content = template.content.cloneNode(true);
        
        this.shadow.appendChild(content);

        const style = document.createElement("style");
        style.textContent = templateAsideStyleContent;
        this.shadow.appendChild(style);
        
        //this.shadow.getElementById("timer").innerHTML = "Our conference has started!";
        setInterval(this.updateCountdown.bind(this), 1000);
    }

    updateCountdown() {
        
        const countdownDate = new Date("Nov 26, 2025 23:59:59").getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    
        this.shadow.getElementById("days").innerText = days;
        this.shadow.getElementById("hours").innerText = hours;
        this.shadow.getElementById("minutes").innerText = minutes;
        this.shadow.getElementById("seconds").innerText = seconds;
    
        if (distance < 0) {
            clearInterval(interval);
            this.shadow.getElementById("timer").innerHTML = "Our conference has started!";
        }
    }


}

customElements.define(TemplateAside.TAG_NAME, TemplateAside);


  