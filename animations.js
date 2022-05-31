/* Js Scroll Bar animation on */
var scrollBar;
function yScroll() {
    scrollBar = $('#scroll-bar');
    yPos = window.pageYOffset;
    if (yPos === 0) {
        scrollBar.removeClass("scrollbar-visible");
    } else {
        scrollBar.addClass("scrollbar-visible");
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
        $('.intro-box').addClass('animate__animated animate__fadeInUp');
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
        $('#p-img').addClass('animate__animated animate__fadeIn');
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
        $('.detail-box').addClass('animate__animated animate__fadeInRight');
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
        $('#backg-img').addClass('animate__animated animate__fadeIn');
    } /* else {
        $('#backg-img').removeClass('animate__animated animate__fadeIn');
    } */
});

/* Animation 5 */
$(window).scroll(function () {
    var top_of_element = $("#detail-box").offset().top;
    var bottom_of_element = $("#detail-box").offset().top + $("#detail-box").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        $('#detail-box').addClass('animate__animated animate__fadeInRight');
    } /* else {
        $('.detail-box').removeClass('animate__animated animate__fadeInRight');
    } */
});