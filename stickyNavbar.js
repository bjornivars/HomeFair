
window.onscroll = function() {this.stickyNavbar()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var navbar2 = document.getElementById("navbar2");
var sticky2 = navbar2.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");

  }

  if (window.pageYOffset >= sticky2) {
    navbar2.classList.add("sticky2");
    navbar2.style.marginTop = "0";

  } else {
    navbar2.classList.remove("sticky2");
    navbar2.style.marginTop = "3.1em";
  }
}

