$(function() {
	$('.services-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
        startPosition: 2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
   });
});

$(function() {
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
   });
});


