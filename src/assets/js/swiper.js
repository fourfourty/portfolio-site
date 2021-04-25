'use strict';

import '../css/styles.scss';
import '../css/adaptive.scss'; 
const slide = document.querySelector('.swiper-container');

function mySwiper () {
  let swipe = new Swiper(slide, {
    speed: 400,
    slidesPerView: 1,
    autoHeight: true,
    autoplay : {
      delay: 3000,
    },
  });
}

export default mySwiper;