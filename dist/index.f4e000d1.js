$(window).on("load",(function(){$(".loader-wrapper").fadeTo(950,0,"swing").fadeOut("slow",(function(){})),setTimeout((function(){$(".blur").removeClass()}),350)}));document.getElementById("loader-wrapper");const e=window.matchMedia("(min-width: 850px)"),t=window.matchMedia("(min-width: 1440px)"),n=window.matchMedia("(max-height: 500px)");$(document).mousemove((function(e){const t=$(document).width(),n=$(document).height(),o=(e.pageX-t/2)/(t/2)*-30,i=(e.pageY-n/2)/(n/2)*-30,a=e.pageX/t*20*2-20,r=-(e.pageY/n*20*2-20);$(".moveToMouse").css("left",o+"px").css("top",i+"px").css("transform","rotateX("+r+"deg) rotateY("+a+"deg)")}));const o=document.querySelectorAll(".fade-in"),i=(document.querySelectorAll(".fade-in__left"),document.querySelectorAll(".fade-in__right"),document.querySelectorAll(".fade-in__elements"),Array.from(o)),a={threshold:.6,rootMargin:"0px 0px 0px 0px"};if(e.matches||n.matches){const e=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),a);i.forEach((t=>{e.observe(t)}))}else i.forEach((e=>{e.classList.add("appear")}));const r=document.getElementById("nav-menu"),l=document.getElementById("menu-list"),s=document.getElementById("nav-mobile-toggle"),d=document.getElementById("nav-desktop-toggle"),c=document.getElementById("nav-close"),m=document.getElementById("header"),u=document.getElementById("content-wrapper"),h=document.getElementById("main"),p=(document.getElementById("footer"),document.querySelector(".banner-section")),g=document.querySelectorAll(".nav__item"),f=(document.querySelector(".dropdown-arrow"),document.getElementById("scroll-to-top"));function v(){t.matches||(p.classList.add("shrinkY"),d.nextElementSibling.classList.add("open"),r.classList.add("show__menu"),f.classList.add("hidden"),e.matches||n.matches?u.classList.add("blur"):u.classList.add("blur-light"),document.body.classList.add("stop-scroll"))}(s||d)&&(s.addEventListener("click",v),d.addEventListener("click",v)),d.addEventListener("change",(function(){this.checked?v():b()})),(c||h)&&(c.addEventListener("click",b),h.addEventListener("click",b));function y(){b()}function b(){t.matches||(d.nextElementSibling.classList.remove("open"),document.body.classList.remove("stop-scroll"),u.classList.remove("blur"),u.classList.remove("blur-light"),r.classList.remove("show__menu"),f.classList.remove("hidden"),p.classList.remove("shrinkY"))}document.querySelectorAll(".nav__link").forEach((e=>e.addEventListener("click",y)));let E,_=window.pageYOffset;function k(e){e.classList.toggle("rotate90")}["scroll","load"].forEach((t=>window.addEventListener(t,(()=>{if(e.matches||n.matches){const e=window.pageYOffset||document.documentElement.scrollTop;e>_?m.classList.add("headerHidden"):m.classList.remove("headerHidden"),_=e,window.pageYOffset<=50?(m.classList.add("headerSticky"),r.classList.add("nav__menu-sticky"),l.classList.add("menu__list-sticky")):(m.classList.remove("headerSticky"),r.classList.remove("nav__menu-sticky"),l.classList.remove("menu__list-sticky"))}}),!1))),g.forEach((e=>{let t=e.querySelector(".dropdown-arrow");var n,o;null!=t&&(o=()=>{console.log(t),k(t)},(n=e).addEventListener("mouseenter",o),n.addEventListener("mouseleave",o),e.addEventListener("focus",(()=>{k(t)})))})),["resize"].forEach((e=>{window.addEventListener(e,(()=>{document.body.classList.add("animation__hidden"),clearTimeout(E),E=setTimeout((()=>{document.body.classList.remove("animation__hidden")}),400)}))}));document.querySelectorAll(".banner-close").forEach((e=>{e.addEventListener("click",(function(){e.parentElement.style.opacity="0",setTimeout((()=>{e.parentElement.classList.add("shrinkY")}),200),setTimeout((()=>{e.parentElement.classList.add("hidden")}),700)}))}));let L=function(e){return"contact-input__name"===e.id&&e.value.length>3},w=function(e){return"contact-input__subject"===e.id&&e.value.length>10},x=function(e){return"contact-input__mail"===e.id&&e.value.includes("@")&&e.value.includes(".")&&e.value.indexOf(".")<e.value.length-2},I=function(e){return"contact-input__message"===e.id&&e.value.length>30};function S(){!function(){const e=Array.from(document.querySelectorAll(".theme-icon"));"undefined"!=typeof Storage&&localStorage.setItem("darkMode",document.documentElement.classList.contains("darkMode").toString());document.documentElement.classList.contains("darkMode")?e.forEach((e=>{e.classList.add("uil-moon"),e.classList.remove("uil-sun")})):e.forEach((e=>{e.classList.remove("uil-moon"),e.classList.add("uil-sun")}))}(),function(){const e=document.querySelectorAll(".svg");Array.from(e).forEach((e=>{const t=getComputedStyle(document.body),n=e.contentDocument,o=n.querySelectorAll(".svg-element__textClr");Array.from(o).forEach((e=>{e.style.fill=t.getPropertyValue("--clr-text")}));const i=n.querySelectorAll(".svg-element__primeContrastClr");Array.from(i).forEach((e=>{e.style.fill=t.getPropertyValue("--clr-primary-contrast")}))}))}()}document.querySelectorAll(".contact-form__input").forEach((e=>{e.addEventListener("input",(e=>{let t=e.target.parentElement.querySelector(".input-border");L(e.target)||w(e.target)||x(e.target)||I(e.target)?t.classList.add("input-valid"):function(e){e.classList.remove("input-valid")}(t)}))})),document.querySelector(".contact-form__submit").addEventListener("click",(e=>{e.preventDefault();let t=document.getElementById("contact-input__name"),n=document.getElementById("contact-input__subject"),o=document.getElementById("contact-input__mail"),i=document.getElementById("contact-input__message");if(L(t)&&w(n)&&x(o)&&I(i))return document.getElementById("contact-form__submit-message").innerText="",console.info("Form submitted"),console.info(t.value,n.value,o.value,i.value),e.target.innerText="Nachricht abgeschickt!",t.value="",n.value="",o.value="",i.value="",e.target.disable=!0,!1;document.getElementById("contact-form__submit-message").innerHTML='<i class="uil uil-exclamation-triangle"></i> Überprüfen Sie die markierte Eingabe!'})),document.getElementById("currentYear").innerHTML=(new Date).getFullYear().toString(),document.getElementById("experience-design").innerHTML=((new Date).getFullYear()-2014).toString()+"+",document.getElementById("experience-web").innerHTML=((new Date).getFullYear()-2017).toString()+"+",document.getElementById("experience-dev").innerHTML=((new Date).getFullYear()-2019).toString()+"+",function(){let e=null;if("undefined"!=typeof Storage)switch(localStorage.getItem("darkMode")){case"true":e=!0;break;case"false":e=!1}null===e&&window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);!0===e?(document.documentElement.classList.add("darkMode"),S()):!1===e&&(document.documentElement.classList.remove("darkMode"),S())}(),document.querySelectorAll(".dark-mode-toggle").forEach((e=>{e.addEventListener("click",(()=>darkModeToggle))})),window.darkModeToggle=function(){document.documentElement.classList.toggle("darkMode"),S()},document.getElementById("nav-mobile-toggle").addEventListener("onkeydown",(function(e){console.log("keypress")}));const B=document.createElement("style");document.head.appendChild(B),B.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:royalblue;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}",0),B.sheet.insertRule(":focus{outline:5px solid #ff1493!important}",1),B.sheet.insertRule("header,section{background-color:var(--clr-bg)!important; color:white!important}",2),B.sheet.insertRule(".btn:hover, .btn__contrast {{background-color:var(--clr-bg)}",3),B.sheet.insertRule(".glow-on-hover,.glow-on-hover::after,.glow-on-hover::before,.glow-on-hover:active{transition:none!important;background:0 0}",4),B.sheet.insertRule(".dark-mode-toggle,.scroll-down,.scroll-to-top{display:none}",5),B.disabled=!0;const A=document.createElement("style");document.head.appendChild(A),A.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}",0),A.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}",1),A.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}",2),A.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}',3),A.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}',4),A.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}',5),A.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}',6),A.disabled=!0;const R=document.createElement("style");document.head.appendChild(R),R.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}",0),R.sheet.insertRule(".link__contrast,a, p, li{font-size:2em!important;line-height:2em!important;letter-spacing:.15em!important}",1),R.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",2),R.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.15em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.7em!important}",3),R.sheet.insertRule("h1, h1 a{font-size:3.5em!important;font-weight:800!important}",4),R.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}",5),R.sheet.insertRule(".nav__bottom{height:0}",6),R.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}",7),R.disabled=!0;const M=document.createElement("style");document.head.appendChild(M),M.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.7);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",0),M.sheet.insertRule("#mask-top{top:0;bottom:auto}",1),M.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",2),M.disabled=!0,window.handleAccProfile=function(){const e=[document.getElementById("cbx1"),document.getElementById("cbx2"),document.getElementById("cbx3")];if(A.disabled=!e[0].checked,e[1].checked?(R.disabled=!1,document.getElementById("nav-grid").classList.remove("grid")):(R.disabled=!0,document.getElementById("nav-grid").classList.add("grid")),e[2].checked){M.disabled=!1,document.body.classList.add("animation__hidden");const e=document.createElement("div");e.id="acc-mask",e.insertAdjacentHTML("afterbegin",'<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>'),document.body.parentNode.append(e);const t=$("#mask-top"),n=$("#mask-bottom");$(document).on("mousemove",(function(e){t.css({height:e.clientY-70}),n.css({height:window.innerHeight-(e.clientY+70)})}))}else{document.body.classList.remove("animation__hidden"),M.disabled=!0;const e=document.getElementById("acc-mask");null!=e&&e.parentNode.removeChild(e)}for(let t of e){if(t.checked){B.disabled=!1,ignoreFadeIn();break}B.disabled=!0}},function(e){e(".input2").each((function(){e(this).on("blur",(function(){""!=e(this).val().trim()?e(this).addClass("has-val"):e(this).removeClass("has-val")}))}));var t=e('.validate-input input[name="name"]'),n=e('.validate-input input[name="email"]'),o=e('.validate-input textarea[name="message"]');function i(t){var n=e(t).parent();e(n).addClass("alert-validate")}e(".validate-form").on("submit",(function(){var a=!0;return""==e(t).val().trim()&&(i(t),a=!1),null==e(n).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)&&(i(n),a=!1),""===e(o).val().trim()&&(i(o),a=!1),a})),e(".validate-form .input2").each((function(){e(this).focus((function(){var t;t=e(this).parent(),e(t).removeClass("alert-validate")}))}))}(jQuery);
//# sourceMappingURL=index.f4e000d1.js.map
