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