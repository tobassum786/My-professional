//Grap items
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
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('open__model')) {
        toggleModelPopup();
        popupDetails(e.target.parentElement);
    }
})

function toggleModelPopup() {
    selectElement('.model').classList.toggle('open');
}

selectElement('.close_btn').addEventListener('click', toggleModelPopup);

function popupDetails(modelItems) {
    selectElement(".model__content").innerHTML = modelItems.querySelector(".service__card-detail").innerHTML;
}
///Intersection animation

///SwiperJs
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
});
