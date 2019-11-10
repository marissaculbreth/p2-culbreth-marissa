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
var readMoreBtns = document.querySelectorAll(".myBtn");

readMoreBtns.forEach(function() {
  this.addEventListener("click", changeClass);
})

function changeClass(event) {

  let btn = event.target,
  context = event.target.parentNode,
  toggleEl = context.querySelector(".more");

  if (toggleEl.classList.contains("show")) {
    btn.innerHTML = "READ LESS";
  } else {
    btn.innerHTML = "READ MORE";
  }

}


// function myFunction() {
//   var dots = document.getElementsByClassName("dots");
//   var moreText = document.getElementsByClassName("more");
//   var btnText = document.getElementsByClassName("myBtn");
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
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        var quoteInsert = document.querySelectorAll(".contact-content .api-content p");


        var unirest = require("unirest");

        var req = unirest("GET", "https://timshim-quotes-v1.p.rapidapi.com/quotes");

        req.headers({
        	"x-rapidapi-host": "timshim-quotes-v1.p.rapidapi.com",
        	"x-rapidapi-key": "48f6ebcbf1msh1d031a64900e7c9p15c494jsn6519cca38157"
        });


        req.end(function (res) {
        	if (res.error) throw new Error(res.error);

        	console.log(res.body);
        });

    }
};

xmlhttp.open('GET', 'http://rapidapi.com/timshim/api/quotes', true);
xmlhttp.send();
