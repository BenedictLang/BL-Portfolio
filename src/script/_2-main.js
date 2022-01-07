/*General*/

//TODO export breakpoint variable
export const   bpTablet = window.matchMedia("(min-width: 850px)"),
        bpWs = window.matchMedia("(min-width: 1440px)"),
        bpLandscape = window.matchMedia("(max-height: 500px)");

/* ==== MOVE TO MOUSE POSITION ====*/
const moveForce = 30; // max popup movement in pixels
const rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    const docX = $(document).width();
    const docY = $(document).height();

    const moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    const moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

    const rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
    const rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);

    $('.moveToMouse')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});

/* ==== NAV MENU HEADER ====*/
const   navMenu = document.getElementById('nav-menu'),
        menuList = document.getElementById('menu-list'),
        navMobileToggle = document.getElementById('nav-mobile-toggle'),
        navDesktopToggle = document.getElementById('nav-desktop-toggle'),
        accSettingsToggle = document.getElementById('accessibility-cbx'),
        navClose = document.getElementById('nav-close'),
        header = document.getElementById('header'),
        contentWrapper = document.getElementById('content-wrapper'),
        main = document.getElementById('main'),
        footer = document.getElementById('footer'),
        bannerSection = document.querySelector('.banner-section'),
        navItem = document.querySelectorAll('.nav__item'),
        dropdownArrow = document.querySelector('.dropdown-arrow'),
        scrollToTop = document.getElementById('scroll-to-top');

//Show Menu & Acc
if((navMobileToggle || navDesktopToggle) && accSettingsToggle){
    navMobileToggle.addEventListener('click', showMenu);
    navDesktopToggle.addEventListener('click', showMenu);
    accSettingsToggle.addEventListener('click', () => toggleAccSettings(false));
}
function showMenu(){
    if(!bpWs.matches){
        bannerSection.classList.add('shrinkY');
        navDesktopToggle.nextElementSibling.classList.add('open');
        navMenu.classList.add('show__menu');
        scrollToTop.classList.add('hidden');
        blurBG(true);
        disableScroll(document.body);
    }
}

//Hide Menu
navDesktopToggle.addEventListener('change', function() {
    if (this.checked) {
        showMenu();
    } else {
        closeMenu();
    }
});
const subMenu = document.querySelectorAll('.nav__list-sub');
if(navClose || main) {
    navClose.addEventListener('click', closeMenu);
    //close on click on body
    main.addEventListener('click', () => {
        closeMenu();
        accSettingsToggle.checked = false;
        toggleAccSettings(true);
        subMenu.forEach(($menu) => {
            $menu.classList.add('hidden');
            rotate90($menu.parentElement.querySelector('.dropdown-arrow'), false);
        });
    });
}
//hide menu if link clicked
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', linkAction));
function linkAction(){
    closeMenu();
}
function closeMenu() {
    //if(!bpWs.matches){
        navDesktopToggle.nextElementSibling.classList.remove('open');
        enableScroll(document.body);
        blurBG(false);
        navMenu.classList.remove('show__menu');
        /*navMenu.classList.add('shrinkX');*/
        scrollToTop.classList.remove('hidden');
        bannerSection.classList.remove('shrinkY');
    //}
}


//ACCESSIBILITY SETTINGS
//Accessibility toggle
function toggleAccSettings($mainClicked) {
    console.log("Switched");
    const accSettings = document.getElementById('accessibility');
    if (accSettingsToggle.checked) {
        accSettings.classList.remove('hidden');
        navMenu.style.maxHeight = "90vh";
        menuList.classList.add('hidden');
        bannerSection.classList.add('shrinkY');
        blurBG(true);
        disableScroll(document.body);
    } else if($mainClicked || (bpWs.matches && !accSettingsToggle.checked)){
        menuList.classList.remove('hidden');
        bannerSection.classList.remove('shrinkY');
        accSettings.classList.add('hidden');
        blurBG(false);
        enableScroll(document.body);
    } else {
        menuList.classList.remove('hidden');
        accSettings.classList.add('hidden');
    }

}

//toggle sticky desktop navbar
let prevScrollPos = window.pageYOffset;
['scroll','load'].forEach( evt =>
    window.addEventListener(evt, () => {
        subMenu.forEach(($menu) => {
            $menu.classList.add('hidden');
            rotate90($menu.parentElement.querySelector('.dropdown-arrow'), false);
        });
        if(bpTablet.matches || bpLandscape.matches){
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if(currentScrollPos > prevScrollPos){
                header.classList.add('headerHidden');
            } else {
                header.classList.remove('headerHidden');
            }
            prevScrollPos = currentScrollPos;
            if (window.pageYOffset <= 50) {
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

//Dropdown menu
navItem.forEach($entry => {
    let navLink = $entry.querySelector('.nav__link');
    let arrow = $entry.querySelector('.dropdown-arrow');
    let subMenu = $entry.querySelector('.nav__list-sub');
    if (arrow != null) {
        ['click'].forEach(evt => {
            navLink.addEventListener(evt, () => {
                if(subMenu.classList.contains('hidden')) {
                    rotate90(arrow, true);
                    subMenu.classList.remove('hidden');
                } else {
                    rotate90(arrow, false);
                    subMenu.classList.add('hidden');
                }
            });
        });
    }
});

function rotate90($element, $activated) {
    if($activated) {
        $element.classList.add('rotate90')
    } else {
        $element.classList.remove('rotate90')
    }
}

function blurBG($show) {
    if ($show) {
        if(bpTablet.matches || bpLandscape.matches) {
            contentWrapper.classList.add('blur');
        } else {
            contentWrapper.classList.add('blur-light');
        }
    } else {
        contentWrapper.classList.remove('blur');
        contentWrapper.classList.remove('blur-light');
    }
}


/* ==== HERO SECTION ====*/
const home = document.getElementById('home');
const bgLines = document.getElementById('background-anim');
function resizeBG() {
    bgLines.style.minHeight = home.clientHeight + "px";
}

/* ==== 3D HEADER ====*/
//TODO

/* ==== 3D FOOTER ====*/
/*$(document).ready(function($) {

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
});*/

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
        }, 200);
        resizeBG();
    });
});

//banner interaction
const banners = document.querySelectorAll('.banner-close');
banners.forEach(bannerBtn => {
    bannerBtn.addEventListener('click', function() {
        bannerBtn.parentElement.style.opacity = '0';
        setTimeout(() => {
            bannerBtn.parentElement.classList.add('shrinkY');
        }, 200);
        setTimeout(() => {
            //setHeaderOffset();
            bannerBtn.parentElement.classList.add('hidden');
        }, 700);
    });
});

/*const bannerWrapper = document.querySelector('.banner-section');
function setHeaderOffset() {
    if(bpTablet.matches || bpLandscape.matches){
        header.style.top = bannerWrapper.clientHeight + "px";
    }
}
setHeaderOffset();*/


//reCaptcha for forms
function onSubmit($token) {
    document.getElementById("contact-form").submit();
}

let nameCorrect = function check(element) {
    return (element.id === 'contact-input__name' && element.value.length > 3);
    },
    subjectExists = function check(element) {
        return (element.id === 'contact-input__subject' && element.value.length > 10);
    },
    mailCorrect = function check(element) {
        return (element.id === 'contact-input__mail' && (element.value.includes('@') && element.value.includes('.') && element.value.indexOf('.') < element.value.length -2));
    },
    messageExists = function check(element) {
        return (element.id === 'contact-input__message' && element.value.length > 30);
    };



document.querySelectorAll('.contact-form__input').forEach(input => {
    input.addEventListener('input', (e) => {
        let indicator = e.target.parentElement.querySelector('.input-border');
        if (nameCorrect(e.target) || subjectExists(e.target) || mailCorrect(e.target) || messageExists(e.target)){
            valid(indicator);
        } else {
            invalid(indicator);
        }

        function invalid($element){
            $element.classList.remove('input-valid');
        }
        function valid($element){
            $element.classList.add('input-valid');
        }
    });
});

document.querySelector('.contact-form__submit').addEventListener('click', (event) => {
    event.preventDefault();
    let   name = document.getElementById('contact-input__name'),
        subject = document.getElementById('contact-input__subject'),
        mail = document.getElementById('contact-input__mail'),
        msg = document.getElementById('contact-input__message');
    if (nameCorrect(name) && subjectExists(subject) && mailCorrect(mail) && messageExists(msg)){
        document.getElementById('contact-form__submit-message').innerText = '';
        console.info("Form submitted");
        console.info(name.value, subject.value, mail.value, msg.value);
        //TODO
        event.target.innerText = 'Nachricht abgeschickt!';
        name.value = '';
        subject.value = '';
        mail.value = '';
        msg.value = '';
        event.target.disable = true;
        return false;
    } else {
        document.getElementById('contact-form__submit-message').innerHTML = '<i class="uil uil-exclamation-triangle"></i> Überprüfen Sie die markierte Eingabe!';
    }
});


//*************
//year adaption
//*************

//current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();

//experience years
document.getElementById("experience-design").innerHTML = (new Date().getFullYear() - 2014).toString() + "+";

document.getElementById("experience-web").innerHTML = (new Date().getFullYear() - 2017).toString() + "+";

document.getElementById("experience-dev").innerHTML = (new Date().getFullYear() - 2019).toString() + "+";