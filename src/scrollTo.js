
export default $(function Scroll(){
  $('.scrollto-1').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('[name="examples"]').offset().top }, 1500);
      e.preventDefault();
  });
  $('.scrollto-2').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('[name="whatICan"]').offset().top }, 1500);
      e.preventDefault();
});
});
