'use strict';

export default function ToggleBurger() {

  const headerListEl = document.querySelector('.js-menu');
  const burgerEl = document.querySelector('.js-burger');
  const body = document.querySelector('body');

const onBurgerBtnClick = () => {
  headerListEl.classList.toggle('visible-transform');
}

const onBodyClick = (event) => {
    const target = event.target; 
    if (headerListEl.classList.contains('visible-transform') && !target.closest('.header__nav')) {
      headerListEl.classList.toggle('visible-transform');
  }
}

body.addEventListener('click',onBodyClick)  ;
burgerEl.addEventListener('click',onBurgerBtnClick);
};

