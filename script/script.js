$(function(){
// NAV
var nav = $("#nav ul li");

nav.on("mouseenter", function(){
    $(this).stop(true).find(".subnav").slideDown(100);
}).on("mouseleave", function(){
    $(this).stop(true).find(".subnav").slideUp(100);
});

// SLIDES
var $slide = $(".slide-group");

function slide(){
    $interval = setInterval(function(){
        slideAct();
    }, 3000);
} function slideAct(){
    $slide.stop(true).animate({
        left: "-100%"
    },500, function(){
        $slide.css("left", 0);
        $slide.append($slide.find("div").eq(0));
    });
}
slide();

// POPUP
var popup = $("#popup");
var btn = popup.find(".btn");
var menu = $(".menu");

$(".notice>ul>li").on("click", function(){
    popup.stop(true).fadeIn(200);
});
btn.on("click", function(){
    popup.stop(true).fadeOut(200);
});
$(".menu>ul>li").on("click", function(){
    popup.stop(true).fadeIn(200);
});
});