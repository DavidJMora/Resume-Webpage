const profileInfo = {
    signature: 'I just work here',
    name: 'DAVID MORA',
    traits: ['Flexible.', 'Quick Learner.', 'Bottomless Pit.', 'Magnet for Accidents.'],
    qualifications: ['Web Developer', 'Veteran', 'Brown Guy', 'PLayer 1', 'Perfect Height'],
    bio: "Once upon a time I got into a fight with my pet snake. Within seconds it was obvious I would succumb to its speed and versatility. Then I was given a stroke of luck and the Koolaid Man bursted through my wall and a piece of random debris knocked the snake out. I quickly tied it into a pretzel and laid claim to my domain. Afterwards, I made a business model on the supply and demand for pretzel fried snakes. Unfortunately none such market existed and so now I have begun my quest on manipulating the world's population into liking my food. Wish me luck.",
    profilePic: './images/profile.jpeg',
    footer: '&#169;Mora 2019. All rights reserved.',
}

const buttons = {
    home: 'HOME',
    resume: 'RESUME',
    portfolio: 'PORTFOLIO',
    contact: 'CONTACT',
}

window.onload = init;

function init() {
    document.querySelector('#home-text').innerText = buttons.home;
    document.querySelector('#resume-text').innerText = buttons.resume;
    document.querySelector('#portfolio-text').innerText = buttons.portfolio;
    document.querySelector('#contact-text').innerText = buttons.contact;


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



