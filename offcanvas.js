$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
    $("html, body").animate({
       scrollTop:0
     },"fast");
  });
});