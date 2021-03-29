
// Тип Image - галерея картинок
 export default $('.popup-gallery').magnificPopup({
 delegate: 'a',
 type: 'image',
 tLoading: 'Loading images #%curr%...',
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });