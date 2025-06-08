//Grap items
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Something went wrong, please check ${element} typed correctly`)
};

//Responsive toggle menu
const menuToggleIcon = selectElement('#toggle-btn');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('active');
    menuToggleIcon.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Close menu when menu links are clicked
const menuLinks = document.querySelectorAll('.nav-links a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = selectElement('#menu');
        const menuToggleIcon = selectElement('#toggle-btn');
        mobileMenu.classList.remove('active');
        menuToggleIcon.classList.remove('active');
    });
});

////Model popup

//FAQs sections
const faqBtn = document.querySelectorAll('.faq__menu');

faqBtn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('show')
        toggle.classList.toggle('show')
    });
});
///Intersection animation
