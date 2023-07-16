//Responsive toggle menu

////Model popup
document.addEventListener('click', (e)=> {
    if(e.target.classList.contains('service__btn')) {
        toggleModelPopup();
        popupDetails(e.target.parentElement);
    }
})

function toggleModelPopup() {
    document.querySelector('.model__wrapper').classList.toggle('open');
}

document.querySelector('.close__btn').addEventListener('click', toggleModelPopup);

function popupDetails(modelItems) {
    document.querySelector(".model__thumbnail img").src = modelItems.querySelector(".service__img").src;
    document.querySelector(".model__details").innerHTML = modelItems.querySelector(".service__detail").innerHTML;
}
///Intersection animation
