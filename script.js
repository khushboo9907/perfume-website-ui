$(document).ready(function(){
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,
    animateOut: 'fadeOut'
  });
});