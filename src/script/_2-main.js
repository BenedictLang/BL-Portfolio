/*General*/

//TODO export breakpoint variable
const   bpTablet = window.matchMedia("(min-width: 850px)"),
        bpLandscape = window.matchMedia("(max-height: 500px)");

/* ==== MOVE TO MOUSE POSITION ====*/
var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();

    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

    $('.moveToMouse')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});

/* ==== Fade in content on scroll ==== */
const fadersUp = document.querySelectorAll('.fade-in');
const fadersL = document.querySelectorAll('.fade-in__left');
const fadersR = document.querySelectorAll('.fade-in__right');
const sucFaders = document.querySelectorAll('.fade-in__elements');
let faders = Array.from(fadersUp);
/*faders.append(Array.from(fadersL));
faders.append(Array.from(fadersR));*/
/*Array.from(fadersL), Array.from(fadersR)*/
const appearOptions = {
    threshold: .6,
    rootMargin: "0px 0px 0px 0px"
};
if (bpTablet.matches || bpLandscape.matches){
    const appearOnScroll = new IntersectionObserver(
    function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
    faders.forEach(fader => {
            appearOnScroll.observe(fader);
    });
} else {
    //ignore fade in for mobile performance
    ignoreFadeIn();
}
function ignoreFadeIn() {
    faders.forEach(element => {
        element.classList.add('appear');
    });
}

/* ==== NAV MENU HEADER ====*/
const   navMenu = document.getElementById('nav-menu'),
        menuList = document.getElementById('menu-list'),
        navMobileToggle = document.getElementById('nav-mobile-toggle'),
        navDesktopToggle = document.getElementById('nav-desktop-toggle'),
        navClose = document.getElementById('nav-close'),
        header = document.getElementById('header'),
        contentWrapper = document.getElementById('content-wrapper'),
        main = document.getElementById('main'),
        footer = document.getElementById('footer'),
        scrollToTop = document.getElementById('scroll-to-top');

//Show mobile Menu
if(navMobileToggle || navDesktopToggle){
    navMobileToggle.addEventListener('click', showMenu);
    navDesktopToggle.addEventListener('click', showMenu);
}
function showMenu(){
    navDesktopToggle.nextElementSibling.classList.add('open');
    navMenu.classList.add('show__menu');
    scrollToTop.classList.add('hidden');
    if(bpTablet.matches || bpLandscape.matches) {
        contentWrapper.classList.add('blur');
    } else {
        contentWrapper.classList.add('blur-light');
    }
    disableScroll(document.body);
}
//Hide Menu
navDesktopToggle.addEventListener('change', function() {
    if (this.checked) {
        showMenu();
    } else {
        closeMenu();
    }
});
if(navClose || main) {
    navClose.addEventListener('click', closeMenu);
    main.addEventListener('click', closeMenu);
}
//hide menu if link clicked
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', linkAction));
function linkAction(){
    closeMenu();
}
function closeMenu() {
    navDesktopToggle.nextElementSibling.classList.remove('open');
    enableScroll(document.body);
    contentWrapper.classList.remove('blur');
    contentWrapper.classList.remove('blur-light');
    navMenu.classList.remove('show__menu');
    scrollToTop.classList.remove('hidden');
}

//toggle sticky desktop navbar
let prevScrollPos = window.pageYOffset;
['scroll','load'].forEach( evt =>
    window.addEventListener(evt, () => {
        if(bpTablet.matches || bpLandscape.matches){
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if(currentScrollPos > prevScrollPos){
                header.classList.add('headerHidden');
            } else {
                header.classList.remove('headerHidden');
            }
            prevScrollPos = currentScrollPos;
            if (window.pageYOffset <= 70) {
                header.classList.add('headerSticky');
                navMenu.classList.add('nav__menu-sticky');
                menuList.classList.add('menu__list-sticky');
            } else {
                header.classList.remove('headerSticky');
                navMenu.classList.remove('nav__menu-sticky');
                menuList.classList.remove('menu__list-sticky');
            }
        }
    }, false)
);



/* ==== 3D HEADER ====*/
//TODO

/* ==== 3D FOOTER ====*/
$(document).ready(function($) {

    //Scroll to top btn
    $(window).on('scroll', function() {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
            $('body').addClass('tight');
        } else {
            $('body').removeClass('tight');
            if ($(window).width() > 767) {
            }
        }
    });

    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .wrapper", function() {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
        $('nav-menu').classList.remove('show__menu');
    });
});

/**
 * Toggle y-scroll
 */
function disableScroll(element) {
    element.classList.add("stop-scroll");
}

function enableScroll(element) {
    element.classList.remove("stop-scroll");
}

//disable animations on resize or orientation change
let resizeTimer;
["resize"].forEach(evt => {
    window.addEventListener(evt, () => {
        document.body.classList.add("animation__hidden");
        /*closeMenu();*/
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("animation__hidden");
        }, 400);
    });
});

//banner interaction
const banners = document.querySelectorAll('.banner-close');
banners.forEach(bannerBtn => {
    bannerBtn.addEventListener('click', function() {
        bannerBtn.parentElement.style.opacity = '0';
        setTimeout(() => {
            bannerBtn.parentElement.style.padding = '0';
            bannerBtn.parentElement.style.maxHeight = '0';
        }, 200);
        setTimeout(() => {
            bannerBtn.parentElement.classList.add('hidden');
        }, 700);
    });
});

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();