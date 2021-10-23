/*General*/

//TODO export breakpoint variable
const   bpTablet = window.matchMedia("(min-width: 850px)"),
        bpLandscape = window.matchMedia("(max-height: 500px)");

/* ==== LOADER ====*/
$(window).on("load", siteLoader);
const loader = document.getElementById('loader-wrapper');
function siteLoader() {
    $(".loader-wrapper").fadeTo(950, 0, "swing")
        .fadeOut("slow", function() {
            /*$(this).remove();*/
        });
    setTimeout(function() {
        $(".blur").removeClass();
    }, 300);
}

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

//
//ACCESSIBILITY SETTINGS
//
/*window.enter2click = function enter2click(event){
    if(event.keyCode === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
    }
}*/
/*window.addEventListener("keypress", function searchKeyPress(e){
    e = e || window.event;
    if(e.key === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
    }
});*/
document.getElementById('nav-mobile-toggle').addEventListener("onkeydown", console.log(""))
/*window.searchKeyPress = function searchKeyPress(e){
    e = e || window.event;
    if(e.keyCode === 13){
        document.getElementById('nav-mobile-toggle').preventDefault();
        document.getElementById('nav-mobile-toggle').click();
        return false;
    }
    return true;
}*/

/**
 * default settings
 */
const defaultProfile = document.createElement('style');
document.head.appendChild(defaultProfile);
defaultProfile.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:#fff;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}",
    0);
defaultProfile.sheet.insertRule(":focus{outline:5px solid #ff1493!important}",
    1);
defaultProfile.sheet.insertRule("header,section{background-color:var(--clr-bg)!important; color:white!important}",
    2);
defaultProfile.sheet.insertRule(".btn:hover, .btn__contrast {{background-color:var(--clr-bg)}",
    3);
defaultProfile.sheet.insertRule(".glow-on-hover,.glow-on-hover::after,.glow-on-hover::before,.glow-on-hover:active{transition:none!important;background:0 0}",
    4);
defaultProfile.sheet.insertRule(".dark-mode-toggle,.scroll-down,.scroll-to-top{display:none}",
    5);
defaultProfile.disabled = true;

/**
 * cognitive profile
 */
const cognitiveProfile = document.createElement('style');
document.head.appendChild(cognitiveProfile);
cognitiveProfile.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}",
    0);
cognitiveProfile.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}",
    1);
cognitiveProfile.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}",
    2);
cognitiveProfile.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}',
    3);
cognitiveProfile.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}',
    4);
cognitiveProfile.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}',
    5);
cognitiveProfile.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}',
    6);
cognitiveProfile.disabled = true;

/**
 * vision profile
 */
const visionProfile = document.createElement('style');
document.head.appendChild(visionProfile);
visionProfile.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}",
    0);
visionProfile.sheet.insertRule(".link__contrast,a, p, li{font-size:2em!important;line-height:2em!important;letter-spacing:.15em!important}",
    1);
visionProfile.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",
    2);
visionProfile.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.15em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.7em!important}",
    3);
visionProfile.sheet.insertRule("h1, h1 a{font-size:3.5em!important;font-weight:800!important}",
    4);
visionProfile.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}",
    5);
visionProfile.sheet.insertRule(".nav__bottom{height:0}",
    6);
visionProfile.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}",
    7);
visionProfile.disabled = true;

/**
 * adhd profile
 */
const adhdProfile = document.createElement('style');
document.head.appendChild(adhdProfile);
adhdProfile.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.7);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",
    0);
adhdProfile.sheet.insertRule("#mask-top{top:0;bottom:auto}",
    1);
adhdProfile.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",
    2);
adhdProfile.disabled = true;


/**
 * checkbox handler
 */
window.handleAccProfile = function handleAccProfile() {
    const accCbx = [
        document.getElementById('cbx1'),
        document.getElementById('cbx2'),
        document.getElementById('cbx3')
    ];
    cognitiveProfile.disabled = !accCbx[0].checked;
    if(accCbx[1].checked){
        visionProfile.disabled = false;
        document.getElementById('nav-grid').classList.remove('grid');
    } else {
        visionProfile.disabled = true;
        document.getElementById('nav-grid').classList.add('grid');
    }
    if(accCbx[2].checked){
        adhdProfile.disabled = false;
        document.body.classList.add("animation__hidden");
        const mask = document.createElement('div');
        mask.id = 'acc-mask';
            mask.insertAdjacentHTML('afterbegin', '<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>');
        document.body.parentNode.append(mask);
        const $maskTop = $('#mask-top');
        const $maskBottom = $('#mask-bottom');
        $(document).on('mousemove', function createMask(e) {
            $maskTop.css({height: (e.clientY - 70)});
            $maskBottom.css({height: (window.innerHeight - (e.clientY + 70))});
        });
    } else {
        document.body.classList.remove("animation__hidden");
        adhdProfile.disabled = true;
        const mask = document.getElementById('acc-mask');
        if(mask != null){
            mask.parentNode.removeChild(mask);
        }
    }
    for(let e of accCbx) {
        if (e.checked) {
            defaultProfile.disabled = false;
            ignoreFadeIn();
            break;
        } else {
            defaultProfile.disabled = true;
        }
    }
}

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

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();