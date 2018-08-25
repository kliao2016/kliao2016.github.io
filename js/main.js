// For general nav link
$('.navbar a').on('click', function(e) {
  if ($(e.target).is('a')) {
      // Hide navbar
      $('.navbar-collapse').collapse('hide');

      // Scroll to section
      var section = $(this).attr("href");
      if (section[0] == '#') {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 500);
      }
  }
});

// For home nav link
$('a').on('click', function(e) {
  var section = $(this).attr("href");
  if (section[0] == '#') {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 500);
  }
});

// For card links
$('#projects .card').on('click', function(e) {
  var section = $(this).attr("href");
  if (section[0] == '#') {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 500);
  }
});

/* Change navbar color on scroll */
var section1 = $('#home').offset().top;
var section2 = $('#about').offset().top;
var section3 = $('#education').offset().top;
var section4 = $('#projects').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if ((scrollPos >= section1 && scrollPos < section2)
       || scrollPos < section1
       || (scrollPos >= section2 && scrollPos < section3)) {
    $('nav').css('background-color', 'transparent');
    $('nav').css('-webkit-box-shadow', '');
    $('nav').css('-moz-box-shadow', '');
    $('nav').css('box-shadow', '');
  } else {
    $('nav').css('background-color', '#90A4AE');
    $('nav').css('-webkit-box-shadow', '0 4px 3px -3px #999');
    $('nav').css('-moz-box-shadow', '0 4px 3px -3px #999');
    $('nav').css('box-shadow', '0 4px 3px -3px #999');
  }
});