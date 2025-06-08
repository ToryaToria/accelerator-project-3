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
    },
  });

  function updatePaginationPosition() {

    const activeSlide = document.querySelector('.swiper-slide-active .hero__slid-content');
    const pagination = document.querySelector('.hero__pagination');

  
    const contentRect = activeSlide.getBoundingClientRect();

    const newTop = contentRect.top + 8;
      pagination.style.top = `${newTop}px`;
    }

  updatePaginationPosition();

   swiperHero.on('slideChange', () => {
    requestAnimationFrame(() => {
      updatePaginationPosition();
    });
  });
}

export { initSwiperHero};