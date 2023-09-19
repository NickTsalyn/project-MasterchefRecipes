import Swiper from "swiper";
import 'swiper/css';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    spaceBetween: 12,
    slidesPerView: 'auto',
  // If we need pagination
    // modules: [Pagination]
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  });
  