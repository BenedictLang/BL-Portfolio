import './script/main';
import './script/darkMode';
import './styles/main.scss';

/* ==== LOADER ====*/
$(window).on("load", function (){
   $(".loader-wrapper").fadeTo(350, 100)
       .fadeTo(300, 0, "swing")
       .fadeOut(300, function() {
          $(this).remove();
       });
   $(".blur").delay("slow").removeClass();
});