import { getRecipesDetail } from './Api/api-recipe_info';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import './modal-rating';
import { openRatingModal } from './modal-rating';

import YouTubePlayer from 'youtube-player';

const seeFullRecipec = document.querySelector('.gallery-recipes');

seeFullRecipec.addEventListener('click', handlerOnClick);

function handlerOnClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('card-item')) {
    return;
  }
  const currentElement = evt.target.closest('.card-item');
  const value = currentElement.dataset.id;

  getRecipesDetail(value).then(respInfo => {
    const parts = respInfo.youtube.split('=');
    const videoId = parts[1];

    const instance = basicLightbox.create(`
    <div class="modal-frame">
          
        <button class="modal-close-button">
          <svg class="modal-close-icon" width="20" height="20">
          <use href="./img/icons.svg#close-icon"></use>
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
            <button type="button" class="btn-modal-general btn-modal-first">Add to favorite</button>

            

            <button type="button" data-id="${
              respInfo._id
            }" class="btn-modal-general btn-modal-secont give-rating-btn">Give a rating</button>

            </div>
             </div> `);

    const tagContainer = instance.element().querySelector('.tag-container');
    if (respInfo.tags && respInfo.tags.length > 0) {
      respInfo.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = `#${tag}`;
        tagSpan.className = 'tag';

        tagContainer.appendChild(tagSpan);
      });
    }

    const iframeContainer = instance
      .element()
      .querySelector('.iframeContainer');

    if (respInfo.youtube !== '') {
      const player = YouTubePlayer(iframeContainer, {
        videoId: videoId,
      });
      player.playVideo().then(() => '');
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
  });
}

function createRatingMarkup(num) {
  let ratingNum = Math.round(num);
  let ratingMarkup = [];

  for (let i = 0; i < 5; i += 1) {
    if (ratingNum >= 1) {
      ratingMarkup.push(`
        <li class="icon-rating checked modal-icon"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg#star"></use></svg></li>
        `);
      ratingNum -= 1;
    } else {
      ratingMarkup.push(`
        <li class="icon-rating unchecked modal-icon"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg#star"></use></svg></li>
        `);
    }
  }

  return ratingMarkup.join('');
}
