'use strict';

const burgerEl = document.querySelector('.js-burger');
const headerListEl = document.querySelector('.js-menu');
const body = document.querySelector('body');

const onBurgerBtnClick = () => 
{
  headerListEl.classList.toggle('visible-transform');
}

 body.addEventListener('click', (event) => {
    const target = event.target; 
    if (headerListEl.classList.contains('visible-transform') && !target.closest('.header__nav')) {
      headerListEl.classList.toggle('visible-transform')
  }
  })

burgerEl.addEventListener('click',onBurgerBtnClick);