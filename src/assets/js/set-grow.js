'use strict';

const contentEl = document.querySelector('.js-portfolio');

 const setGrow = () => {
    const contentArr = Array.from(contentEl.children);
    for (let i = 0; i <contentArr.length; i++) {
        if (i % 3 === 0 || i > 2 && i % 4 === 0) {
            contentArr[i].classList.add('content-grow')
        }
    }
}

export default setGrow;
