window.onload = init;

function init() {
    populateNavBar();
    populateSideBar();
    populateMainText();

    const home = document.querySelector('#home-button');
    home.addEventListener('click', homeNav);
    home.addEventListener('mouseover', hoverHome);
    
    const resume = document.querySelector('#resume-button');
    resume.addEventListener('click', resumeNav);
    resume.addEventListener('mouseover', hoverResume);
    
    const portfolio = document.querySelector('#portfolio-button');
    portfolio.addEventListener('click', portfolioNav);
    portfolio.addEventListener('mouseover', hoverPortfolio);
    
    const contact = document.querySelector('#contact-button');
    contact.addEventListener('click', contactNav);
    contact.addEventListener('mouseover', hoverContact);
}

function populateNavBar() {
    document.querySelector('#home-text').innerText = data.buttons.home;
    document.querySelector('#resume-text').innerText = data.buttons.resume;
    document.querySelector('#portfolio-text').innerText = data.buttons.portfolio;
    document.querySelector('#contact-text').innerText = data.buttons.contact;
}

function populateSideBar() {
    const header = document.createElement('h2');
    header.innerText = data.profileInfo.name;
    const name = document.querySelector('#sidebar-header');
    name.appendChild(header);

    const qualifications = data.profileInfo.qualifications;
    qualifications.forEach(function createLi(words) {
        const sidebarList = document.createElement('li');
        sidebarList.innerText = words;
        document.querySelector('.sidebar-list').appendChild(sidebarList);
    });

    const footer = document.createElement('summary');
    footer.innerText = data.profileInfo.footer;
    const footerInfo = document.querySelector('#sidebar-footer');
    footerInfo.appendChild(footer);
}

function populateMainText() {
    const traits = data.profileInfo.traits;
    traits.forEach(function createLi(words) {
        const mainBodyList = document.createElement('li');
        mainBodyList.innerText = words;
        document.querySelector('#main-list').appendChild(mainBodyList);
    });

    const bio = document.createElement('p');
    bio.innerText = data.profileInfo.bio;
    const bioInfo = document.querySelector('#about-me');
    bioInfo.appendChild(bio);

    const profilePic = document.createElement('img');
    profilePic.src = data.profileInfo.profilePic;
    const mainPic = document.querySelector('#profile-pic');
    mainPic.appendChild(profilePic);
}
