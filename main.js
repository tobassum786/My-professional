//Responsive toggle menu

////Model popup
const revealBtn = document.querySelector('.card__body');
const hiddenContent = document.querySelector('#hidden__content');

revealBtn.onclick = function() {
    hiddenContent.style.display = "block";
}

const closeBtn = document.querySelector('.close__btn');

closeBtn.onclick = function() {
    hiddenContent.style.display = "none";
    return true;
}

///Intersection animation