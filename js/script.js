$(window).load(function(){
  if($(window).scrollTop()>1){
    $("nav").css("height", "50px");
    $("nav").css("border-bottom", "1px solid #6715E0");
  }
  else{
    $("nav").css("height", "100px");
    $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
  }
  $(".content--wrapper").css("transform","translate3d(0,0,0)");
  $(".loader").delay(1000).fadeOut("slow");
});

$(window).scroll(function() {
    if($(window).scrollTop()>20){
      $("nav").css("height", "50px");
      $("nav").css("border-bottom", "1px solid #6715E0)");
    }
    else{
      $("nav").css("height", "100px");
      $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
    }
});

$(window).scroll(function() {
    if($(window).scrollTop()>100){
      $(".list--container--main li").css("transform","translate3d(0,0,0)");
    }
    else{
      $(".list--container--main li").css("transform","translate3d(200%,0,0)");
    }
});

$(document).ready(function(){
  $('#move-down').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 600}, 500);
  });
});

var scrollValue = scrollTop();
