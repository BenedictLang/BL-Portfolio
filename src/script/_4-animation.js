

/* ==== Fade in content on scroll ==== */

const {bpTablet, bpLandscape, bpWs} = require("./_2-main");
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

/* ==== Parallax scroll ==== */
window.addEventListener('scroll', () => {
    const target = document.querySelectorAll('.parallax');
    if (bpLandscape.matches || bpWs.matches){
        for (let i = 0; i < target.length; i++) {
            const pos = window.pageYOffset * target[i].dataset.rate;
            if (target[i].dataset.direction === 'vertical') {
                target[i].style.transform = `translate3d(0, ${pos}px, 0)`;
            } else {
                const posX = window.pageYOffset * target[i].dataset.ratex;
                const posY = window.pageYOffset * target[i].dataset.ratey;
                target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            }
        }
    } else {
        for (let i = 0; i < target.length; i++) {
            target[i].style.transform = `translate3d(0, 0, 0)`;
        }
    }
});


/* ==== Fade line stroke on scroll ==== */
/*
element
const path = document.querySelector('.bg__line');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;
window.addEventListener('scroll', () => {
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
});

*/

const line02 = document.getElementById('bg__line02-stroke').querySelector('.section__draw');
const line04 = document.getElementById('bg__line04-stroke').querySelector('.section__draw');
const line05 = document.getElementById('bg__line05-stroke').querySelector('.section__draw');
window.addEventListener('scroll', ()=> {
    const currentScrollPos = Math.floor(window.pageYOffset) || document.documentElement.scrollTop;
    setupStroke(line02, currentScrollPos, 150);
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
    rotateElement2Mouse(card.closest('section'), card);
});


function rotateElement2Mouse($actionCaller, $target) {
    $actionCaller.addEventListener("mousemove", e => {
        if (bpTablet.matches) cardMouseMove(e);
    });
    $actionCaller.addEventListener("mouseleave", cardMouseLeave);

    const moveForce = 25; // max popup movement in pixels
    const rotateForce = 9; // max popup rotation in deg
    function cardMouseMove(e) {
        const cardW = $actionCaller.clientWidth;
        const cardH = $actionCaller.clientHeight;

        const rect = $actionCaller.getBoundingClientRect();
        const cardX = e.clientX - rect.left; //x position within the element.
        const cardY = e.clientY - rect.top;  //y position within the element.
        const centerX = (cardX - $target.clientWidth) - ($target.clientWidth/2);
        const centerY = (cardY - $target.clientHeight) - $target.clientHeight/2;

        const moveX = (e.clientX - cardW) / (-cardW) * -moveForce;
        const moveY = -(e.clientY - cardH) / (-cardH) * -moveForce;

        const rotateX = (- centerY / rect.width) * rotateForce * 6;
        const rotateY = (centerX / rect.height) * rotateForce  * 2  - rotateForce;
        $target.style.left = `${moveX}px`;
        $target.style.top = `${moveY}px`;
        $target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function cardMouseLeave() {
        $target.style.left = `0px`;
        $target.style.top = `0px`;
        $target.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
}