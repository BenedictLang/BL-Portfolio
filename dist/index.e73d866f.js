$(window).on("load",(function(){$(".loader-wrapper").fadeTo(1e3,0,"swing").fadeOut("slow",(function(){$(this).remove()})),setTimeout((function(){$(".blur").removeClass()}),300)}));const e=document.getElementById("nav-menu"),t=document.getElementById("nav-mobile-toggle"),o=document.getElementById("nav-close");t&&t.addEventListener("click",(()=>{e.classList.add("show__menu"),document.body})),o&&o.addEventListener("click",(()=>{e.classList.remove("show__menu")}));function n(){document.getElementById("nav-menu").classList.remove("show__menu"),console.log("pressed")}document.querySelectorAll(".nav__link").forEach((e=>e.addEventListener("click",n))),$("#menu-toggle").click((function(){$(this).toggleClass("open")})),$(document).ready((function(e){e(window).on("scroll",(function(){e(window).scrollTop()+e(window).height()>e(".wrapper").outerHeight()?e("body").addClass("tight"):(e("body").removeClass("tight"),e(window).width())})),e("html").on("click","body.tight .wrapper",(function(){e("html, body").animate({scrollTop:e(".wrapper").outerHeight()-e(window).height()},500),e("nav-menu").classList.remove("show__menu")}))}));const i=document.createElement("style");document.head.appendChild(i),i.sheet.insertRule(".link__contrast,a{var(--clr-primary)!important;font-family:Arial,serif!important;outline:2px solid red}",0),i.sheet.insertRule("footer, header,li,ol,p,section,ul{transition:none!important;border-width:3px!important;border-radius:4px!important;border-color:red!important;outline:2px solid #ff8c00}",1),i.sheet.insertRule("h1,h2,h3,h4{outline:2px solid #00f}",2),i.sheet.insertRule('button, [role="button"], [role="menu"], [role="checkbox"]{transition:none!important;border-width:3px!important;border-radius:4px!important;outline:2px solid #0ff}',3),i.sheet.insertRule('[type="checkbox"]+.toggle, [type="checkbox"]+.cbx-icon{outline:2px solid #0ff;margin:4px;}',4),i.sheet.insertRule('[type="checkbox"]:checked + .toggle{outline:2px solid greenyellow}',5),i.sheet.insertRule('[type="checkbox"]:checked + .toggle span path{stroke:var(--clr-bg);stroke-dasharray:25;stroke-dashoffset:25}',6),i.disabled=!0;const s=document.createElement("style");document.head.appendChild(s),s.sheet.insertRule("a, button, i.uil{font-size:1.7em!important;letter-spacing:.15em!important}",0),s.sheet.insertRule(".link__contrast,a, p, li{font-size:2em!important;line-height:2em!important;letter-spacing:.15em!important}",1),s.sheet.insertRule("span.copyright{line-height:1.5em!important;font-style:normal!important;font-size:1.7em!important;letter-spacing:.15em!important}",2),s.sheet.insertRule("h1,h2,h3,h4 ,h5 ,h6 {line-height:2em!important;letter-spacing:.15em!important;font-weight:bolder!important;font-family:Arial,serif!important;font-size:2.7em!important}",3),s.sheet.insertRule("h1, h1 a{font-size:3.5em!important;font-weight:800!important}",4),s.sheet.insertRule(".accessibility__settings{display:flex;flex-direction:column}",5),s.sheet.insertRule(".nav__bottom{height:0}",6),s.sheet.insertRule(".scrollbar__mini::-webkit-scrollbar{width:10px}",7),s.disabled=!0;const r=document.createElement("style");document.head.appendChild(r),r.sheet.insertRule("#mask-bottom,#mask-top{position:fixed;background:rgba(0,0,0,.6);filter:blur(3px);width:100%;pointer-events:none;z-index:100000}",0),r.sheet.insertRule("#mask-top{top:0;bottom:auto}",1),r.sheet.insertRule("#mask-bottom{top:auto;bottom:0}",2),r.disabled=!0,window.handleAccProfile=function(){if(i.disabled=!document.getElementById("cbx1").checked,document.getElementById("cbx2").checked?(s.disabled=!1,document.getElementById("nav-grid").classList.remove("grid")):(s.disabled=!0,document.getElementById("nav-grid").classList.add("grid")),document.getElementById("cbx3").checked){r.disabled=!1;const e=document.createElement("div");e.id="acc-mask",e.insertAdjacentHTML("afterbegin",'<div id="mask-top" aria-hidden="true"></div><div id="mask-bottom" aria-hidden="true"></div>'),document.body.parentNode.append(e);const t=$("#mask-top"),o=$("#mask-bottom");$(document).on("mousemove",(function(e){t.css({height:e.clientY-70}),o.css({height:window.innerHeight-(e.clientY+70)})}))}else{r.disabled=!0;const e=document.getElementById("acc-mask");e.parentNode.removeChild(e)}},document.getElementById("currentYear").innerHTML=(new Date).getFullYear().toString(),function(){let e=null;if("undefined"!=typeof Storage)switch(localStorage.getItem("darkMode")){case"true":e=!0;break;case"false":e=!1}null===e&&window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);!0===e?(document.documentElement.classList.add("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-sun"),document.querySelector(".theme-icon").classList.add("uil-moon"),console.log("darkMode active")):!1===e&&(document.documentElement.classList.remove("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-moon"),document.querySelector(".theme-icon").classList.add("uil-sun"),console.log("lightMode active"))}();
//# sourceMappingURL=index.e73d866f.js.map
