import Swiper from 'swiper';
import { Grid } from 'swiper/modules';

// import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/grid';

const initSwiper = () => {

  const swiper = new Swiper('.mySwiper', {
    modules: [ Grid],
    allowTouchMove: true, // свайп и мышка
    autoHeight: false,
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'column',  
    },
    // loop: false,
    // updateOnWindowResize: true,

    // slidesPerColumn: 2,
    // slidesPerGroup :2,
    // slidesPerColumnFill: 'row',


    spaceBetween: 15,

    pagination: {
      el: '.swiper-paginat',
      clickable: true,
    },
  });
};

export { initSwiper };
