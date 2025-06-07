// Create a new HTML document
const templateOrganizationItemDoc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
templateOrganizationItemDoc.documentElement.innerHTML = `
<template id='template-organization-item'>
    <div class="organization-item">
        <div class="organization-item-profile"> 
            <img profile src="">    
        </div>
        <h3 name>
            Name
        </h3>
        <p info>
            Info
        </p>
    </div>
</template>
`

const templateOrganizationItemStyleContent = `
.organization-item {
    display: block;
    text-align: center;
    width: 200px;
}

.organization-item-profile{
    margin: auto;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
    
}

.organization-item-profile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.organization-item h3{
    color: #00406ae4;
    margin: 5px auto;
}

.organization-item p{
    color: #666;
    margin: 5px auto;
}
`   

class TemplateOrganizationItem extends HTMLElement {
    static get TAG_NAME() {
      return 'template-organization-item';
    };

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = templateOrganizationItemDoc.getElementById('template-organization-item');
        const content = template.content.cloneNode(true);
        
        this.shadow.appendChild(content);

        const style = document.createElement("style");
        style.textContent = templateOrganizationItemStyleContent;
        this.shadow.appendChild(style);

        //this.setInfo.bind(this);
    }

    setInfo(profileSrc, name, info) {
        const profileImg = this.shadow.querySelector('[profile]');
        const nameElem = this.shadow.querySelector('[name]');
        const infoElem = this.shadow.querySelector('[info]');

        profileImg.src = profileSrc;
        nameElem.innerHTML = name;
        infoElem.innerHTML = info;
    }

}

customElements.define(TemplateOrganizationItem.TAG_NAME, TemplateOrganizationItem);


// Create a new HTML document
const templateOrganizationGroupDoc = document.implementation.createHTMLDocument();

// Set the HTML content of the document
templateOrganizationGroupDoc.documentElement.innerHTML = `
<template id='template-organization-group'>
    <div class="organization-group">
        <h2 group-name></h2>
        <hr/>
        <div group class="organization-group-body">
        </div>
    </div>
</template>
`

const templateOrganizationGroupStyleContent = `
.organization-group h2{
    color: #00406ae4;
}


.organization-group-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px); /* Adjust 200px to your preferred size */
    grid-gap: 20px; /* Adjust the gap between items */
    width: 90%;
    margin: 20px 10px;
    align-items: left;
}
`   

class TemplateOrganizationGroup extends HTMLElement {
    static get TAG_NAME() {
      return 'template-organization-group';
    };

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = templateOrganizationGroupDoc.getElementById('template-organization-group');
        const content = template.content.cloneNode(true);
        
        this.shadow.appendChild(content);

        const style = document.createElement("style");
        style.textContent = templateOrganizationGroupStyleContent;
        this.shadow.appendChild(style);

    }

    setInfo(rootPath, groupName,groupItems) {
        
        const groupElem = this.shadow.querySelector('[group]');
        const groupNameElem = this.shadow.querySelector('[group-name]');
        
        groupNameElem.textContent = groupName;
        groupItems.forEach(item => {
        const name = item[0];
        const affiliation = item[1];
        const imageFile = item[2] ?? null;  // optional 3rd field

        const organizationItem = document.createElement('template-organization-item');
        groupElem.appendChild(organizationItem);

        const srcPath = rootPath + (imageFile ?? "default.jpg");
        organizationItem.setInfo(srcPath, name, affiliation);
    });
    }

}

customElements.define(TemplateOrganizationGroup.TAG_NAME, TemplateOrganizationGroup);


function initializeOrganization(document,rootPath,jsonData){

    //const data = JSON.parse(jsonString);
    const data = jsonData

    const organizationContainer = document.getElementById('organization-container');

    data.forEach(groupData => {
        const groupName = groupData.groupName;
        const groupItems = groupData.groupItems;

        const organizationGroup = document.createElement('template-organization-group');
        organizationContainer.appendChild(organizationGroup);
        organizationGroup.setInfo(rootPath, groupName, groupItems);

    });
    
}
       




