$(window).load(function(){
  $("nav").css("height", "100px");
  $("nav").css("background-color", "transparent");
  $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
  $("nav").css("box-shadow","0 0 0 0 rgba(255,255,255,0)");
  $(".loader").fadeIn("slow");
  $(".loader").delay(1000).fadeOut("slow");
});

$(window).scroll(function() {
    if($(window).scrollTop()>0){
      $('div[id^="c-"]').addClass('shift');
      $("nav").css("height", "50px");
      $("nav").css("background-color", "#2b3137");
      $("nav").css("border-bottom", "1px solid rgba(255,255,255,0.1)");
      $("nav").css("box-shadow","0 10px 10px -15px #fff");
    }
    else{
      $('div[id^="c-"]').removeClass('shift');
      $("nav").css("height", "100px");
      $("nav").css("background-color", "transparent");
      $("nav").css("border-bottom", "1px solid rgba(255,255,255,0)");
      $("nav").css("box-shadow","0 0 0 0 #fff");
    }
});
