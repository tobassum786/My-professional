//Grap items
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Something went wrong, please check ${element} typed correctly`)
};

<<<<<<< HEAD
<<<<<<< ours
//Grap items
const selectElementAll = selector => {
    const element = document.querySelectorAll(selector)
    if (element) return element;
    throw new Error(`Something went wrong, please check ${element} typed correctly`)
};

||||||| ancestor
=======

>>>>>>> theirs
=======
>>>>>>> 58c83cbba58fc53e225ec78c7cbdb0bc965ff873
//Responsive toggle menu
const menuToggleIcon = selectElement('#toggle-btn');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Close menu when menu links are clicked
<<<<<<< HEAD
const menuLinks = selectElementAll('.nav-links a');
=======
const menuLinks = document.querySelectorAll('.nav-links a');
>>>>>>> 58c83cbba58fc53e225ec78c7cbdb0bc965ff873
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = selectElement('#menu');
        const menuToggleIcon = selectElement('#toggle-btn');
        mobileMenu.classList.remove('active');
        menuToggleIcon.classList.remove('active');
    });
});

<<<<<<< HEAD
//Model popup
=======
////Model popup
>>>>>>> 58c83cbba58fc53e225ec78c7cbdb0bc965ff873

//FAQs sections
const faqBtn = selectElementAll('.faq__menu');

faqBtn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('show')
        toggle.classList.toggle('show')
    });
});
///Intersection animation
