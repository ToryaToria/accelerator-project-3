import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

function updateSlideFocus(slider) {
  console.log('slider!');

  slider.slides.forEach((slide, index) => {

    const isActive = index === slider.activeIndex;
    const focusableElements = slide.querySelectorAll('a, button, input, textarea, select, [tabindex]');

    console.log('slide');
    console.log(slider.slides[index+1]);
    console.log(focusableElements);
    console.log(index+1);

    console.log(isActive);


    // focusableElements.forEach((el) => {
    //   if (isActive) {
    //     el.removeAttribute('tabindex');
    //     el.setAttribute('aria-hidden', 'false');
    //   } else {
    //     el.setAttribute('tabindex', '-1');
    //     el.setAttribute('aria-hidden', 'true');
    //   }
    // });
  });
}

const initSwiperPrograms = () => {
  const swiperPrograms = new Swiper('.programs__slider', {
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
    },
    on: {
      init: function () {
        updateSlideFocus(this);
      },
      slideChange: function () {
        updateSlideFocus(this);
      }
    }

  });


  swiperPrograms.on('slideChange', () => {
    console.log('slider change');
    console.log(swiperPrograms.activeIndex);
    console.log('------------------------');

  });
};


export { initSwiperPrograms };
