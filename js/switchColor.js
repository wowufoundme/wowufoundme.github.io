var col=1;
$(document).ready(function() {
    $('.button').click(function() {
        $('body').toggleClass("theme--dark");
        $('.button').toggleClass("button--light--theme");
    });
});