import Swiper from 'swiper';

console.log('tabs')

const initSwiperNewsTags = () => {
new Swiper('.news__tabs-container', {
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 13,
    slidesPerView: 'auto',

    breakpoints: {
      768: {
        spaceBetween: 10,
        allowTouchMove: false, // свайп и мышка
      },
    }
  });

};

export { initSwiperNewsTags };
