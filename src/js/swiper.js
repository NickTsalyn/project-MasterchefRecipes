import Swiper from "swiper";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 20,
    slidesPerView: 'auto',
  // If we need pagination
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
  },
  dynamicBullets: true,
  allowSlideNext: true,
  autoplay: {
        delay: 3000,
  },
  slidesPerGroup: 1,
  speed: 800,
      // loop: true,
  mousewheel: {
    invert: true,
  },

  });
  