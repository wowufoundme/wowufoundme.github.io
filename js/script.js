$(window).load(function(){
  $("nav").css("color", "#fff");
  $("nav").css("height", "100px");
  $("nav").css("background-color", "transparent");
  $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
  $("header").css("transform","translate3d(0,0,0)");
  $(".content--wrapper").css("transform","translate3d(0,0,0)");
  $(".loader").delay(1000).fadeOut("slow");
});

$(window).scroll(function() {
    if($(window).scrollTop()>20){
      $("nav").css("color", "#222");
      $("nav").css("height", "50px");
      $("nav").css("background-color", "#fff");
      $("nav").css("border-bottom", "1px solid rgba(255,255,255,0.1)");
    }
    else{
      $("nav").css("color", "#fff");
      $("nav").css("height", "100px");
      $("nav").css("background-color", "transparent");
      $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
    }
});

$(window).scroll(function() {
    if($(window).scrollTop()>50){
      $("body").css("background-color","#222");
      $("header").css("transform","translate3d(0,-500px,0)");
      $(".content--wrapper").css("transform","translate3d(0,-100px,0)");
    }
    else{
      $("body").css("background-color","#24292e");
      $("header").css("transform","translate3d(0,0,0)");
      $(".content--wrapper").css("transform","translate3d(0,0,0)");
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
