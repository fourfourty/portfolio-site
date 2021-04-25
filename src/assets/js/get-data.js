'use strict';


const getDate = () => {
    const date = new Date();
    const day = date.getDay();
    const dateNumb = date.getDate();
    const dateArr = ['Воскресенье','Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const replaceDay = dateArr.filter((dayName,index) =>  (index === day) ? dayName : false)
    return `
    <div class="page-a__date aside-date">
        <span class="aside-date__numb">${dateNumb}</span>
        <span class="aside-date__day">${replaceDay}</span>
    </div>`;
}

export default getDate;