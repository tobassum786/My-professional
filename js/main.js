const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Something went wrong, please check ${element} typed correctly`)
};


//Responsive toggle menu
const menuToggleIcon = selectElement('#toggle__btn');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

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
// Light/Dark theme toggle
const themeToggleBtn = document.querySelectorAll('#theme__toggle__btn');
const body = document.body;

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    // toggle icon classes
    document.querySelectorAll('.dark__icon').forEach(icon => {
        icon.style.display = theme === 'dark' ? 'none' : 'inline-block';
    });
    document.querySelectorAll('.light__icon').forEach(icon => {
        icon.style.display = theme === 'dark' ? 'inline-block' : 'none';
    });
}

// Load theme from localStorage
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
})();

// Add event listeners to the toggle buttons
themeToggleBtn.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (body.classList.contains('dark')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});
