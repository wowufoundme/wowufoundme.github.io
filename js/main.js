$(document).ready(function(){
	$('.wrapper').fadeIn(2000);
    $('#social-view').click(function(){
        $('[id=s-icon]').toggleClass('icon-shown');
    });
    $('.loader').delay(1200).fadeOut(500);
});

$(document).ready(function(){
  $('.title').css('transform','translateX(0)');
  $('.title').css('opacity','1');
  $('.hero-image').css('transform','translateX(0)');
  $('.hero-image').css('opacity','1');
  $('.nav-toggle').click(function(){
    $('#nav').toggleClass('is-open');
    $('#nav-toggle').toggleClass('is-toggled');
  });
});