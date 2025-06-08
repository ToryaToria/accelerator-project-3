// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import './main-menu.js';
import './modal.js';

import {initSwiperHero} from './sliders/slider-hero.js';
initSwiperHero();

import {initSwiperPrograms} from './sliders/programs-slider.js';
initSwiperPrograms();

import {initSwiperReviews} from './sliders/reviwes-slider.js';
initSwiperReviews();