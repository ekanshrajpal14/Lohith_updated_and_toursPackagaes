

var car = gsap.to(".car_own_cont", {
    x: "-99.5vw",
    duration: "12",
    repeat: -1,
    ease: "linear"

})

var carown = document.querySelector(".car_own_cont");
carown.addEventListener("mouseenter", () => {
    car.pause();
})
carown.addEventListener("mouseleave", () => { 
    car.play();
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop:"true",
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});



var val = 0;
document.querySelector(".button_toggle").addEventListener("click",function(e){
    if(val == 0){
        document.querySelector(".menu").style.top = "40%";
        val = 1;
    }
    else{
        document.querySelector(".menu").style.top = "-235%";
        val = 0;

    }
})