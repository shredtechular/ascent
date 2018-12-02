// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------
$('.icon-menu').click(function(e){
    // e.preventDefault();
    TweenLite.fromTo('.overlay', 0.2, {top:"-200%"},{top:"0"});
    TweenLite.fromTo('.icon-close', 0.7, {top:"-500px"},{top:"0"});
    TweenLite.to('.icon-menu', 0.7, {opacity:0, top:"-500px"});

    TweenLite.fromTo('.logo', 0.7, {top:"-500px"},{top:"0"});
    $('body,html').addClass('overflowhidden');
});

$('.icon-close').click(function(e){
    // e.preventDefault();
    TweenLite.fromTo('.overlay', 0.2, {top:"0"},{top:"-200%"});
    TweenLite.fromTo('.logo', 0.7, {top:"-500px"},{top:"0"});
    TweenLite.to('.icon-menu', 0.7, {opacity:1, top:"0"});
    TweenLite.fromTo('.icon-close', 0.7, {top:"0"},{top:"-500px"});
    $('body,html').removeClass('overflowhidden');
});

$('.gotop').click(function(){
    $('html, body').animate({scrollTop: 0}, 700);
});

