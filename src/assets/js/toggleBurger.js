'use strict';

import '../css/styles.scss';
import '../css/adaptive.scss';

const pageA = document.querySelector('.page-a');
const headerEl = document.querySelector('.header');
const headerListEl = document.querySelector('.js-menu');
const spanArr = document.querySelectorAll('.burger__span');
const burgerEl = document.querySelector('.js-burger');
const itemLinkEl = document.querySelectorAll('.header__item ');

export default(function ToggleBurger() {

  const onBodytoggleHeaderPosWheel = (e) => {
    if (window.pageYOffset >= 500 ) {
      headerEl.classList.add('header--fixed');
      pageA.style.paddingTop = '470px';
    }
    if (window.pageYOffset < 500) {
      headerEl.classList.remove('header--fixed');
      pageA.style.paddingTop = '103px';
    };


  };

  const onBurgerBtnClick = () => {
    headerListEl.classList.toggle('visible-transform');
    spanArr.forEach((el,i) => {
      i === 0 ? el.classList.toggle('rotate_1') : '';
      i === 1 ? el.classList.toggle('rotate_2') : '';
      i === 2 ? el.classList.toggle('rotate_3') : '';
    });
  }

  const onLinksElClick = () => window.innerWidth <= 1024 ? onBurgerBtnClick() : false;

  const onBodyClick = (event) => {
    const target = event.target;

    if (headerListEl.classList.contains('visible-transform') && !target.closest('.header__nav')) {
      headerListEl.classList.toggle('visible-transform');
      return spanArr.forEach((el,i) => {
        i === 0 ? el.classList.toggle('rotate_1') : '';
        i === 1 ? el.classList.toggle('rotate_2') : '';
        i === 2 ? el.classList.toggle('rotate_3') : '';
      });
    }
  }

    // itemLinkEl.forEach(el => el.addEventListener('click',onLinksElClick));
    // body.addEventListener('click',onBodyClick);
    window.addEventListener('scroll',onBodytoggleHeaderPosWheel);
    // burgerEl.addEventListener('click',onBurgerBtnClick);
  


}());


