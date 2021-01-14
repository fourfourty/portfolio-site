'use strict';

const welcomeWrapElem = document.querySelector('.js-welcomeWrap');
const welcomeBtnElem = document.querySelector('.js-welcomeBtn');

welcomeBtnElem.addEventListener('click', () => {
welcomeWrapElem.classList.add('fadeout');
});

