const revealBtn = document.querySelector("#reveal__btn");
const hiddenContent = document.querySelector("#hidden__content");
const closeBtn = document.getElementsByClassName("close__btn");

function revealContent() {
    if(hiddenContent.classList.contains('active')) {
       hiddenContent.classList.remove('active')
       } else {
           hiddenContent.classList.add('active')
       }
}

revealBtn.addEventListener('click', revealContent)