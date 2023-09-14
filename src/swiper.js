import Swiper from "swiper";
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    spaceBetween: 19,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  