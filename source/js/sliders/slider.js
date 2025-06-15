import Swiper from 'swiper';
import { Pagination, Grid } from 'swiper/modules';

import 'swiper/css/pagination';


const initSwiper = () => {

  const swiper = new Swiper('.mySwiper', {
    modules: [ Pagination, Grid],
    allowTouchMove: true, // свайп и мышка
    autoHeight: false,
    slidesPerView: 1,
    // grid: {
    //   rows: 2,
    //   fill: 'column',  
    // },
    loop: false,
    // updateOnWindowResize: true,

    slidesPerColumn: 2,
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
