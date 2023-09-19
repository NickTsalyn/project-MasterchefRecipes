
import axios from 'axios';
import { getRecipesDetail } from './Api/api-recipe_info';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import './modal-first';
import Notiflix from 'notiflix';

export function openRatingModal(indeficator) {
  const modalRatingForm = `<form class="modal-rating-form" action="">
  <svg class="modal-rating-close-btn" width="20" height="20">
  <use href="./img/icons.svg#close-icon"></use>
</svg>
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
     <input class="modal-rating-email-in-input" type="email" placeholder="Enter email"/> 
    <button class="modal-rating-btn" type="submit">Send</button>
    </div>
    </div>
  </form>`;

 
  const openModalForm = basicLightbox.create(modalRatingForm);

  openModalForm.show();
  


  const elements = {
    counter: document.querySelector('.modal-rating-counter'),
    form: document.querySelector('.modal-rating-form'),
    container: document.querySelector('.modal-rating-container'),
    input: document.querySelectorAll('input[name=rating-star]'),
    star: document.querySelectorAll('.modal-rating-star'),
    mail: document.querySelector('.modal-rating-email-in-input'),
    btn: document.querySelector('.modal-rating-btn'),
    card: document.querySelector('.card-item'),
    closeBtn:document.querySelector('.modal-rating-close-btn'),
  };
 
  elements.container.addEventListener('click', handlerGiveRating);
  elements.mail.addEventListener('input', handlerInput);
  elements.form.addEventListener('submit', handlerSubmit);
  elements.closeBtn.addEventListener('click',handlerClose);
  function handlerClose(){
    openModalForm.close();
  }


  function handlerGiveRating(evt) {
  
    evt.preventDefault();
    if (evt.currentTarget === evt.target) {
      return;
    }
    replaceStar();
    const modalInput = [...elements.input];
    const modalStar = [...elements.star];
   
    for (let i = 0; i < modalInput.length; i += 1) {
      if (evt.target !== modalInput[i]) {
        modalStar[i].classList.replace(
          'modal-rating-star',
          'modal-rating-star-active'
        );
      } else {
        modalStar[i].classList.replace(
          'modal-rating-star',
          'modal-rating-star-active'
        );
        return elements.counter.textContent = `${modalInput[i].value}.0`;
       
      }
    }


  }

  function replaceStar() {
    elements.star.forEach(star => {
      star.classList.replace('modal-rating-star-active', 'modal-rating-star');
    });
  }
  function patchRating(indeficator, eMail) {
  
    
    const postToUpdate = {
      id: indeficator,
      body: {
        rate: Number.parseFloat(elements.counter.textContent),
        email: eMail,
      },
    };

    const options = {
      method: 'PATCH',
      body: JSON.stringify(postToUpdate.body),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

   return fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${postToUpdate.id}/rating`,options).then(response => response.json());
  }
  function handlerInput(evt) {
    elements.mail.value = evt.target.value.trim();
  }
  function handlerSubmit(evt) {
    
    evt.preventDefault();
    if(elements.mail.value === "" || elements.counter.textContent === "0.0"){
      Notiflix.Notify.warning('Заповніть усі поля,будьте добрі!');
      return;
    }
    // const emailPattern ='/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/';
    // if(emailPattern !== elements.mail.value){
    //   Notiflix.Notify.warning('Invalid Credentials of email');
    //   return;
    // }else{
    //   Notiflix.Notify.success('Your rate was add!');
    // }
    patchRating(indeficator, elements.mail.value)
    .then
    (post => {Notiflix.Notify.success('Your rate was add!');
    openModalForm.close();
  })
    .catch(error => Notiflix.Notify.failure('Something goes wrong!'));
  }
}

