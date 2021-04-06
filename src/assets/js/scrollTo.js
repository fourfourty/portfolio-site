
export default $(function Scroll(){
    const navigateLinksArr = [...$('.navigate-link')];
    navigateLinksArr.map((link,index) => {
    link.classList.add(`scrollto-${index}`);
        link.addEventListener('click', (e) => {
            $('html,body').stop().animate({ scrollTop: $(`[id=${link.hash.slice(1)}]`).offset().top }, 1500);
            e.preventDefault();
        })
    })   
});
