$(document).ready(function () {
  $('.header__burger').click(function (e) {
    $('.header__burger, .header__menu, .header__list').toggleClass('active');
    $('body').toggleClass('lock'); 
  });
});