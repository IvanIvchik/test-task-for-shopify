"use strict"

const colapsibleBtn = document.querySelector('.collapsible__button');
const colapsibleBtnVisible = document.querySelector('.collapsible__action--visible');
const colapsibleBtnHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');

let isVisible = true;
let isHidden = false;

colapsibleBtnHidden.style.display = 'none';

const hiddenCollapsibleContent = () => {
    colapsibleBtnVisible.style.display = 'none';
    collapsibleContent.style.display = 'none';
    colapsibleBtnHidden.style.display = 'inline';

    isVisible = false;
    isHidden = true;
}

const visibleCollapsibleContent = () => {
    colapsibleBtnVisible.style.display = 'inline';
    collapsibleContent.style.display = 'block';
    colapsibleBtnHidden.style.display = 'none';

    isVisible = true;
    isHidden = false;
}

const workCollapsible = () => {
    if (isVisible === true) {
        hiddenCollapsibleContent()
    } else visibleCollapsibleContent()
}

colapsibleBtn.addEventListener('click', workCollapsible)