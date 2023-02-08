// Get the button
let mybutton = document.getElementById("top-button");

// When user scrolls 20px, show button
window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
}

// When the user clicks the button, scroll to top of page
function topfunction() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
}
