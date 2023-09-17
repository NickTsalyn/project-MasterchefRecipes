// import SimpleLightbox from "simplelightbox";
// const lightbox = new SimpleLightbox('.gallery a');
// document.addEventListener("DOMContentLoaded", function() {
    import axios from "axios";
    import { getRecipesDetail } from './Api/api-recipe_info';
    import * as basicLightbox from 'basiclightbox';
    import 'basiclightbox/dist/basicLightbox.min.css';
import './modal-first';
    // const seeFullRecipec = document.querySelector('.gallery-recipes');

// if (seeFullRecipec) { // Перевірка на наявність елементу
//   seeFullRecipec.addEventListener('click', handlerOnClick);
// }

// function handlerOnClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains('card-item')) {
//     return;
//   }
// const addRatingBtn = document.querySelector('.give-rating-btn');
// if(addRatingBtn) {
   export function openRatingModal () {
    const modalRatingForm =`<form class="modal-rating-form" action="">
   <div class="modal-rating-display"> <h2 class = "modal-rating-head">Rating</h2>
   <div class="modal-rating-container">
    <span class="modal-rating-counter">0.0</span>
    <div>
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="1"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href="./img/icons.svg#star"></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="2"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href="./img/icons.svg#star"></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="3"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href="./img/icons.svg#star"></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="4"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href="./img/icons.svg#star"></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="5"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href="./img/icons.svg#star"></use>
      </svg>
      </div>
    </div>
    <div class="modal-rating-email-container">
    <label class="modal-rating-email-input" for=""> <input class="modal-rating-email-in-input;" type="text" placeholder="Enter email" /> </label>
    <button class="modal-rating-btn" type="submit">Send</button>
    </div>
    </div>
  </form>`;

// function handlerClick (evt){
 const openModalForm = basicLightbox.create(modalRatingForm
    );
   
 openModalForm.show();
// }
const elements = {
    counter:document.querySelector('.modal-rating-counter'),
    form: document.querySelector('.modal-rating-form'),
    container: document.querySelector('.modal-rating-container'),
    input:document.querySelectorAll('input[name=rating-star]'),
    star: document.querySelectorAll('.modal-rating-star'),
    email:document.querySelector('.modal-rating-email-input'),
    btn:document.querySelector('.modal-rating-btn'),
    card:document.querySelector('.card-item'),

   }
// console.dir(elements.star);
elements.container.addEventListener('click',handlerGiveRating);
    // elements.email.addEventListener('input',handlerInput);
    // elements.btn.addEventListener('submit',handlerSubmit)


function handlerGiveRating(evt){
    evt.preventDefault()
    if(evt.currentTarget === evt.target){
        return;
    }
    replaceStar();
    const modalInput = [...elements.input];
    const modalStar = [...elements.star];
    // console.log(modalStar);
    for(let i=0; i<modalInput.length; i+=1){
if(evt.target !== modalInput[i] ){
modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');

}

else{
modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');
elements.counter.textContent = `${modalInput[i].value}.0`;
return;
}
    };

 console.dir( evt.currentTarget)
 console.dir( evt.target.value)
}

function replaceStar() {
elements.star.forEach(star => {
    star.classList.replace('modal-rating-star-active','modal-rating-star');
    
});
}
  }






//     const elements = {
//         counter:document.querySelector('.modal-rating-counter'),
//         form: document.querySelector('.modal-rating-form'),
//         container: document.querySelector('.modal-rating-container'),
//         input:document.querySelectorAll('input[name=rating-star]'),
//         star: document.querySelectorAll('.modal-rating-star'),
//         email:document.querySelector('.modal-rating-email-input'),
//         btn:document.querySelector('.modal-rating-btn'),
//         card:document.querySelector('.card-item'),

//        }
//     // console.dir(elements.star);
//     elements.container.addEventListener('click',handlerGiveRating);
//         // elements.email.addEventListener('input',handlerInput);
//         elements.btn.addEventListener('submit',handlerSubmit)
    
    
//     function handlerGiveRating(evt){
//         evt.preventDefault()
//         if(evt.currentTarget === evt.target){
//             return;
//         }
//         replaceStar();
//         const modalInput = [...elements.input];
//         const modalStar = [...elements.star];
//         // console.log(modalStar);
//         for(let i=0; i<modalInput.length; i+=1){
// if(evt.target !== modalInput[i] ){
//     modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');

// }

// else{
//     modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');
//     elements.counter.textContent = modalInput[i].value;
//   return;
// }
//         };

//      console.dir( evt.currentTarget)
//      console.dir( evt.target.value)
//     }

// function replaceStar() {
//     elements.star.forEach(star => {
//         star.classList.replace('modal-rating-star-active','modal-rating-star');
        
//     });
// }
// function handlerInput(evt){

// }
// function openRatingModal () {
//     const modalRatingForm = `<form class="modal-rating-form" action="">
//     //     <h2>Rating</h2>
//     //     <span class="modal-rating-counter">0.0</span>
//     //     <div class="modal-rating-container">
//     //       <input
//     //         class="modal-rating-input"
//     //         type="radio"
//     //         name="rating-star"
//     //         value="1"
//     //       />
//     //       <svg class="modal-rating-star" width="24" height="24">
//     //         <use href="./img/icons.svg#star"></use>
//     //       </svg>
      
//     //       <input
//     //         class="modal-rating-input"
//     //         type="radio"
//     //         name="rating-star"
//     //         value="2"
//     //       />
//     //       <svg class="modal-rating-star" width="24" height="24">
//     //         <use href="./img/icons.svg#star"></use>
//     //       </svg>
      
//     //       <input
//     //         class="modal-rating-input"
//     //         type="radio"
//     //         name="rating-star"
//     //         value="3"
//     //       />
//     //       <svg class="modal-rating-star" width="24" height="24">
//     //         <use href="./img/icons.svg#star"></use>
//     //       </svg>
      
//     //       <input
//     //         class="modal-rating-input"
//     //         type="radio"
//     //         name="rating-star"
//     //         value="4"
//     //       />
//     //       <svg class="modal-rating-star" width="24" height="24">
//     //         <use href="./img/icons.svg#star"></use>
//     //       </svg>
      
//     //       <input
//     //         class="modal-rating-input"
//     //         type="radio"
//     //         name="rating-star"
//     //         value="5"
//     //       />
//     //       <svg class="modal-rating-star" width="24" height="24">
//     //         <use href="./img/icons.svg#star"></use>
//     //       </svg>
//     //     </div>
//     //     <label class="modal-rating-email-input" for=""> <input type="text" placeholder="Enter email" /> </label>
//     //     <button class="modal-rating-btn" type="submit">Send</button>
//     //   </form>`;
//     ;

//     const openModalForm = basicLightbox.create(modalRatingForm);

//     const elements = {
//         // ваші елементи
//     }

//     elements.container.addEventListener('click', handlerGiveRating);
//     elements.btn.addEventListener('submit', handlerSubmit);

//     function handlerGiveRating(evt){
//         evt.preventDefault()
//         if(evt.currentTarget === evt.target){
//             return;
//         }
//         replaceStar();
//         const modalInput = [...elements.input];
//         const modalStar = [...elements.star];
        
//         for(let i=0; i<modalInput.length; i+=1){
//             if(evt.target !== modalInput[i] ){
//                 modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');
//             } else {
//                 modalStar[i].classList.replace('modal-rating-star','modal-rating-star-active');
//                 elements.counter.textContent = modalInput[i].value;
//                 return;
//             }
//         };
//     }

//     function replaceStar() {
//         elements.star.forEach(star => {
//             star.classList.replace('modal-rating-star-active','modal-rating-star');
//         });
//     }

//     const instance = basicLightbox.create(modalRatingForm, {
//         // конфігурація lightbox, якщо потрібно
//     });

//     instance.show();}
