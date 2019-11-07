// Hamburger Menu
var icon = document.getElementById("hamIcon");

function toggleMenu() {
  this.nextElementSibling.classList.toggle("mobileMenu");
}

icon.addEventListener("click", toggleMenu);



// Accordion on about page
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Read more buttons on contact page
var i = 0;

function read() {
  if (!i) {
    document.getElementsByClassName("more").style.display = "none";
    document.getElementsByClassName("dots").style.display = "inline";
    document.getElementsByClassName("readMore").innerHTML="READ LESS";
    i=1;
  }
  else {
    document.getElementsByClassName("more").style.display = "inline";
    document.getElementsByClassName("dots").style.display = "none";
    document.getElementsByClassName("readMore").innerHTML="READ MORE";
    i=0;
  }
}



// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");
//
//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }


// API on contact page
