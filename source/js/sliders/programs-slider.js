// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const initSwiperPrograms = () => {
  new Swiper('.programs__slider', {
    modules: [Navigation, Scrollbar],
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: '1',

    navigation: {
      nextEl: '.swiper-button-next-programs',
      prevEl: '.swiper-button-back-programs',
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',

        scrollbar: {
          el: '.programs__scrollbar',
          hide: false, // Скроллбар всегда виден
          clickable: true,
          draggable: true,
          dragSize: 326,
        },
      },

      1440: {
        allowTouchMove: false,
        grabCursor: false,
        slidesPerView: '3',
        spaceBetween: '22',

        scrollbar: {
          el: '.programs__scrollbar',
          hide: false, // Скроллбар всегда виден

          clickable: true,
          draggable: true,
          dragSize: 394,
        },
      }
    }

  });


  // swiperPrograms.on('slideChange', () => {
  //   console.log('slider change');
  //   console.log(swiperPrograms.activeIndex);
  // });
};

export { initSwiperPrograms };
