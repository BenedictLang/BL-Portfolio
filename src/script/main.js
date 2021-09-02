/*General*/
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

/* ==== NAV MENU HEADER ====*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

//Show Menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show__menu');
    })
}
//Hide Menu
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



//Scrollbar listener
const options = {
    damping: 0.7,
    thumbMinSize: 30,
    plugins: {
        overscroll: true
    }
};/*
class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';

    static defaultOptions = {
        direction: null,
    };

    transformDelta(delta, _evt) {
        if (this.options.direction) {
            delta[this.options.direction] = 0;
        }

        return { ...delta };
    }
}

Scrollbar.use(DisableScrollPlugin);
class SomeComponent extends Component {
    render() {
        return (
            <Scrollbar plugins={{
                disableScroll: { direction: 'x' }
            }}>
                ...
            </Scrollbar>
        );
    }
}*/
Scrollbar.init(document.querySelector('#scrollable'), options);

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();