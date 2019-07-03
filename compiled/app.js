particlesJS.load('particles-js', '/compiled/particles.json', function() {
   console.log('callback - particles.js config loaded');
});

LIGHTBLACK = '#1E1E1E'
BLACK = '#101010'
OFFWHITE = '#DDDDDD'
THEME = 0

$(document).ready(function() {
$('#theme').click(function() {
  if (THEME == 0) {
    $('body').css('color', BLACK);
    $('body').css('background-color', OFFWHITE);
    $('#theme').text("Switch to Dark Theme");
    THEME = 1
  } else {
    $('body').css('color', OFFWHITE);
    $('body').css('background-color', BLACK);
    $('#theme').text("Switch to Light Theme");
    THEME = 0
  }
});
});