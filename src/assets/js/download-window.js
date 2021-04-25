'use strict';

const downLoadWrapEl = document.querySelector('.downLoad__container');
const body = document.querySelector('body');

const showDownLoadWindow = () => {
    body.classList.add('body-fixed');
    setTimeout(() => {
        downLoadWrapEl.classList.add('transform-animate-word');
        body.classList.remove('body-fixed');
    },5500);
}

export default showDownLoadWindow;