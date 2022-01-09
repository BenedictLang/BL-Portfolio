

/* ==== Fade in content on scroll ==== */

const {bpTablet, bpLandscape} = require("./_2-main");
const fadersUp = document.querySelectorAll('.fade-in');
const fadersL = document.querySelectorAll('.fade-in__left');
const fadersR = document.querySelectorAll('.fade-in__right');
const sucFaders = document.querySelectorAll('.fade-in__elements');
const faders = Array.from(fadersUp);
/*const faders = new Element[1];*/
/*faders.append();*/
/*faders.append(Array.from(fadersUp));*/
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
    /*for (let i = 0; i < faders.length; i++) {
        faders[i].forEach(fader => {
            appearOnScroll.observe(fader);
        });
    } */
    /*faders.forEach(faderDirection => {
        faderDirection.forEach(fader => {
            appearOnScroll.observe(fader);
        })
    });*/
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


/* ==== Fade line stroke on scroll ==== */

const line02 = document.getElementById('bg__line02-stroke').querySelector('.section__draw');
const line04 = document.getElementById('bg__line04-stroke').querySelector('.section__draw');
const line05 = document.getElementById('bg__line05-stroke').querySelector('.section__draw');
window.addEventListener('scroll', ()=> {
    const currentScrollPos = Math.floor(window.pageYOffset) || document.documentElement.scrollTop;
    setupStroke(line02, currentScrollPos, 0);
    setupStroke(line04, currentScrollPos, 550);
    setupStroke(line05, currentScrollPos, 500);
    /*if (targetOffset - currentScrollPos < (window.innerHeight * .5)){
    }*/
});

function setupStroke($element, $pos, $correction) {
    const elOffset = offset($element)
    $element.style.strokeDasharray = '' + elOffset + 'px, ' + elOffset + 'px';
    $element.style.strokeDashoffset = ((elOffset + $correction) - $pos) * (-1.3);
}

function offset($element) {
    const rect = $element.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    rotateElement2Mouse(card.parentElement, card);
});


function rotateElement2Mouse($actionCaller, $target) {
    $actionCaller.addEventListener("mousemove", cardMouseMove);
    $actionCaller.addEventListener("mouseleave", cardMouseLeave);

    const moveForce = 25; // max popup movement in pixels
    const rotateForce = 13; // max popup rotation in deg

    function cardMouseMove(e) {
        const cardW = $actionCaller.clientWidth;
        const cardH = $actionCaller.clientHeight;

        const rect = $actionCaller.getBoundingClientRect();
        const cardX = e.clientX - rect.left; //x position within the element.
        const cardY = e.clientY - rect.top;  //y position within the element.
        const centerX = (cardX - $target.offsetLeft) - ($target.offsetWidth/2);
        const centerY = (cardY - $target.offsetTop) - $target.offsetHeight/2;

        const moveX = (e.clientX - cardW) / (-cardW) * -moveForce;
        const moveY = -(e.clientY - cardH) / (-cardH) * -moveForce;

        const rotateX = (- centerY / rect.width) * rotateForce * 3;
        const rotateY = (centerX / rect.height) * rotateForce  * 2  - rotateForce;
        $target.style.left = `${moveX}px`;
        $target.style.top = `${moveY}px`;
        $target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function cardMouseLeave(event) {
        $target.style.left = `0px`;
        $target.style.top = `0px`;
        $target.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
}