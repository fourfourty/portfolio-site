'use strict';

const slide = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slide, {
  autoplay : {
    delay: 5000,
  },
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
  },
  loop: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
    slidesPerView: 2,
    spaceBetween: 35,
    },
    992: {
    slidesPerView: 3,
    spaceBetween: 35,
    },
    1025: {
    slidesPerView: 1,
    },
  }
})