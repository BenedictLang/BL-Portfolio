//**********************
//ACCESSIBILITY SETTINGS
//**********************

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
document.getElementById('nav-mobile-toggle').addEventListener("onkeydown", function(e){console.log("keypress")})
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
defaultProfile.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:royalblue;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}",
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
visionProfile.sheet.insertRule(".link__contrast,a, p, li{font-size:1.7em!important;line-height:2em!important;letter-spacing:.15em!important}",
    1);
visionProfile.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",
    2);
visionProfile.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.13em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.5em!important}",
    3);
visionProfile.sheet.insertRule("h1, h1 a{font-size:2.5em!important;font-weight:800!important}",
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