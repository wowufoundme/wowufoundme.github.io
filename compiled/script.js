$(document).ready(function(){
  $('.nav-toggle-container').click(function(){
    $('#nav').toggleClass('is-active');
    $('#toggle').toggleClass('active');
  });
  $('.popup-close').click(function(){
    $('#popup').addClass('popup-closed');
  });
});
$(window).on('load',function(){
  $('.intro').toggleClass('show-head');
  $('.cover--1').toggleClass('cover--1--removed');
  $('.cover--2').toggleClass('cover--2--removed');
});

particlesJS.load('particles-js', 'compiled/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});