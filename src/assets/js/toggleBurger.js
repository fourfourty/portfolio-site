'use strict';

export default function ToggleBurger() {

  const headerListEl = document.querySelector('.js-menu');
  const burgerEl = document.querySelector('.js-burger');
  const body = document.querySelector('body');
  const spanArr = [...burgerEl.children];
  const itemLinkEl = [...headerListEl.children];

const onBurgerBtnClick = () => {
  headerListEl.classList.toggle('visible-transform');
  spanArr.forEach((el,i) => {
    i === 0 ? el.classList.toggle('rotate_1') : '';
    i === 1 ? el.classList.toggle('rotate_2') : '';
    i === 2 ? el.classList.toggle('rotate_3') : '';
  });
}

const onBodyClick = (event) => {
    const target = event.target;

    if (headerListEl.classList.contains('visible-transform') && !target.closest('.header__nav')) {
      headerListEl.classList.toggle('visible-transform');
      spanArr.forEach((el,i) => {
    i === 0 ? el.classList.toggle('rotate_1') : '';
    i === 1 ? el.classList.toggle('rotate_2') : '';
    i === 2 ? el.classList.toggle('rotate_3') : '';
  });
  }

}

itemLinkEl.forEach(el => {
  if (window.innerWidth <= 1024) {
     el.addEventListener('click',onBurgerBtnClick)
  }
});

body.addEventListener('click',onBodyClick);
burgerEl.addEventListener('click',onBurgerBtnClick);
};

