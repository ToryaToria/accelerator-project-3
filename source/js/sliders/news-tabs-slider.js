import Swiper from 'swiper';

const initSwiperNewsTags = () => {
  new Swiper('.news__tabs-container', {
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 12,
    slidesPerView: 'auto',

    breakpoints: {
      768: {
        spaceBetween: 5,
        allowTouchMove: false, // свайп и мышка
      },

      1440: {
        spaceBetween: 0,
        allowTouchMove: false, // свайп и мышка
      },
    }
  });
};

export { initSwiperNewsTags };
