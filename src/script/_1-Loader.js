/* ==== LOADER ====*/
$(window).on("load", siteLoader);
const loader = document.getElementById('loader-wrapper');
function siteLoader() {
    $(".loader-wrapper").fadeTo(950, 0, "swing")
        .fadeOut("slow", function() {
            /*$(this).remove();*/
        });
    setTimeout(function() {
        $(".blur").removeClass();
    }, 350);
}