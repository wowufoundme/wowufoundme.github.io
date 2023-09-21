$(window).ready(function () {
  $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
    $(".__loader_content").html("Loading HTML...");
  });
  $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
    $(".__loader_content").html("Loading BODY...");
  });
  $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
    $(".__loader_content").html("Loading NAVIGATION...");
  });
  $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
    $(".__loader_content").html("Loading TRANSITIONS...");
  });
  $(".__loader_content").delay(500).fadeTo("slow", 1, function () {
    $(".__loader_content").html("LOADING COMPLETE...");
  });
  $(".__loader_wrap").delay(6000).fadeTo("slow", 1, function () {
    $(".__loader_wrap").css("transform", "scale(0)");
    $('.marker-top').css("transform", "translate3d(0,0,0)");
    $('.marker-bottom').css("transform", "translate3d(0,0,0)");
  });
});
$(document).ready(function () {
  var isSliderOpen = 0;
  var moreToggle = 0;
  var projectToggle = 0;
  var longIntro = 0;
  var workToggle = 0;
  $('#nav-collapse').click(function () {
    $('div.bt-menu').toggleClass("change");
    if (!isSliderOpen) {
      $('.slider').css("transform", "translate3d(0,0,0)");
      // $('.marker-top').css("transform", "translate3d(250px,0,0)");
      // $('.marker-bottom').css("transform", "translate3d(250px,0,0)");
      // $('.introduction').css("transform", "translate3d(250px,0,0)");
      isSliderOpen = 1;
    } else {
      $('.slider').css("transform", "translate3d(-100%,0,0)");
      // $('.marker-top').css("transform", "translate3d(0,0,0)");
      // $('.marker-bottom').css("transform", "translate3d(0,0,0)");
      // $('.introduction').css("transform", "translate3d(0,0,0)");
      isSliderOpen = 0;
    }
  });
  $('#moreToggle').click(function () {
    if (!moreToggle) {
      $('.marker-top').css("transform", "translate3d(0,-100%,0)");
      $('.marker-bottom').css("transform", "translate3d(0,100%,0)");
      $('.more-info').css("transform", "scale(1)");
      $('.info-text').html("Go Back");
      moreToggle = 1;
    } else {
      $('.marker-top').css("transform", "translate3d(0,0,0)");
      $('.marker-bottom').css("transform", "translate3d(0,0,0)");
      if (isSliderOpen) {
        $('.marker-top').css("transform", "translate3d(250px,0,0)");
        $('.marker-bottom').css("transform", "translate3d(250px,0,0)");
      }
      $('.more-info').css("transform", "scale(0)");
      $('.info-text').html("About Me");
      moreToggle = 0;
    }
  });
  $('#workToggle').click(function () {
    if (!workToggle) {
      $('.work-section').css("transform", "translate3d(0,0,0)");
      $('.work-text').html("Go Back");
      $('.marker-top').css("transform", "translate3d(0,-200%,0)");
      $('.marker-bottom').css("transform", "translate3d(0,-200%,0)");
      workToggle = 1;
    } else {
      $('.work-section').css("transform", "translate3d(0,100%,0)");
      $('.work-text').html("Work");
      $('.marker-top').css("transform", "translate3d(0,0,0)");
      $('.marker-bottom').css("transform", "translate3d(0,0,0)");
      workToggle = 0;
    }
  });
  $('.__button_more').click(function () {
    if (!longIntro) {
      $('.__short_intro').css('display', 'none');
      $('.__long_intro').css('display', 'block');
      $(this).html("<i class=\"fa fa-chevron-left\" style=\"padding-right:10px\"></i>Back to Short Intro");
      longIntro = 1;
    } else {
      $('.__short_intro').css('display', 'block');
      $('.__long_intro').css('display', 'none');
      $(this).html("Read complete story...");
      longIntro = 0;
    }
  });
});