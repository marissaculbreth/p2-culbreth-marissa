// Hamburger Menu



// Accordion on about page
var acc = document.getElementsByClassName("about-values");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight === "block") {
      panel.style.maxHeight = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "2px";
    }
  });
}


// Read more buttons on contact page
function readMoreButton() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "READ MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "READ LESS";
    moreText.style.display = "inline";
  }
}


// API on contact page
