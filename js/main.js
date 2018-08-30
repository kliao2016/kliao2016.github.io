/* Smooth scroll for general nav link */
$('.navbar a').on('click', function(e) {
  if ($(e.target).is('a')) {
      // Hide navbar
      $('.navbar-collapse').collapse('hide');

      // Scroll to section
      var section = $(this).attr("href");
      if (section[0] == '#') {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(section).offset().top + 3
        }, 500);
      }
  }
});

/* Smooth scroll for home nav link */
$('a').on('click', function(e) {
  var section = $(this).attr("href");
  if (section[0] == '#') {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(section).offset().top + 3
    }, 500);
  }
});

/* Smooth scroll for card links */
$('#projects .card').on('click', function(e) {
  var section = $(this).attr("href");
  if (section[0] == '#') {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(section).offset().top + 3
    }, 500);
  }
});

/* Change navbar color on scroll */
// Section coordinates
var section1 = $('#home').offset().top;
var section2 = $('#about').offset().top;
var section3 = $('#education').offset().top;
var section4 = $('#projects').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if ((scrollPos >= section1 && scrollPos < section2)
       || scrollPos < section1) {
    $('nav').css('background-color', 'transparent');
  } else if (scrollPos >= section2 && scrollPos < section3) {
    $('nav').css('background-color', 'white');
  } else if (scrollPos >= section3 && scrollPos < section4) {
    $('nav').css('background-color', '#EAAA00');
  } else if (scrollPos >= section4) {
    $('nav').css('background-color', 'whitesmoke');
  }
});