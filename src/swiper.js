'use strict';

export default (function () {
  const slide = document.querySelector('.swiper-container');

  let mySwiper = new Swiper(slide, {
  slidesPerView: 1,
  autoplay : {
    delay: 2000,
  },
  })
}())

