import Swiper from 'swiper';
import { Navigation, Scrollbar, Pagination, Grid } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css';


document.addEventListener('DOMContentLoaded', function () {

  const swiperNews = new Swiper('.news__slider', {
    modules: [Navigation, Scrollbar, Pagination, Grid],
    loop: false, // незациклен
    allowTouchMove: true, // свайп и мышка
    grabCursor: true,
    spaceBetween: 20,
    watchOverflow: true,
    slidesPerView: 1,

    autoHeight: false,

    initialSlide: 0,
    grid: {
      rows: 2,
      fill: "column"
    },

    on: {
      init: function (s) {
        if (window.innerWidth < 768) {

          s.slides.forEach(slide => {
            // Удаляем инлайновую высоту, чтобы работал CSS класс
            slide.style.height = '';
            slide.style.marginTop = '';
            console.log("height = ''");
          });
        };
      },
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
            autoHeight: false,

        initialSlide: 0,
        grid: false,
        watchSlidesVisibility: true,
        slidesPerView: 'auto',      // Позволяет использовать ширину из CSS
        spaceBetween: 32,           // Ваш отступ между слайдами
        centeredSlides: false,      // Выравнивание по левому краю
        normalizeSlideIndex: true,  // Умный пересчет активного индекса
        watchSlidesProgress: true,  // Следит за изменением положения
        resistanceRatio: 0,

        observer: true,
        observeParents: true,
      }
    },

    pagination: {
      el: '.news__pagination-wrapper',
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let bullets = '';
        let start, end;

        if (total <= 4) {
          start = 0;
          end = total - 1;
        } else if (current <= 2) {
          start = 0;
          end = 3;
        } else if (current >= total - 1) {
          start = total - 4;
          end = total - 1;
        } else {
          start = current - 2;
          end = current + 1;
        }

        for (let i = 0; i < total; i++) {
          const active = i === current - 1 ? 'pagination--current' : '';
          const hidden = i < start || i > end ? 'style="display: none;"' : '';

          bullets += `
          <button class="pagination ${active}" ${hidden} data-index="${i}">
            ${i + 1}
          </button>
        `;
        }

        return bullets;
      },
    },
  });

  swiperNews.on('init', function () {
    console.log('Swiper инициализирован, translate:');
    console.log(swiperNews.translate);

    swiperNews.translate = 286;
    swiperNews.setTranslate(swiperNews.translate); // Важно использовать setTranslate!
    console.log('Translate установлен вручную:', swiperNews.translate);

    swiperNews.update(); // Пересчитываем размеры
  });



  swiperNews.on('slideChange', function () {
    console.log('Swiper инициализирован, translate:');
    console.log('Translate установлен вручную:', swiperNews.translate);

  });

  document.querySelector('.news__pagination-wrapper').addEventListener('click', function (e) {
    const button = e.target.closest('.pagination');
    if (button) {
      const index = parseInt(button.getAttribute('data-index'));
      swiperNews.slideTo(index);
    }
  });
});

// export { initSwiperNews };
