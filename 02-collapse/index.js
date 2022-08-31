"use strict"
const collapsible = document.querySelector('.collapsible')
const collapsibleBtn = document.querySelector('.collapsible__button');
const collapsibleBtnVisible = document.querySelector('.collapsible__action--visible');
const collapsibleBtnHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');

let isVisible = true;
let isHidden = false;

collapsibleBtnHidden.style.display = 'none';
collapsible.style.overflow = 'hidden';

let animateShowContent = [
    { transform: 'scale(0)' },
    { color: 'red', offset: 0.6 },
    { transform: 'scale(1)', color: 'black' }

];

let animateHideContent = [
    { transform: 'scale(1)'},
    { color: 'red', offset: 0.4 },
    { transform: 'scale(0)', color: 'black' }

];

let animateClickBtn = [
    { transform: 'scale(0.9)'},
    { color: 'red' ,offset: 0.4 },
    { transform: 'scale(1)', color: 'black'}
]

let animateTiming = {
    duration: 1000,

};

const hideContent =() => {
    collapsibleContent.style.display = 'none';
}

const animationCollapsible = (actionWithContent) => {
    collapsibleContent.animate(
        actionWithContent,
        animateTiming
    );

    collapsibleBtn.animate(
        animateClickBtn,
        animateTiming
    )
}

const hideCollapsibleContent = () => {
    animationCollapsible(animateHideContent);
    setTimeout(hideContent, 900);
    collapsibleBtnVisible.style.display = 'none';
    collapsibleBtnHidden.style.display = 'inline';

    isVisible = false;
    isHidden = true;
}

const showCollapsibleContent = () => {
    animationCollapsible(animateShowContent);
    collapsibleBtnVisible.style.display = 'inline';
    collapsibleContent.style.display = 'block';
    collapsibleBtnHidden.style.display = 'none';

    isVisible = true;
    isHidden = false;
}

const workCollapse = () => {
    if (isVisible === true) {
        hideCollapsibleContent();
    } else showCollapsibleContent();
    
}

collapsibleBtn.addEventListener('click', workCollapse)