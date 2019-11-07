// Hamburger Menu
var icon = document.getElementById("hamIcon");

function toggleMenu() {
  this.nextElementSibling.classList.toggle("mobileMenu");
}

icon.addEventListener("click", toggleMenu);



// Accordion on about page
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


// Read more buttons on contact page
function myFunction() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// API on contact page
