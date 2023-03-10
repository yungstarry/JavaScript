function toggleNavbar(event) {
  var nav = document.querySelector("nav");
  if (event.target.id === "mobile-exit") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

var mobileCta = document.getElementById("mobile-cta");
mobileCta.addEventListener("click", toggleNavbar);

var mobileExit = document.getElementById("mobile-exit");
mobileExit.addEventListener("click", toggleNavbar);
