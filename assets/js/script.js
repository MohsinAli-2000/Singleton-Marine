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

        // ================================++++++++++++++++++++====================
    // service page code starts here
    const activeBorder = "1px solid #1C2B4A";
    const inactiveBorder = "1px solid #D9D9D9";
    const activeColor = "#1C2B4A";
    const inactiveColor = "#000";
    const activeIcon = "/assets/images/service/next-black-arrow.webp";
    const inactiveIcon = "/assets/images/service/next-black-arrow.webp";

    const tabsDetails = document.querySelectorAll(".tabsDetails");
    const infoTabs = document.querySelectorAll(".infoTab");
    const infoTabTexts = document.querySelectorAll(".infoTabName h4");
    const infoTabIcons = document.querySelectorAll(".infoTabIcon img");

    function showTab(index) {
        tabsDetails.forEach((d, i) => d.style.display = i === index ? "block" : "none");
        infoTabs.forEach((t, i) => t.style.border = i === index ? activeBorder : inactiveBorder);
        infoTabTexts.forEach((txt, i) => txt.style.color = i === index ? activeColor : inactiveColor);
        infoTabIcons.forEach((icon, i) => icon.src = i === index ? activeIcon : inactiveIcon);

        const offsetTop = tabsDetails[index].getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    // init first tab
    if (infoTabs.length) showTab(0);

    // add click events
    infoTabs.forEach((tab, i) => tab.addEventListener("click", () => showTab(i)));
    // service page code ends here
    // ================================++++++++++++++++++++====================
});