import Swiper from "swiper";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    spaceBetween: 10,
    slidesPerView: 'auto',
  // If we need pagination
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
  },
  
  allowSlideNext: true,
    autoplay: {
        delay: 3000,
  },
    //  slidesPerView: 1,
  // // к-сть слайдів які пролистуються
  // slidesPerGroup: 1,
      speed: 800,
      // loop: true,
      mousewheel: {
    invert: true,
  },
      
  });
  
// const swiper = new Swiper('.swiper', {

//       allowSlideNext: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         type: 'bullets',

//       },
//    spaceBetween: 10,
//       autoplay: {
//         delay: 3000,
//       },
// //  к-сть показаних слайдів на сторінку
//   slidesPerView: 1,
//   // к-сть слайдів які пролистуються
//   slidesPerGroup: 1,
//       speed: 800,
//       loop: true,
//       mousewheel: {
//     invert: true,
//   },
//     });