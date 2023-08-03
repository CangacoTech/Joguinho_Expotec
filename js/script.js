const container = document.querySelector('.question-container');
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');

const popup = document.querySelector('.popup-container');
const buttonClose = document.querySelector('.btn-close');

let canClickNo = true; // controle para habilitar/desabilitar a função do botão 'no'

buttonYes.addEventListener('click', () => {
    popup.classList.add('active')
    container.classList.add('blur')
    canClickNo = false;
})

function generatingPosition(min, max){
    return (Math.random() * (max - min) + min) + "%";
}

buttonNo.addEventListener('mouseover', () =>{
    if (canClickNo){
        buttonNo.style.position = "absolute";
        buttonNo.style.bottom = generatingPosition(10, 90);
        buttonNo.style.left = generatingPosition(10, 90);
    }
})

buttonClose.addEventListener('click', () => {
    popup.classList.remove('active')
    canClickNo = true;
    window.location.reload() // recarregar página
})


