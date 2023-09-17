import { getRecipesDetail } from './Api/api-recipe_info';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Player from '@vimeo/player';

const seeFullRecipec = document.querySelector('.gallery-recipes');

seeFullRecipec.addEventListener('click', handlerOnClick);

function handlerOnClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('card-item')) {
    return;
  }
  const currentElement = evt.target.closest('.card-item');
  const value = currentElement.dataset.id;
  console.log(value);
  getRecipesDetail(value).then(respInfo => {
    console.log(respInfo);
    const instance = basicLightbox.create(`
    <div class="modal-frame">
          
        <button class="modal-close-button">
          <svg class="modal-close-icon" width="20" height="20">
          <use href="./img/icons.svg#close-icon"></use>
        </svg>
        </button>


       <div class="iframeContainer"></div>

        <h2 class="dish-title">${respInfo.title}</h2>

        <div class="swap-container">

        <div class="rait-container">

        <p class="recipe-rating recipe-box-text">${respInfo.rating}</p>
        <ul class="icon-list-modal">
          <li class="icon-rating-modal">
            <svg class="icon-star" width="14" height="14">
              <use href="./img/icons.svg#star"></use>
            </svg>
          </li>
          <li class="icon-rating-modal">
            <svg class="icon-star" width="14" height="14">
              <use href="./img/icons.svg#star"></use>
            </svg>
          </li>
          <li class="icon-rating-modal">
            <svg class="icon-star" width="14" height="14">
              <use href="./img/icons.svg#star"></use>
            </svg>
          </li>
          <li class="icon-rating-modal">
            <svg class="icon-star" width="14" height="14">
              <use href="./img/icons.svg#star"></use>
            </svg>
          </li>
          <li class="icon-rating-modal">
            <svg class="icon-star" width="14" height="14">
              <use href="./img/icons.svg#star"></use>
            </svg>
          </li>
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
            <button type="button" class="btn-modal-general btn-modal-secont">Give a rating</button>
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
      const iframe = document.createElement('iframe');
      iframe.id = 'vimeo-player';
      iframe.src = respInfo.youtube;
      iframe.frameborder = '0';
      iframe.allowfullscreen = true;
      iframe.allow = 'autoplay; encrypted-media';
      iframeContainer.appendChild(iframe);
    } else {
      const image = document.createElement('img');
      image.src = respInfo.thumb;
      iframeContainer.appendChild(image);
    }

    instance.show();
  });
}
