// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation, Scrollbar, Pagination, Grid } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// console.log('ky');

const initSwiperNews = () => {
  const swiperNews = new Swiper('.news__slider', {
    modules: [Navigation, Scrollbar, Pagination, Grid],
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 20,


    autoHeight: false,
    watchOverflow: true,

    // initialSlide: 0,
    // centeredSlides: false,
    // fill: 'row',
    slidesPerView: 1,
    // slidesPerColumn: 2,
    // slidesPerGroup :2,

    grid: {
      rows: 2,
      // fill: 'column',
    },

    navigation: {
      nextEl: '.swiper-button-next-news',
      prevEl: '.swiper-button-back-news',
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
    // slidesPerColumn: 2,
    // slidesPerGroup :2,

    grid: {
      rows: 2,
      // fill: 'column',
    },

      },
      1440: {
        spaceBetween: 32,
      },}

  });

  // swiperNews.on('slideChange', () => {
  //   console.log('slider change');
  //   console.log(swiperNews.activeIndex);
  // });
};

export { initSwiperNews };
