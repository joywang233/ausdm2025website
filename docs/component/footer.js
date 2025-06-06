// Create a new HTML document
const templateFooterDoc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
templateFooterDoc.documentElement.innerHTML = `
<template id='template-footer'>
    <footer>
            <div class="foot-container">
                <div id="foot-logo"> 
                    <img src="./media/AusDM-Logo.png" alt="AusDM-Logo">
                </div>
                <div id="contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:ausdmconference@gmail.com">ausdmconference@gmail.com</a></p>
                    <p>LinkedIn: <a href=" https://www.linkedin.com/groups/4907891/"> https://www.linkedin.com/groups/4907891/</a></p>
                    <!--<p>Facebook: <a href="https://www.facebook.com/ausdm24">https://www.facebook.com/ausdm24</a></p>
                    <p>Sigmoid Social: <a href="https://sigmoid.social/@ausdm24">https://sigmoid.social/@ausdm24</a></p>-->
                </div>
            </div> 

            <div class="foot-info">
                <div>
                    <a href='https://www.rmit.edu.au/about'>RMIT University</a> | 
                    <a href="https://www.rmit.edu.au/about/our-values/sustainability/sustainable-buildings/accessibility-on-campus">Accessibility</a> | 
                    <a href="https://policies.rmit.edu.au/document/view.php?id=23">Copyright</a> | 
                    <a href="https://www.rmit.edu.au/utilities/privacy">Privacy</a> | 
                    <a href="https://www.rmit.edu.au/utilities/terms">Terms</a>
                </div>
            </div>
            
    </footer>
</template>
`

const templateFooterStyleContent = `
footer {
    background-color: #ffffff;
    margin: auto;
    padding-top: 10px;
    border-top: 10px solid transparent;
    box-shadow: 0 -5px 5px 2px rgba(156, 156, 156, 0.5);
    width:100%;
}  

.foot-container {
    background-color: #ffffff;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 300px;

}

#foot-logo {
    display: block;
    margin: auto 30px;
    padding: 5px;
}

#contact {
    display: block;
    left: 0;
    margin: auto 30px;
    padding: 5px;
}

#contact h3{
    color: #00457d;
    font-weight: bold;
}

#contact p{
    color: #00457d;
    font-weight: bold;
    padding-top: 5px;
}

#contact a{
    color: #2c8ad7;
    font-weight: bold;
    text-decoration: none;
}

.foot-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 100%;
    color: #fff;
    margin-top: 10px;
    padding: auto;
    height: 30px;
    font-weight: bold;
}
.foot-info a{
    color: #fff;
    text-decoration: none;
}
`   


class TemplateFooter extends HTMLElement {
    static get TAG_NAME() {
      return 'template-footer';
    };

    constructor() {
      super();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });
        const template = templateFooterDoc.getElementById('template-footer');
        const content = template.content.cloneNode(true);
        
        this.shadow.appendChild(content);

        const style = document.createElement("style");
        style.textContent = templateFooterStyleContent;
        this.shadow.appendChild(style);
        
    }

}

customElements.define(TemplateFooter.TAG_NAME, TemplateFooter);