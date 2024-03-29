/* Nav Bar closing gather */


$("#anchor").click(function () {
    $("#nav-toggler").prop("checked", false);
});
$("#anchor-2").click(function () {
    $("#nav-toggler").prop("checked", false);
});
$("#anchor-3").click(function () {
    $("#nav-toggler").prop("checked", false);
});
$("#anchor-4").click(function () {
    $("#nav-toggler").prop("checked", false);
});
$("#anchor-5").click(function () {
    $("#nav-toggler").prop("checked", false);
});

/* Js Scroll Bar animation on */
var scrollBar;
function yScroll() {
    scrollBar = $('#scroll-bar');
    navColor = $('.nav-toggler .hamburger');
    yPos = window.pageYOffset;
    if (yPos === 0) {
        scrollBar.removeClass("scrollbar-visible");
        navColor.removeClass("darkMenu");
    } else {
        scrollBar.addClass("scrollbar-visible");
        navColor.addClass("darkMenu");
    }
}
window.addEventListener("scroll", yScroll);


/* JQUERY ANIMATIONS */

/* Animation 1 */
$(window).scroll(function () {
    var top_of_element = $(".intro-box").offset().top;
    var bottom_of_element = $(".intro-box").offset().top + $(".intro-box").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('.intro-box').addClass('animate__animated animate__fadeInUp animate__delay-1s');
    } /* else {
        $('.intro-box').removeClass('animate__animated animate__fadeInUp');
    } */
});


/* Animation 2 */
$(window).scroll(function () {
    var top_of_element = $("#p-img").offset().top;
    var bottom_of_element = $("#p-img").offset().top + $("#p-img").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('#p-img').addClass('animate__animated animate__fadeIn animate__delay-1s');
    } /* else {
        $('#p-img').removeClass('animate__animated animate__fadeIn');
    } */
});

/* Animation 3 */
$(window).scroll(function () {
    var top_of_element = $(".detail-box").offset().top;
    var bottom_of_element = $(".detail-box").offset().top + $(".detail-box").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('.detail-box').addClass('animate__animated animate__fadeInRight animate__delay-1s');
    } /* else {
        $('.detail-box').removeClass('animate__animated animate__fadeInRight');
    } */
});

/* Animation 4 */
$(window).scroll(function () {
    var top_of_element = $("#backg-img").offset().top;
    var bottom_of_element = $("#backg-img").offset().top + $("#backg-img").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('#backg-img').addClass('animate__animated animate__fadeIn animate__delay-1s');
    } /* else {
        $('#backg-img').removeClass('animate__animated animate__fadeIn');
    } */
});

/* Animation 5 */
$(window).scroll(function () {
    var top_of_element = $(".relic-delta").offset().top;
    var bottom_of_element = $(".relic-delta").offset().top + $(".relic-delta").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('#detail-box').addClass('animate__animated animate__fadeInRight animate__delay-1s');
    }
});

/* Animation 6 */
$(window).scroll(function () {
    var top_of_element = $("#solar-panels-image").offset().top;
    var bottom_of_element = $("#solar-panels-image").offset().top + $("#solar-panels-image").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('#left-wing').addClass('animate__animated animate__slideInRight animate__delay-1s');
        /* $('#center-device').addClass('animate__animated animate__fadeIn animate__faster'); */
        $('#right-wing').addClass('animate__animated animate__slideInLeft animate__delay-1s');
    } /* else {
        $('.detail-box').removeClass('animate__animated animate__fadeInRight');
    } */
});