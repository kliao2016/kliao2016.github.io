$('.carousel').carousel({
    interval: false
});

$("#img1").click(function(){
    $("#myCarousel").carousel(0);
});

$("#img2").click(function(){
    $("#myCarousel").carousel(1);
});

$("#img3").click(function(){
    $("#myCarousel").carousel(2);
});

