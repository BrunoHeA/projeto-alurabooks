
const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});