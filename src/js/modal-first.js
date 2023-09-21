import { getRecipesDetail } from './Api/api-recipe_info';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { save, load } from './storage-service';
import { createRecipeObject } from './favorite-storage';
import closeIcon from '../img/icons.svg#close-icon';
import starImg from '../img/icons.svg#star';

import './modal-rating';
import { openRatingModal } from './modal-rating';

import YouTubePlayer from 'youtube-player';

const seeFullRecipec = {
  item1: document.querySelector('.gallery-recipes'),
  item2: document.querySelector('.popular-list'),
};

seeFullRecipec.item1.addEventListener('click', handlerOnClick);
seeFullRecipec.item2.addEventListener('click', handlerOnClick);

function handlerOnClick(evt) {
  evt.preventDefault();
  const modalOpenElement = evt.target.closest('.modal-open-js');

  if (!modalOpenElement) {
    return;
  }
  let player = null;
  const value = modalOpenElement.dataset.id;

  getRecipesDetail(value).then(respInfo => {
    const parts = respInfo.youtube.split('=');
    const videoId = parts[1];
    const localId = load('favRecipes');
    const filteredArr = localId.find(({ id }) => {
      return id === respInfo._id;
    });

    const instance = basicLightbox.create(`
    <div class="modal-frame " >
       
        <button class="modal-close-button">
          <svg class="modal-close-icon" width="20" height="20">
          <use href=${closeIcon}></use>
        </svg>
        </button>

<div class="swap-container-top">
       <div class="iframeContainer"></div>
<div>
        <h2 class="dish-title">${respInfo.title}</h2></div>
</div>
        <div class="swap-container">

        <div class="rait-container">

        <p class="recipe-rating recipe-box-text">${respInfo.rating}</p>
        <ul class="icon-list-modal">
           ${createRatingMarkup(respInfo.rating)}
        </ul>
        
        <p class="preparing-time recipe-box-text">${respInfo.time} min</p>
        
      </div>
      
      <div class="ingredients-container">
            <ul>
              ${respInfo.ingredients
                .map(
                  ingredient => `
                <li class="ingredients-container-box">
                  <span class="ingredient-name">${ingredient.name}</span>
                  <span class="ingredient-measure">${ingredient.measure}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
          <div class="tag-container"></div>
          </div>
          <p class="dish-instructions">${respInfo.instructions}</p>
          <div class="btn-container">
            <button type="button" data-id="${respInfo._id}" data-category="${
      respInfo.category
    }" class="btn-modal-general btn-modal-first"></button>

            

            <button type="button" data-id="${
              respInfo._id
            }" class="btn-modal-general btn-modal-secont give-rating-btn">Give a rating</button>

            </div>
             </div> `);
    const btnAddClass = instance.element().querySelector('.btn-modal-first');
    btnAddClass.textContent = 'Add to favorite';
    if (filteredArr) {
      btnAddClass.classList.add('active');
      btnAddClass.textContent = 'Remove from favorite';
    }

    const tagContainer = instance.element().querySelector('.tag-container');

    if (respInfo.tags && respInfo.tags.length > 0) {
      respInfo.tags.forEach(tag => {
        if (tag.trim() !== '') {
          const tagSpan = document.createElement('span');
          tagSpan.textContent = `#${tag}`;
          tagSpan.classList.add('tag');

          tagContainer.appendChild(tagSpan);
        }
      });
    }
    const iframeContainer = instance
      .element()
      .querySelector('.iframeContainer');

    if (respInfo.youtube !== '') {
      const player = YouTubePlayer(iframeContainer, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
        },
      });
    } else {
      const image = document.createElement('img');
      image.src = respInfo.thumb;
      iframeContainer.appendChild(image);
    }
    const closeButton = instance.element().querySelector('.modal-close-button');

    closeButton.addEventListener('click', () => {
      instance.close();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });

    instance.show();

    const addRatingBtn = document.querySelector('.give-rating-btn');

    addRatingBtn.addEventListener('click', handlerModalRating);
    function handlerModalRating(id) {
      const indeficator = respInfo._id;
      openRatingModal(indeficator);
    }

    /**
  |============================
  |  Local storage
  |============================
*/
    const refs = {
      recipeDetailModal: document.querySelector('.modal-frame'),
    };

    const storageKey = 'favRecipes';
    refs.recipeDetailModal.addEventListener('click', favBtnClickHandler);

    function favBtnClickHandler(e) {
      if (e.target.closest('.btn-modal-first')) {
        let currentCard = e.target.closest('.btn-modal-first');
        const currentId = currentCard.dataset.id;
        const currentCategory = currentCard.dataset.category;
        const storageArr = load(storageKey);

        // NOT ACTIVE BTN
        if (!currentCard.classList.contains('active')) {
          currentCard.classList.add('active');
          const obj = createRecipeObject(currentId, currentCategory);
          btnAddClass.textContent = 'Remove from favorite';
          if (!storageArr) {
            const newArr = [];
            newArr.push(obj);
            save(storageKey, newArr);
          } else {
            storageArr.push(obj);
            const newArr = storageArr;
            save(storageKey, newArr);
          }
          return;
        }
        //  ACTIVE BTN
        if (currentCard.classList.contains('active')) {
          currentCard.classList.remove('active');
          btnAddClass.textContent = 'Add to favorite';

          const newArr = storageArr.filter(({ id }) => currentId !== id);
          save(storageKey, newArr);
          return;
        }
      }
    }
  });
}
/**
  |============================
  | Рандер рейтингової шкали
  |============================
*/
function createRatingMarkup(num) {
  let ratingNum = Math.round(num);
  let ratingMarkup = [];

  for (let i = 0; i < 5; i += 1) {
    if (ratingNum >= 1) {
      ratingMarkup.push(`
        <li class="icon-rating checked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${starImg}></use></svg></li>
        `);
      ratingNum -= 1;
    } else {
      ratingMarkup.push(`
        <li class="icon-rating unchecked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${starImg}></use></svg></li>
        `);
    }
  }

  return ratingMarkup.join('');
}
