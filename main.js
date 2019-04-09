window.onload = init;

function init() {
    populateNavBar();
    populateSideBar();

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

}

