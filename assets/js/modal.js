var getModal = document.querySelector('.js-modal');
var getModalCT = document.querySelector('.js-modal-container');
var getData = document.querySelectorAll('.place-buy-btn');
var getCloseBtn = document.querySelector('.js-modal-close');

// Duyet qua 
getData.forEach((item, index) => {

    item.addEventListener("click", () => {
        Open();
    });
});

getCloseBtn.addEventListener('click', () => {
    Close();
})

getModal.addEventListener('click', () => {
    Close();
});
getModalCT.addEventListener('click', (event) => {
    event.stopPropagation();
});

function Open() {
    getModal.classList.add('open');
}

function Close() {
    getModal.classList.remove('open');
}

