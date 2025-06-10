// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const initSwiperReviews = () => {
  const swiperReviews = new Swiper('.reviews__slider', {
    modules: [Navigation, Scrollbar],
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: '1',

    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-back-reviews',
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',

        scrollbar: {
          el: '.reviews__scrollbar',
          hide: false, // Скроллбар всегда виден
          clickable: true,
          draggable: true,
          dragSize: 326,
        },
      },

      1440: {
        // allowTouchMove: false,
        // grabCursor: false,
        slidesPerView: '2',
        spaceBetween: 32,

        scrollbar: {
          el: '.reviews__scrollbar',
          hide: false, // Скроллбар всегда виден

          clickable: true,
          draggable: true,
          dragSize: 394,
        },
      }
    }

  });


  swiperReviews.on('slideChange', () => {
    console.log('slider change');
    console.log(swiperReviews.activeIndex);
  });
}

export { initSwiperReviews };