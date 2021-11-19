

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