$(document).ready(function () {
    var owl = $('.home-brand-slider');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1
    });

    // Custom Left Arrow
    $('.left-arrow').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // Custom Right Arrow
    $('.right-arrow').click(function () {
        owl.trigger('next.owl.carousel');
    });
});



$(document).ready(function () {
    function getMargin() {
        var w = $(window).width();
        if (w >= 1500) return 50;   
        if (w >= 992) return 25; 
        return 10; 
    }

    var owl = $('.featured-slider');
    owl.owlCarousel({
        loop: true,
        margin: getMargin(),
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    $(window).resize(function () {
        var newMargin = getMargin();
        owl.data('owl.carousel').options.margin = newMargin;
        owl.trigger('refresh.owl.carousel');
    });
});



$(document).ready(function () {
    var owl = $('.reviews-slider');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1
    });

    // Custom Left Arrow
    $('.left-arrow').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // Custom Right Arrow
    $('.right-arrow').click(function () {
        owl.trigger('next.owl.carousel');
    });
});

if ($('.gallery-carousel').length) {
  $('.gallery-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
}


$(document).ready(function(){
    $('.custom-accordion-header').click(function(){
               
        if ($(this).find("span.fa").hasClass("fa-angle-down")) {
            $(".custom-accordion").find(".content-show").removeClass("content-show");
            $(".custom-accordion").find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down")

            $(this).find("span.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
            $(this).next(".custom-accordion-body").addClass("content-show")

        } else if ($(this).find("span.fa").hasClass("fa-angle-up")) {
            
            $(this).find("span.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
            $(this).next(".custom-accordion-body").removeClass("content-show")
        }
    });
});