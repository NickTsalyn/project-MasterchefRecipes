import Swiper from "swiper";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {

  allowSlideNext: true,
     modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
  },
  spaceBetween: 20,
   autoplay: {
        delay: 3000,
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  speed: 800,
  loop: true,
  mousewheel: {
    invert: true,
  },
  });
  