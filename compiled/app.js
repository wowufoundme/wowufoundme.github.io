particlesJS.load('particles-js', '/compiled/particles.json', function() {
   console.log('callback - particles.js config loaded');
});

$(document).ready(function() {
  $('.home').addClass('active');
  $('#work').addClass('hidden');

  ONHOME = true
  ONWORK = false

  $('.work').click(function() {
    if (ONHOME) {
      $('#say-hello').addClass('hidden');
      $('#work').removeClass('hidden');
      $('.home').removeClass('active');
      $('.work').addClass('active');
      ONHOME = false
      ONWORK = true
    }
  });

  $('.home').click(function() {
    if (ONWORK) {
      $('#say-hello').removeClass('hidden');
      $('#work').addClass('hidden');
      $('.home').addClass('active');
      $('.work').removeClass('active');
      ONHOME = true
      ONWORK = false
    }
  });
  $("#ghost").ghosttyper({
    messages: ['full time student at New York University pursuing a Master\'s degree in Computer Science, sometimes front-end developer, sometimes graphic designer, sometimes ui/ux designer, partly music producer and full time coffee lover'],
    timeWrite: 20,
    timeDelete: 100000,
    repeat: false
  });
});
