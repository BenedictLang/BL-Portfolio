/*General*/
import Scrollbar from 'smooth-scrollbar';
//Scrollbar listener
Scrollbar.init(document.querySelector('#scrollable'));
/*let scrollbar_thumb = document.querySelector(".scrollbar_thumb");
window.addEventListener('scroll', this.handleScroll, true);
handleScroll = () => {
    if (scrollbar_thumb.classList.contains("show-scrollbar") === false) {
        scrollbar_thumb.classList.toggle("show-scrollbar");
    }
}*/

/*window.addEventListener('scroll', this.handleScroll, true);
handleScroll = (e) => {
    if (e.target.classList.contains("show-scrollbar") === false) {
        e.target.classList.add("show-scrollbar");
    }
}*/

//sets current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();