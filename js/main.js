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

// Random static icons in banner
const createStaticIcons = () => {
    const banner = document.querySelector('.banner');
    if (!banner) return;

    // Tech icons array (Bootstrap Icons)
    const techIcons = [
        'bi-code-slash',
        'bi-braces',
        'bi-bracket',
        'bi-chevron-double-right',
        'bi-chevron-double-left',
        'bi-arrow-right-circle',
        'bi-arrow-left-circle',
        'bi-star',
        'bi-heart',
        'bi-lightning',
        'bi-gear',
        'bi-cpu',
        'bi-motherboard',
        'bi-display',
        'bi-phone',
        'bi-tablet',
        'bi-laptop',
        'bi-wifi',
        'bi-bluetooth',
        'bi-usb-c',
        'bi-github',
        'bi-git',
        'bi-terminal',
        'bi-code-square',
        'bi-bug',
        'bi-shield-check',
        'bi-cloud',
        'bi-database',
        'bi-server',
        'bi-router',
        'bi-hdd-network',
        'bi-cpu-fill',
        'bi-memory',
        'bi-hdd-rack',
        'bi-ethernet',
        'bi-wifi-1',
        'bi-wifi-2',
        'bi-wifi-off',
        'bi-broadcast',
        'bi-satellite',
        'bi-globe',
        'bi-globe2',
        'bi-translate',
        'bi-translate2',
        'bi-browser-chrome',
        'bi-browser-edge',
        'bi-browser-firefox',
        'bi-browser-safari'
    ];

    // Create static icons container
    const staticContainer = document.createElement('div');
    staticContainer.className = 'static-icons-container';
    banner.appendChild(staticContainer);

    // Create 15-20 static icons
    const numberOfIcons = 15 + Math.floor(Math.random() * 6); // 15-20 icons

    for (let i = 0; i < numberOfIcons; i++) {
        const icon = document.createElement('i');
        const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
        icon.className = `static-icon bi ${randomIcon}`;
        
        // Random position (avoid center area for content)
        let x, y;
        do {
            x = Math.random() * 100;
            y = Math.random() * 100;
        } while (
            (x > 35 && x < 65 && y > 35 && y < 65) // Avoid center area
        );
        
        // Random size
        const size = 0.6 + Math.random() * 1.2; // 0.6rem to 1.8rem
        
        // Random opacity
        const opacity = 0.05 + Math.random() * 0.15; // 0.05 to 0.2
        
        // Random colors for variety
        const colors = [
            '#FE78F0',
            '#5D5FEF',
            '#39F0F0',
            '#3052CA',
            '#8F22BA',
            '#FF6B6B',
            '#4ECDC4',
            '#45B7D1',
            '#96CEB4',
            '#FFD93D',
            '#6BCF7F',
            '#4D96FF'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random rotation
        const rotation = Math.random() * 360;
        
        icon.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            font-size: ${size}rem;
            opacity: ${opacity};
            color: ${randomColor};
            pointer-events: none;
            z-index: 1;
            transform: rotate(${rotation}deg);
            transition: all 0.3s ease;
        `;
        
        staticContainer.appendChild(icon);
    }
};

// Initialize static icons when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure banner is fully loaded
    setTimeout(() => {
        createStaticIcons();
    }, 500);
    
    // Optional: Add keyboard shortcut to toggle static icons (Ctrl + I)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'i') {
            const container = document.querySelector('.static-icons-container');
            if (container) {
                container.style.display = container.style.display === 'none' ? 'block' : 'none';
            }
        }
    });
});
