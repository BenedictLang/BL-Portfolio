$(window).on("load",(function(){$(".loader-wrapper").fadeTo(350,100).fadeTo(300,0,"swing").fadeOut(300,(function(){$(this).remove()})),$(".blur").delay("slow").removeClass()}));const e=document.getElementById("nav-menu"),o=document.getElementById("nav-mobile-toggle"),t=document.getElementById("nav-close");o&&o.addEventListener("click",(()=>{e.classList.add("show__menu"),document.body})),t&&t.addEventListener("click",(()=>{e.classList.remove("show__menu")}));function n(){document.getElementById("nav-menu").classList.remove("show__menu"),console.log("pressed")}document.querySelectorAll(".nav__link").forEach((e=>e.addEventListener("click",n))),$("#menu-toggle").click((function(){$(this).toggleClass("open")})),$(document).ready((function(e){e(window).on("scroll",(function(){e(window).scrollTop()+e(window).height()>e(".wrapper").outerHeight()?e("body").addClass("tight"):(e("body").removeClass("tight"),e(window).width())})),e("html").on("click","body.tight .wrapper",(function(){e("html, body").animate({scrollTop:e(".wrapper").outerHeight()-e(window).height()},500)}))})),document.getElementById("currentYear").innerHTML=(new Date).getFullYear().toString(),function(){let e=null;if("undefined"!=typeof Storage)switch(localStorage.getItem("darkMode")){case"true":e=!0;break;case"false":e=!1}null===e&&window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches);!0===e?(document.documentElement.classList.add("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-sun"),document.querySelector(".theme-icon").classList.add("uil-moon"),console.log("darkMode active")):!1===e&&(document.documentElement.classList.remove("darkMode"),document.querySelector(".theme-icon").classList.remove("uil-moon"),document.querySelector(".theme-icon").classList.add("uil-sun"),console.log("lightMode active"))}();
//# sourceMappingURL=index.3cf15b1d.js.map
