import './script/main';
import './script/darkMode';
import './styles/main.scss';

/* ==== LOADER ====*/
$(window).on("load", function (){
   $(".loader-wrapper")
       .fadeTo("slow", 0, "swing")
       .fadeOut("slow", function() {
          $(this).remove();
       });
});