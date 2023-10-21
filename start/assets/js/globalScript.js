$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

//   Carousel
$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  
    },
    allowPageScroll:"vertical"
  
  });