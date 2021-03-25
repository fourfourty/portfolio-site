import * as React from 'react';
import * as ReactDOM from 'react-dom';
import scrollTo from './assets/js/scrollTo';
import 'jquery';
import './assets/js/swiper';
import ToggleBurger from './assets/js/toggleBurger';
import squareAnim from './assets/js/square';
import App from './assets/js/containers/App';
import './assets/js/mpc.js';
import './assets/js/popup-init.js';
import './assets/css/styles.css';
import './assets/css/magnific-popup.css';
import './assets/css/adaptive.css';
import './assets/css/normalize.css';
import './assets/css/animate.css';
import './assets/css/portfolioPages.css';
import './assets/img/diplom_1.png';
import './assets/img/diplom_2.png';
import './assets/img/1-1.png';
import './assets/img/1-2.png';
import './assets/img/2-1.png';
import './assets/img/2-1-375.png';
import './assets/img/2-2.png';
import './assets/img/2-3.png';
import './assets/img/3-1.png';
import './assets/img/3-2.png';
import './assets/img/4-1.png';
import './assets/img/4-2.png';
import './assets/img/4-3.png';
import './assets/img/5-1.png';
import './assets/img/5-2.png';
import './assets/img/5-3.png';
import './assets/img/6-1.png';
import './assets/img/7-1.png';
import './assets/img/7-2.png';
import './assets/img/8-1.png';
import './assets/img/arrow-left.png';
import './assets/img/arrow-right.png';
import  './assets/img/icons.svg';
import './assets/img/me.jpg';
import './assets/img/android-chrome-192x192.png';
import './assets/img/android-chrome-512x512.png';
import './assets/img/apple-touch-icon.png';
import './assets/img/favicon-16x16.png';
import './assets/img/favicon-32x32.png';
import './assets/img/mstile-150x150.png';
import './assets/img/safari-pinned-tab.svg';



squareAnim();
scrollTo;
ToggleBurger();


window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('page-feedback'));
})
