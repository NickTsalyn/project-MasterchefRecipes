// ------------ Розмітка картки страви -----
import { load } from './storage-service';
import heartImg from '../img/icons.svg#heart'

const storageArr = load('favRecipes');
export function renderCard(arr) {
  const cardRecipe = arr
    .map(({ _id, preview, title, description, rating, category }) => {
      let isActive = '';
      if (storageArr && storageArr.filter(({ id }) => id === _id).length > 0) {
        isActive = 'active';
      }
      return ` 
    <div  class="card-item modal-open-js  ${isActive}" data-id="${_id}" data-category="${category}" style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${preview}), lightgray -36.5px 0px / 129.2% 112.544% no-repeat; background-size: cover">
      <button class="heart" type="button">
        <svg class="icon-heart" width="22" height="22">
        <use href=${heartImg}></use></svg>
      </button>
    
      <div class="card-descr">
        <h3 class="recipe-title ">${title}</h3>
        <p class="recipe-descr ">${description}</p>
        <div class="secondary-desc">
          <div class="rating-container">
            <p class="recipe-rating ">${rating}</p>
            <ul class="icon-list">
              ${createRatingMarkup(rating)}
            </ul>
          </div>
         <button class="see-recipe  "  type="button" >See recipe</button>
        </div>
      </div>  
    </div>`;
    })
    .join('');
  return cardRecipe;
}

function createRatingMarkup(num) {
  let ratingNum = Math.round(num);
  let ratingMarkup = [];

  for (let i = 0; i < 5; i += 1) {
    if (ratingNum >= 1) {
      ratingMarkup.push(`
        <li class="icon-rating checked"><svg class="icon-star" width="15" height="15"><use href="./img/icons.svg#star"></use></svg></li>
        `);
      ratingNum -= 1;
    } else {
      ratingMarkup.push(`
        <li class="icon-rating unchecked"><svg class="icon-star" width="16" height="16"><use href="./img/icons.svg#star"></use></svg></li>
        `);
    }
  }

  return ratingMarkup.join('');
}
