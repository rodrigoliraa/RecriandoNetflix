$('.owl-carousel').owlCarousel({
    loop:false, //desativar o loop
    margin:10, //margem de um filme para outro
    nav:false, //
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})