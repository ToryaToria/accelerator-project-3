// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import 'swiper/css';
// import 'swiper/css/pagination';

const initSwiperHero = () => {
  const swiperHero = new Swiper('.hero__slider', {
    modules: [Pagination],
    loop: true, // зациклен
    allowTouchMove: true, // свайп и мышка
    // direction: 'horizontal', // по умолчанию
    grabCursor: true,
    // spaceBetween: 0,
    // slidesPerView: '1',


    pagination: {
      el: '.hero__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="hero__pagination-button ${className}" data-index="${index}" type="button">
                  <span class="visually-hidden">${index + 1}</span>
                  </button>`;
      }
    },
       breakpoints: {
      1440: {
    allowTouchMove: false,
        grabCursor: false,

      }
    }

  });

  
  // swiperHero.on('slideChange', () => {
  //   console.log('slider change');
  //   console.log(swiperHero.activeIndex);
  // });
}

export { initSwiperHero };