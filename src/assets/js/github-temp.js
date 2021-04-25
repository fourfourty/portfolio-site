'use strict';

import getDate from './get-data';

const asideBlockEl = document.querySelector('.page-a__aside');

const getGithubTemp = ( {avatar_url, bio,updated_at,public_repos, name, login, html_url,location} ) => {
    const cutStr = (str) => {
        for(let i = 0; i < str.length; i++) {
            if (str[i] === '-') {
                let cuttedStr = str.replaceAll(str[i], ' ');
               for(let k = 0; k < cuttedStr.length; k++) {
                   if (cuttedStr[k] === 'T') {
                    let result = cuttedStr.replaceAll(cuttedStr[k], ' ');
                    return result.slice(0,-1);
                   }
               }
            }
        }
    } 
    const str =  `
    <div class="page-a__github-content github-content">
        <div class="github-content__avatar">
            <img class="github-content__img" src="${avatar_url}" alt="avatar">
            <span class="github-content__bio">${bio}</span>
            <span class="github-content__name">${name} / ${login}</span>
            <span class="github-content__location">${location}</span>
        </div>
        <div class="github-content__info">
            <span class="github-content__repos">Количество репозиториев:   <span class="github-content__repos-count">${public_repos}</span></span>
            <span class="github-content__update"> Последнее обновление: <span class="github-content__update-count">${cutStr(updated_at)}</span></span>
            <button class="github-content__btn"><a class="github-content__btn-link btn-link" href="${html_url}" target="_blank"><svg class="aside-block-icon">
            <use xlink:href="assets/img/icons.svg#information"></use>
          </svg><span class="btn-link__discr">Подробнее</span></a></button>
        </div>
    </div>`;

    asideBlockEl.insertAdjacentHTML('beforeend', str);
    // asideBlockEl.insertAdjacentHTML('afterbegin', getDate());
}

export default getGithubTemp;