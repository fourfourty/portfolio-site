'use strict';

import '../css/styles.scss';

const notifWrapEl = document.querySelector('.js-send');

const slideNotification = () => {
    notifWrapEl.classList.add('slide-notification');
    setTimeout(() => {
        notifWrapEl.classList.remove('slide-notification');
    },4000)

}

export default slideNotification;