var tag = document.querySelector('.mobile-menu-btn');
var headerId = document.querySelector('#header');
tag.onclick = () => {
    if(headerId.style.height == 'auto') {
        headerId.style.height = '46px';
    }
    else {
        headerId.style.height = 'auto';
    }
}

