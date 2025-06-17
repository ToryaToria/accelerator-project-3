import Swiper from 'swiper';
import { Navigation, Scrollbar, Pagination, Grid } from 'swiper/modules';
import 'swiper/css/grid';
// import 'swiper/css';

const initSwiperNews = () => {
  new Swiper('.news__slider', {
    modules: [Navigation, Scrollbar, Pagination, Grid],
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 20,
    watchOverflow: true,
    slidesPerView: 1,

    grid: {
      rows: 2,
      fill: 'column',
    },

    navigation: {
      nextEl: '.swiper-button-next-news',
      prevEl: '.swiper-button-back-news',
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2,

        grid: {
          rows: 2,
          fill: 'row',
        },

      },
      1440: {
        spaceBetween: 32,
        slidesPerView: '3',

        grid: {
          rows: 1,
          fill: 'colomn',
        },
      },
    },

    on: {
      init: function () {
        this.slides.forEach((slide, index) => {
          if (index % 2 === 0) {
            slide.style.height = '330px';
          } else {
            slide.style.height = '240px';
          }
        });

        if (document.documentElement.clientWidth >= 768) {
          this.slides.forEach((slide) => {
            slide.style.height = '350px';
            slide.style.width = '324px';
          });
        }

        if (document.documentElement.clientWidth >= 1440) {
          this.slides.forEach((slide) => {
            slide.style.height = '400px';
            slide.style.width = '286px';
            if (slide.classList.contains('swiper-slide-active')) {
              slide.style.width = '604px';
            }
          });
        }
      }
    },
  });
};

export { initSwiperNews };
