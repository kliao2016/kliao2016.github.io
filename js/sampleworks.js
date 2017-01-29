/**************************
* For Mapview Slideshow
**************************/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mapviewslide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/**************************
* For Happy Tap Slideshow
**************************/

var htslideIndex = 1;
htshowDivs(htslideIndex);

function htplusDivs(n) {
  htshowDivs(htslideIndex += n);
}

function htshowDivs(n) {
  var i;
  var x = document.getElementsByClassName("htslide");
  if (n > x.length) {htslideIndex = 1}
  if (n < 1) {htslideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[htslideIndex-1].style.display = "block";
}