
function toast({ title, message, type = '', duration = 3000 }) {
    var main = document.querySelector('.toast--container');
    if (main) {
        var toast = document.createElement('div');
        toast.classList.add('toast__card', 'active');
        toast.innerHTML = `
        ${type}
        <div class="toast__content">
            <p class="toast__title">${title}</p>
            <p>${message}</p>
        </div>
        <div class="toast__iconQuit">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        main.appendChild(toast);
        setTimeout(() =>{
            main.removeChild(toast);
        }, 7000);
    }
}



// var getToast = document.querySelector('.toast__warning');

function validate() {
    var quantity_input = document.myForm.quantity__modal.value;
    var email_input = document.myForm.email__modal.value;
    if (quantity_input == '') {
        showFailedToast('please type your quantity you need');
        return false;
    }
    else if (email_input == '') {
        showFailedToast('please type your email');
        return false;
    }
    else if (!input_format_validate(quantity_input, email_input)) {
        showFailedToast('please check your infomations again');
        return false;
    }
    else {
        showSuccessToast();
    }
}

function input_format_validate(quantity = '', email = '') {
    if (!isNaN(quantity) && email.includes('@')) {
        return true;
    }
    return false;
}

function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'Congratulation',
        type: `<div class="toast__iconStatus success__icon">
                <i class="fa-solid fa-check"></i>
                </div>`,
        duration: 3000
    });
}
function showFailedToast(string){
    toast({
        title: 'Failed',
        message: string,
        type: `<div class="toast__iconStatus warning__icon">
                    <i class="fa-solid fa-exclamation"></i>
                </div>`,
        duration: 3000
    });
}
