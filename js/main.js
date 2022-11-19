$(document).ready(function () {
    $('.links .links_owl').owlCarousel({
        loop: true,
        margin: 10,
        rtl:true,
        responsiveClass: true,
        navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            450: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            },
            1200: {
                items: 8,
                nav: true,
                loop: true
            }
        }
    })

    
    $('.most_trend .most_trend_owl').owlCarousel({
        loop: true,
        margin: 25,
        rtl:true,
        responsiveClass: true,
        navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive: {
            320: {
                items: 2.5,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3.5,
                nav: true,
                loop: true
            },
            1200: {
                items: 4.5,
                nav: true,
                loop: true
            }
        }
    })

    $('.most_trend .cats_owl').owlCarousel({
        loop: true,
        margin: 10,
        rtl:true,
        responsiveClass: true,
        navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive: {
            320: {
                items: 3.5,
                nav: true
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 4.5,
                nav: true,
                loop: true
            },
            1200: {
                items: 7,
                nav: true,
                loop: true
            }
        }
    })
});