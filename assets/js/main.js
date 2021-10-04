
new WOW().init();

// PopUp on Load Promotion

$(window).on('load', function () {
    $('#promoMadal').modal('show');
});

$(window).on('load', function () {
    $('#newsletterModal').modal('show');
});


// Back to top
var btn = $('#back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// Scroll Navbar
const navbar = document.getElementById('stickyHeader');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('sticky-header');
    } else {
        navbar.classList.remove('sticky-header');
    }
};

// Sidebar Mobile
jQuery(document).ready(function () {
    // Sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

// Dark Mode
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode2");
    var a = document.querySelector(".header__container-fluid");
    a.classList.toggle("dark-mode");

    var sticky = document.getElementById("stickyHeader");
    sticky.classList.toggle("dark-mode");

    var navcolor = document.querySelectorAll(".nav-link, .font-icon, .dropdown-menu, .dropdown-item, .info__service-items, .thumb__product");
    for (i = 0; i < navcolor.length; i++) {
        navcolor[i].classList.toggle("dark-mode");
    }

    var bgwhitedark = document.querySelector(".footer-section");
    bgwhitedark.classList.toggle("bg-white-dark");
    var iconcolor = document.querySelectorAll("h4,h2, a, nav > .no-bg, .text-w");
    for (i = 0; i < iconcolor.length; i++) {
        iconcolor[i].classList.toggle("color-w");
    }
    var colorgray = document.querySelectorAll("del");
    for (i = 0; i < colorgray.length; i++) {
        colorgray[i].classList.toggle("color-gray");
    }

    var bggray = document.querySelectorAll("article");
    for (i = 0; i < bggray.length; i++) {
        bggray[i].classList.toggle("bg-dark-gray");
    }
    var colorblack = document.querySelectorAll(".bg-black");
    for (i = 0; i < colorblack.length; i++) {
        colorblack[i].classList.toggle("color-black");
    }


    var btndark = document.querySelector(".butt-dark");
    btndark.classList.toggle("dark-mode2");
}

// Toggle Switch
// $(function () {
//     $(".toggle").click(function () {
//         $(".switcher-boxed").addClass("active");
//     });
// });

// Carousel 1
var carouselEl = $('#owl-one');
carouselEl.owlCarousel({
    loop: false,
    nav: false,
    autoplay: false,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});

$(".prev-owl").click(function () {
    carouselEl.trigger('prev.owl.carousel');
});
$(".next-owl").click(function () {
    carouselEl.trigger('next.owl.carousel');
});

// Carousel 2
var carouselEl2 = $('#owl-two');
carouselEl2.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1024: {
            items: 1
        },
        2000: {
            items: 1
        }
    }
});

$(".prev-owl2").click(function () {
    carouselEl2.trigger('prev.owl.carousel');
});
$(".next-owl2").click(function () {
    carouselEl2.trigger('next.owl.carousel');
});

// Carousel 3
var carouselEl3 = $('#owl-three');
carouselEl3.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },
        1024: {
            items: 3
        },
        2000: {
            items: 3
        }
    }
});

$(".prev-owl3").click(function () {
    carouselEl3.trigger('prev.owl.carousel');
});
$(".next-owl3").click(function () {
    carouselEl3.trigger('next.owl.carousel');
});

// Carousel 4
var carouselEl4 = $('#owl-four');
carouselEl4.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});

$(".prev-owl4").click(function () {
    carouselEl4.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl4.trigger('next.owl.carousel');
});

// Carousel 5
var carouselEl5 = $('#owl-five');
carouselEl5.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});
$(".prev-owl4").click(function () {
    carouselEl5.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl5.trigger('next.owl.carousel');
});
// Carousel 6
var carouselEl6 = $('#owl-six');
carouselEl6.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});
$(".prev-owl4").click(function () {
    carouselEl6.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl6.trigger('next.owl.carousel');
});
// Carousel 7
var carouselEl7 = $('#owl-sevent');
carouselEl7.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});
$(".prev-owl4").click(function () {
    carouselEl7.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl7.trigger('next.owl.carousel');
});
// Carousel 8
var carouselEl8 = $('#owl-eight');
carouselEl8.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});
$(".prev-owl4").click(function () {
    carouselEl8.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl8.trigger('next.owl.carousel');
});
// Carousel 9
var carouselEl9 = $('#owl-nine');
carouselEl9.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});
$(".prev-owl4").click(function () {
    carouselEl9.trigger('prev.owl.carousel');
});
$(".next-owl4").click(function () {
    carouselEl9.trigger('next.owl.carousel');
});

// Carousel 10
var carouselEl10 = $('#owl-ten');
carouselEl10.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },
        1024: {
            items: 3
        },
        2000: {
            items: 3
        }
    }
});
$(".prev-owl10").click(function () {
    carouselEl10.trigger('prev.owl.carousel');
});
$(".next-owl10").click(function () {
    carouselEl10.trigger('next.owl.carousel');
});
// Carousel 11
var carouselEl11 = $('#owl-11');
carouselEl11.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 5
        },
        1024: {
            items: 6
        },
        2000: {
            items: 6
        }
    }
});

// Carousel 12
var carouselEl12 = $('#owl-12');
carouselEl12.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 4000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1024: {
            items: 4
        },
        2000: {
            items: 4
        }
    }
});








// Active Option Box

$('.product-page li').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

$('.product-page1 li').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

$('.activeBox li').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})



// Remove hide when click 

$(document).on('click', '.ccc', function (e) {
    e.stopPropagation();
});

// Toggle Switch
$('.switcher-rtl').on('click', function () {
    $('.circle-1').toggleClass('checked');
    $('.toggle-1').toggleClass('checked-bg');
    $('.text-1').toggleClass('text-color');
    $('.row').toggleClass('reverse-column');
    $('.d-flex').toggleClass('reverse-column');
    $('.pro-header-right-options').toggleClass('reverse-column');
    $('.navbar__language').toggleClass('flex-end-part');
    $('.navbar__social').toggleClass('flex-start-part');

});

$('.switcher-boxed').on('click', function () {
    $('.circle-2').toggleClass('checked');
    $('.toggle-2').toggleClass('checked-bg');
    $('.text-2').toggleClass('text-color');
})

// Change BackgroundColor
$('#yellow').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundYellow');
    $('ins, .news-date').toggleClass('backgroundYellowColor');
    $('span').toggleClass('borderYellowColor');
    $('.alert-cookie1').toggleClass('backgroundYellowMo');

});

$('#green').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundGreen');
    $('ins, .news-date').toggleClass('backgroundGreenColor');
    $('span').toggleClass('borderGreenColor');
    $('.alert-cookie1').toggleClass('backgroundGreenMo');

});

$('#blue').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundBlue');
    $('ins, .news-date').toggleClass('backgroundBlueColor');
    $('span').toggleClass('borderBlueColor');
    $('.alert-cookie1').toggleClass('backgroundBlueMo');

});


$('#navy-blue').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundDarkBlue');
    $('ins, .news-date').toggleClass('backgroundDarkBlueColor');
    $('span').toggleClass('borderDarkBlueColor');
    $('.alert-cookie1').toggleClass('backgroundDarkBlueMo');

});


$('#red').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundRed');
    $('ins, .news-date').toggleClass('backgroundRedColor');
    $('span').toggleClass('borderRedColor');
    $('.alert-cookie1').toggleClass('backgroundRedMo');
});

$('#pink').on('click', function () {
    $('.bgYellow, #colorChange').toggleClass('backgroundPink');
    $('ins, .news-date').toggleClass('backgroundPinkColor');
    $('span').toggleClass('borderPinkColor');
    $('.alert-cookie1').toggleClass('backgroundPinkMo');
});
