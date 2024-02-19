$('.homeCarousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
})

$('.relatedServices-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.feed-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
})