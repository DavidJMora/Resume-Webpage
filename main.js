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
    document.querySelector('#home-text').innerText = buttons.home;
    document.querySelector('#resume-text').innerText = buttons.resume;
    document.querySelector('#portfolio-text').innerText = buttons.portfolio;
    document.querySelector('#contact-text').innerText = buttons.contact;
}

function populateSideBar() {
    const header = document.createElement('h2');
    header.innerText = profileInfo.name;
    const name = document.querySelector('#sidebar-header');
    name.appendChild(header);

    const sidebarText = profileInfo.qualifications;
    sidebarText.forEach(function createLi(words) {
        const sidebar = document.createElement('li');
        sidebar.innerText = words;
        document.querySelector('.sidebar-list').appendChild(sidebar);
    });

    const footer = document.createElement('summary');
    footer.innerText = profileInfo.footer;
    const footer2 = document.querySelector('#sidebar-footer');
    footer2.appendChild(footer);
}

function populateMainText() {

}
