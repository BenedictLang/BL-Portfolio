$(window).on("load",(function(){$(".loader-wrapper").fadeTo(950,0,"swing").fadeOut("slow",(function(){})),setTimeout((function(){$(".blur").removeClass()}),350)}));document.getElementById("loader-wrapper");const e=window.matchMedia("(min-width: 850px)"),t=window.matchMedia("(min-width: 1440px)"),n=window.matchMedia("(max-height: 500px)");$(document).mousemove((function(e){const t=$(document).width(),n=$(document).height(),o=(e.pageX-t/2)/(t/2)*-30,i=(e.pageY-n/2)/(n/2)*-30,a=e.pageX/t*20*2-20,s=-(e.pageY/n*20*2-20);$(".moveToMouse").css("left",o+"px").css("top",i+"px").css("transform","rotateX("+s+"deg) rotateY("+a+"deg)")}));const o=document.getElementById("nav-menu"),i=document.getElementById("menu-list"),a=document.getElementById("nav-mobile-toggle"),s=document.getElementById("nav-desktop-toggle"),r=document.getElementById("accessibility-cbx"),l=document.getElementById("nav-close"),d=document.getElementById("header"),c=document.getElementById("content-wrapper"),m=document.getElementById("main"),u=(document.getElementById("footer"),document.querySelector(".banner-section")),h=document.querySelectorAll(".nav__item"),g=(document.querySelector(".dropdown-arrow"),document.getElementById("scroll-to-top"));function p(){t.matches||(u.classList.add("shrinkY"),s.nextElementSibling.classList.add("open"),o.classList.add("show__menu"),g.classList.add("hidden"),k(!0),x(document.body))}(a||s)&&r&&(a.addEventListener("click",p),s.addEventListener("click",p),r.addEventListener("click",(()=>b(!1)))),s.addEventListener("change",(function(){this.checked?p():y()}));const f=document.querySelectorAll(".nav__list-sub");(l||m)&&(l.addEventListener("click",y),m.addEventListener("click",(()=>{y(),r.checked=!1,b(!0),f.forEach((e=>{e.classList.add("hidden")}))})));function v(){y()}function y(){s.nextElementSibling.classList.remove("open"),B(document.body),k(!1),o.classList.remove("show__menu"),g.classList.remove("hidden"),u.classList.remove("shrinkY")}function b(e){const n=document.getElementById("accessibility");r.checked?(n.classList.remove("hidden"),o.style.maxHeight="90vh",i.classList.add("hidden"),u.classList.add("shrinkY"),k(!0),x(document.body)):(i.classList.remove("hidden"),n.classList.add("hidden")),(e||t.matches&&!r.checked)&&(u.classList.remove("shrinkY"),k(!1),B(document.body))}document.querySelectorAll(".nav__link").forEach((e=>e.addEventListener("click",v)));let E=window.pageYOffset;function _(e){e.classList.toggle("rotate90")}function k(t){t?e.matches||n.matches?c.classList.add("blur"):c.classList.add("blur-light"):(c.classList.remove("blur"),c.classList.remove("blur-light"))}["scroll","load"].forEach((t=>window.addEventListener(t,(()=>{if(e.matches||n.matches){const e=window.pageYOffset||document.documentElement.scrollTop;e>E?d.classList.add("headerHidden"):d.classList.remove("headerHidden"),E=e,window.pageYOffset<=50?(d.classList.add("headerSticky"),o.classList.add("nav__menu-sticky"),i.classList.add("menu__list-sticky")):(d.classList.remove("headerSticky"),o.classList.remove("nav__menu-sticky"),i.classList.remove("menu__list-sticky"))}}),!1))),h.forEach((e=>{let t=e.querySelector(".dropdown-arrow");var n,o;null!=t&&(o=()=>{},(n=e).addEventListener("mouseenter",o),n.addEventListener("mouseleave",o),e.addEventListener("focus",(()=>{_(t)})),e.addEventListener("click",(()=>{_(t),e.querySelector(".nav__list-sub").classList.remove("hidden")})))}));const L=document.getElementById("home"),w=document.getElementById("background-anim");function x(e){e.classList.add("stop-scroll")}function B(e){e.classList.remove("stop-scroll")}let I;["resize"].forEach((e=>{window.addEventListener(e,(()=>{document.body.classList.add("animation__hidden"),clearTimeout(I),I=setTimeout((()=>{document.body.classList.remove("animation__hidden")}),400),w.style.minHeight=L.clientHeight+"px"}))}));document.querySelectorAll(".banner-close").forEach((e=>{e.addEventListener("click",(function(){e.parentElement.style.opacity="0",setTimeout((()=>{e.parentElement.classList.add("shrinkY")}),200),setTimeout((()=>{e.parentElement.classList.add("hidden")}),700)}))}));let S=function(e){return"contact-input__name"===e.id&&e.value.length>3},A=function(e){return"contact-input__subject"===e.id&&e.value.length>10},R=function(e){return"contact-input__mail"===e.id&&e.value.includes("@")&&e.value.includes(".")&&e.value.indexOf(".")<e.value.length-2},q=function(e){return"contact-input__message"===e.id&&e.value.length>30};function M(){!function(){const e=Array.from(document.querySelectorAll(".theme-icon"));"undefined"!=typeof Storage&&localStorage.setItem("darkMode",document.documentElement.classList.contains("darkMode").toString());document.documentElement.classList.contains("darkMode")?e.forEach((e=>{e.classList.add("uil-moon"),e.classList.remove("uil-sun")})):e.forEach((e=>{e.classList.remove("uil-moon"),e.classList.add("uil-sun")}))}(),function(){const e=getComputedStyle(document.body),t=document.querySelectorAll(".svg");Array.from(t).forEach((t=>{const n=t.contentDocument,o=n.querySelectorAll(".svg-element__textClr");Array.from(o).forEach((t=>{t.style.fill=e.getPropertyValue("--clr-text")}));const i=n.querySelectorAll(".svg-element__primeContrastClr");Array.from(i).forEach((t=>{t.style.fill=e.getPropertyValue("--clr-primary-contrast")}))}))}()}document.querySelectorAll(".contact-form__input").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target.parentElement.querySelector(".input-border");S(e.target)||A(e.target)||R(e.target)||q(e.target)?t.classList.add("input-valid"):function(e){e.classList.remove("input-valid")}(t)}))})),document.querySelector(".contact-form__submit").addEventListener("click",(e=>{e.preventDefault();let t=document.getElementById("contact-input__name"),n=document.getElementById("contact-input__subject"),o=document.getElementById("contact-input__mail"),i=document.getElementById("contact-input__message");if(S(t)&&A(n)&&R(o)&&q(i))return document.getElementById("contact-form__submit-message").innerText="",console.info("Form submitted"),console.info(t.value,n.value,o.value,i.value),e.target.innerText="Nachricht abgeschickt!",t.value="",n.value="",o.value="",i.value="",e.target.disable=!0,!1;document.getElementById("contact-form__submit-message").innerHTML='<i class="uil uil-exclamation-triangle"></i> Überprüfen Sie die markierte Eingabe!'})),document.getElementById("currentYear").innerHTML=(new Date).getFullYear().toString(),document.getElementById("experience-design").innerHTML=((new Date).getFullYear()-2014).toString()+"+",document.getElementById("experience-web").innerHTML=((new Date).getFullYear()-2017).toString()+"+",document.getElementById("experience-dev").innerHTML=((new Date).getFullYear()-2019).toString()+"+",function(){let e=null;if("undefined"!=typeof Storage)switch(localStorage.getItem("darkMode")){case"true":e=!0;break;case"false":e=!1}null===e&&window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);!0===e?(document.documentElement.classList.add("darkMode"),M()):!1===e&&(document.documentElement.classList.remove("darkMode"),M())}(),document.querySelectorAll(".dark-mode-toggle").forEach((e=>{e.addEventListener("click",(()=>darkModeToggle))})),window.darkModeToggle=function(){document.documentElement.classList.toggle("darkMode"),M()};var T=e,Y=n;const C=document.querySelectorAll(".fade-in"),H=(document.querySelectorAll(".fade-in__left"),document.querySelectorAll(".fade-in__right"),document.querySelectorAll(".fade-in__elements"),Array.from(C)),z={threshold:.6,rootMargin:"0px 0px 0px 0px"};if(T.matches||Y.matches){const e=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),z);H.forEach((t=>{e.observe(t)}))}else H.forEach((e=>{e.classList.add("appear")}));const D=document.getElementById("bg__line02-stroke").querySelector(".section__draw"),O=document.getElementById("bg__line04-stroke").querySelector(".section__draw"),F=document.getElementById("bg__line05-stroke").querySelector(".section__draw");function j(e,t,n){const o=function(e){const t=e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}(e);e.style.strokeDasharray=o+"px, "+o+"px",e.style.strokeDashoffset=-1.3*(o+n-t)}window.addEventListener("scroll",(()=>{const e=Math.floor(window.pageYOffset)||document.documentElement.scrollTop;j(D,e,0),j(O,e,550),j(F,e,500)})),document.getElementById("nav-mobile-toggle").addEventListener("onkeydown",(function(e){console.log("keypress")}));const N=document.createElement("style");document.head.appendChild(N),N.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:royalblue;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}",0),N.sheet.insertRule(":focus{outline:5px solid #ff1493!important}",1),N.sheet.insertRule("header,section{background-color:var(--clr-bg)!important; color:white!important}",2),N.sheet.insertRule(".btn:hover, .btn__contrast {{background-color:var(--clr-bg)}",3),N.sheet.insertRule(".glow-on-hover,.glow-on-hover::after,.glow-on-hover::before,.glow-on-hover:active{transition:none!important;background:0 0}",4),N.sheet.insertRule(".dark-mode-toggle,.scroll-down,.scroll-to-top{display:none}",5),N.disabled=!0;const P=document.createElement("style");document.head.appendChild(P),P.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}",0),P.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}",1),P.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}",2),P.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}',3),P.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}',4),P.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}',5),P.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}',6),P.disabled=!0;const X=document.createElement("style");document.head.appendChild(X),X.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}",0),X.sheet.insertRule(".link__contrast,a, p, li{font-size:1.7em!important;line-height:2em!important;letter-spacing:.15em!important}",1),X.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",2),X.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.13em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.5em!important}",3),X.sheet.insertRule("h1, h1 a{font-size:2.5em!important;font-weight:800!important}",4),X.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}",5),X.sheet.insertRule(".nav__bottom{height:0}",6),X.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}",7),X.disabled=!0;const Z=document.createElement("style");document.head.appendChild(Z),Z.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.7);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",0),Z.sheet.insertRule("#mask-top{top:0;bottom:auto}",1),Z.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",2),Z.disabled=!0,window.handleAccProfile=function(){const e=[document.getElementById("cbx1"),document.getElementById("cbx2"),document.getElementById("cbx3")];if(P.disabled=!e[0].checked,e[1].checked?(X.disabled=!1,document.getElementById("nav-grid").classList.remove("grid")):(X.disabled=!0,document.getElementById("nav-grid").classList.add("grid")),e[2].checked){Z.disabled=!1,document.body.classList.add("animation__hidden");const e=document.createElement("div");e.id="acc-mask",e.insertAdjacentHTML("afterbegin",'<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>'),document.body.parentNode.append(e);const t=$("#mask-top"),n=$("#mask-bottom");$(document).on("mousemove",(function(e){t.css({height:e.clientY-70}),n.css({height:window.innerHeight-(e.clientY+70)})}))}else{document.body.classList.remove("animation__hidden"),Z.disabled=!0;const e=document.getElementById("acc-mask");null!=e&&e.parentNode.removeChild(e)}for(let t of e){if(t.checked){N.disabled=!1,ignoreFadeIn();break}N.disabled=!0}},function(e){e(".input2").each((function(){e(this).on("blur",(function(){""!=e(this).val().trim()?e(this).addClass("has-val"):e(this).removeClass("has-val")}))}));var t=e('.validate-input input[name="name"]'),n=e('.validate-input input[name="email"]'),o=e('.validate-input textarea[name="message"]');function i(t){var n=e(t).parent();e(n).addClass("alert-validate")}e(".validate-form").on("submit",(function(){var a=!0;return""==e(t).val().trim()&&(i(t),a=!1),null==e(n).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)&&(i(n),a=!1),""===e(o).val().trim()&&(i(o),a=!1),a})),e(".validate-form .input2").each((function(){e(this).focus((function(){var t;t=e(this).parent(),e(t).removeClass("alert-validate")}))}))}(jQuery);
//# sourceMappingURL=index.144a9841.js.map
