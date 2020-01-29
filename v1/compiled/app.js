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
    messages: ['front-end developer', 'graphic designer', 'ui/ux designer', 'android rom developer','coffee lover'],
    timeWrite: 100,
    timeDelete: 50,
    timePause: 1000
  });
});
