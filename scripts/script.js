let navbar = document.querySelector(".navbar");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos && currentScrollPos > 25) {
      document.querySelector("nav").style.top = "-70px";
    } else {
      document.querySelector("nav").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

function showpopup() {
	document.getElementById('overlay').style.display ='block';
	document.getElementById('page-url').innerHTML = window.location.href;
}
function hidepopup() {
	document.getElementById('overlay').style.display ='none';
	document.getElementById('qr-code').innerHTML = '';
}

function generateQrCode() {
  showpopup();
  return new QRCode("qr-code", {
    text: window.location.href,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}