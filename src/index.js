import * as React from 'react';
import * as ReactDOM from 'react-dom';
import getGitData from './assets/js/get-github';
import "core-js/stable";
import "regenerator-runtime/runtime";
import getGithubTemp from './assets/js/github-temp';
import './assets/css/styles.scss';
import './assets/css/magnific-popup.scss';
import './assets/css/adaptive.scss';
import './assets/css/normalize.scss';
import './assets/css/animate.scss';
import './assets/css/portfolioPages.scss';
import './assets/js/scrollTo';
import 'jquery';
import showDownLoadWindow from './assets/js/download-window';
import mySwiper from './assets/js/swiper.js';
import './assets/js/toggleBurger';
import setGrow from './assets/js/set-grow.js';
import App from './assets/js/containers/App';
import './assets/js/mpc.js';
import './assets/js/popup-init.js';
import './assets/img/diplom_1.png';
import './assets/img/diplom_2.png';
import './assets/img/1-1.png';
import './assets/img/1-2.png';
import './assets/img/2-1.png';
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
import './assets/img/8-1.png';
import './assets/img/9-1.png';
import './assets/img/10-1.png';
import './assets/img/11-1.png';
import './assets/img/12-1.png';
import  './assets/img/icons.svg';
import './assets/img/me.jpg';
import './assets/img/android-chrome-192x192.png';
import './assets/img/android-chrome-512x512.png';
import './assets/img/apple-touch-icon.png';
import './assets/img/favicon-16x16.png';
import './assets/img/favicon-32x32.png';
import './assets/img/mstile-150x150.png';
import './assets/img/safari-pinned-tab.svg';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('page-feedback'));
})



const init = () => {
  mySwiper();
  setGrow();
  // getGitData().then((data) => { 
  //   return getGithubTemp(data);
  // });
  showDownLoadWindow();
}
init();
