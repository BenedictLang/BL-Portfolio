/*General*/
/* ==== LOADER ====*/
$(window).on("load", function (){
    $(".loader-wrapper").fadeTo(1000, 0, "swing")
        .fadeOut("slow", function() {
            $(this).remove();
        });
    setTimeout(function() {
        $(".blur").removeClass();
    }, 300);
});

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
        $('nav-menu').classList.remove('show__menu');
    });
});

//ACCESSIBILITY SETTINGS

//cognitive profile
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

//vision profile
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

//adhd profile
const adhdProfile = document.createElement('style');
document.head.appendChild(adhdProfile);
adhdProfile.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.6);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",
    0);
adhdProfile.sheet.insertRule("#mask-top{top:0;bottom:auto}",
    1);
adhdProfile.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",
    2);
adhdProfile.disabled = true;


//checkbox handler
window.handleAccProfile = function handleAccProfile() {
    cognitiveProfile.disabled = !document.getElementById('cbx1').checked;
    if(document.getElementById('cbx2').checked){
        visionProfile.disabled = false;
        document.getElementById('nav-grid').classList.remove('grid');
    } else {
        visionProfile.disabled = true;
        document.getElementById('nav-grid').classList.add('grid');
    }
    if(document.getElementById('cbx3').checked){
        adhdProfile.disabled = false;
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
        adhdProfile.disabled = true;
        const mask = document.getElementById('acc-mask');
        mask.parentNode.removeChild(mask);
    }
}

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();