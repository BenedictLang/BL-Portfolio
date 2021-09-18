/*General*/
/*import sal from "sal.js";
data-sal-duration="1200" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce"*/

/* ==== NAV MENU HEADER ====*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-mobile-toggle'),
    navClose = document.getElementById('nav-close');

//Show mobile Menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show__menu');
        document.body;
    })
}
//Hide mobile Menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu');
    })
}
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    document.getElementById('nav-menu').classList.remove('show__menu');
    console.log("pressed");
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//Toggle hamburger menu
$('#menu-toggle').click(function(){
    $(this).toggleClass('open');
})



/* ==== 3D HEADER ====*/
//TODO

/* ==== 3D FOOTER ====*/
$(document).ready(function($) {

    //Scroll to top btn
    $(window).on('scroll', function() {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
            $('body').addClass('tight');
/*            $('.arrow').hide();*/
        } else {
            $('body').removeClass('tight');
            if ($(window).width() > 767) {
                /*$('.arrow').show();*/
            }
        }
    });

    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .wrapper", function() {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
    });

});

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();