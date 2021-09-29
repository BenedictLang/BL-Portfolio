$(window).on("load",(()=>{$(".loader-wrapper").fadeTo(1e3,0,"swing").fadeOut("slow",(function(){$(this).remove()})),setTimeout((function(){$(".blur").removeClass()}),300)}));const e=document.getElementById("nav-menu"),t=document.getElementById("nav-mobile-toggle"),o=document.getElementById("nav-desktop-toggle"),n=document.getElementById("nav-close"),i=document.getElementById("main"),s=document.getElementById("header"),l=window.matchMedia("(min-width: 850px)"),d=document.getElementById("scroll-to-top");function r(){o.nextElementSibling.classList.add("open"),e.classList.add("show__menu"),d.classList.add("hidden"),document.body.classList.add("stop-scroll")}t&&(t.addEventListener("click",r),o.addEventListener("click",r)),n&&(n.addEventListener("click",m),i.addEventListener("click",m));const a=document.querySelectorAll(".nav__link");function c(){m()}function m(){o.nextElementSibling.classList.remove("open"),document.body.classList.remove("stop-scroll"),e.classList.remove("show__menu"),d.classList.remove("hidden")}o.addEventListener("change",(function(){this.checked?r():m()})),a.forEach((e=>e.addEventListener("click",c))),$("#nav-desktop-label").click((function(){$("#nav-desktop-label").toggleClass("open")}));let u=window.pageYOffset;window.addEventListener("scroll",(()=>{if(l.matches){const t=window.pageYOffset||document.documentElement.scrollTop;t>u?s.classList.add("headerHidden"):s.classList.remove("headerHidden"),u=t,window.pageYOffset<=70?(s.classList.add("headerSticky"),e.classList.add("nav__menu-sticky"),console.log("Sticky!")):(s.classList.remove("headerSticky"),e.classList.remove("nav__menu-sticky"))}})),$("#nav-desktop-toggle").click((function(){$(this).toggleClass("open")})),$(document).ready((function(e){e(window).on("scroll",(function(){e(window).scrollTop()+e(window).height()>e(".wrapper").outerHeight()?e("body").addClass("tight"):(e("body").removeClass("tight"),e(window).width())})),e("html").on("click","body.tight .wrapper",(function(){e("html, body").animate({scrollTop:e(".wrapper").outerHeight()-e(window).height()},500),e("nav-menu").classList.remove("show__menu")}))})),document.getElementById("nav-mobile-toggle").addEventListener("onkeydown",console.log(""));const h=document.createElement("style");document.head.appendChild(h),h.sheet.insertRule(":root,p{font-family:Arial,serif!important;font-style:normal!important;--clr-primary:#fff;--clr-text:#fff;--clr-bg:#141B2B;--clr-background:#141B2B}",0),h.sheet.insertRule(":focus{outline:5px solid #ff1493!important}",1),h.sheet.insertRule("header,section{background-color:var(--clr-bg)!important; color:white!important}",2),h.sheet.insertRule(".btn:hover, .btn__contrast {{background-color:var(--clr-bg)}",3),h.sheet.insertRule(".glow-on-hover,.glow-on-hover::after,.glow-on-hover::before,.glow-on-hover:active{transition:none!important;background:0 0}",4),h.sheet.insertRule(".dark-mode-toggle,.scroll-down,.scroll-to-top{display:none}",5),h.disabled=!0;const p=document.createElement("style");document.head.appendChild(p),p.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}",0),p.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}",1),p.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}",2),p.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}',3),p.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}',4),p.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}',5),p.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}',6),p.disabled=!0;const g=document.createElement("style");document.head.appendChild(g),g.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}",0),g.sheet.insertRule(".link__contrast,a, p, li{font-size:2em!important;line-height:2em!important;letter-spacing:.15em!important}",1),g.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",2),g.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.15em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.7em!important}",3),g.sheet.insertRule("h1, h1 a{font-size:3.5em!important;font-weight:800!important}",4),g.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}",5),g.sheet.insertRule(".nav__bottom{height:0}",6),g.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}",7),g.disabled=!0;const f=document.createElement("style");document.head.appendChild(f),f.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.7);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",0),f.sheet.insertRule("#mask-top{top:0;bottom:auto}",1),f.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",2),f.disabled=!0,window.handleAccProfile=function(){const e=[document.getElementById("cbx1"),document.getElementById("cbx2"),document.getElementById("cbx3")];if(p.disabled=!e[0].checked,e[1].checked?(g.disabled=!1,document.getElementById("nav-grid").classList.remove("grid")):(g.disabled=!0,document.getElementById("nav-grid").classList.add("grid")),e[2].checked){f.disabled=!1;const e=document.createElement("div");e.id="acc-mask",e.insertAdjacentHTML("afterbegin",'<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>'),document.body.parentNode.append(e);const t=$("#mask-top"),o=$("#mask-bottom");$(document).on("mousemove",(function(e){t.css({height:e.clientY-70}),o.css({height:window.innerHeight-(e.clientY+70)})}))}else{f.disabled=!0;const e=document.getElementById("acc-mask");null!=e&&e.parentNode.removeChild(e)}for(let t of e){if(t.checked){h.disabled=!1;break}h.disabled=!0}},document.getElementById("currentYear").innerHTML=(new Date).getFullYear().toString(),function(){let e=null;if("undefined"!=typeof Storage)switch(localStorage.getItem("darkMode")){case"true":e=!0;break;case"false":e=!1}null===e&&window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);!0===e?(document.documentElement.classList.add("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-sun"),document.querySelector(".theme-icon").classList.add("uil-moon")):!1===e&&(document.documentElement.classList.remove("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-moon"),document.querySelector(".theme-icon").classList.add("uil-sun"))}();
//# sourceMappingURL=index.9d39d3e3.js.map
