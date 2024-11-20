document.addEventListener("DOMContentLoaded", (event) => {
    var firstSwiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1,
        // effect: "autoplay",
        spaceBetween: 10,
        // effect: "fade",
        pagination: {
            el: ".gallery-pagination",
            clickable: true,
        },
    });
});