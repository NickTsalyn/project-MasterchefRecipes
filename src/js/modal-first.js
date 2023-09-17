import { getRecipesDetail } from './Api/api-recipe_info';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const seeFullRecipec = document.querySelector('.gallery-recipes');

seeFullRecipec.addEventListener('click', handlerOnClick);

function handlerOnClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('card-img')) {
    return;
  }
  const currentElement = evt.target.closest('.card-item');
  const value = currentElement.dataset.id;
  console.log(value);
  getRecipesDetail(value).then(respInfo => {
    console.log(respInfo);
    const instance = basicLightbox.create(`
        <div>
      <button class="btn">
        <svg class="on-close" width="10" height="10">
          <use href="./img/icons.svg#close-icon"></use>
        </svg>
      </button>
      <iframe
        min-width="295"
        min-height="295"
        src="${respInfo.youtube ? respInfo.youtube : respInfo.thumb}"
      ></iframe>
      <h2 class="dish-title">${respInfo.title}</h2>
      <p class="recipe-rating">${respInfo.rating}</p>
      <ul class="icon-list">
        <li class="icon-rating">
          <svg class="icon-star" width="18" height="18">
            <use href="./img/icons.svg#star"></use>
          </svg>
        </li>
        <li class="icon-rating">
          <svg class="icon-star" width="18" height="18">
            <use href="./img/icons.svg#star"></use>
          </svg>
        </li>
        <li class="icon-rating">
          <svg class="icon-star" width="18" height="18">
            <use href="./img/icons.svg#star"></use>
          </svg>
        </li>
        <li class="icon-rating">
          <svg class="icon-star" width="18" height="18">
            <use href="./img/icons.svg#star"></use>
          </svg>
        </li>
        <li class="icon-rating">
          <svg class="icon-star" width="18" height="18">
            <use href="./img/icons.svg#star"></use>
          </svg>
        </li>
      </ul>
      <div><p class="preparing-time">${respInfo.time} min</p></div>
    </div>
    <div class="ingredients-container">
          <h3>Інгредієнти:</h3>
          <ul>
            ${respInfo.ingredients
              .map(
                ingredient => `
              <li>
                <span class="ingredient-name">${ingredient.name}</span>
                <span class="ingredient-measure">${ingredient.measure}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
         <p class="dish-instructions">${respInfo.instructions}</p>
          <button type="button" class="btn">Add to favorite</button>
          <button type="button" class="btn">Give a rating</button>`);
    console.log(respInfo);
    instance.show();
  });
}

// import { getRecipesDetail } from './Api/api-recipe_info';
// import * as basicLightbox from 'basiclightbox';
// document.addEventListener('DOMContentLoaded', function () {
//   const seeFullRecipec = document.querySelector('.see-recipe');

//   seeFullRecipec.addEventListener('click', handlerOnClick);

//   function handlerOnClick(evt) {
//     evt.preventDefault();
//     if (!evt.target.classList.contains('card-img' || 'see-recipe')) {
//       return;
//     }
//     getRecipesDetail(_id).then(respInfo => {
//       const instance = basicLightbox.create(`
//         <div>
//       <button class="btn">
//         <svg class="on-close" width="10" height="10">
//           <use href="./img/icons.svg/#close-icon"></use>
//         </svg>
//       </button>
//       <iframe
//         min-width="295"
//         min-height="295"
//         src="${respInfo.youtube ? respInfo.youtube : respInfo.thumb}"
//       ></iframe>
//       <h2 class="dish-title">${respInfo.title}</h2>
//       <p class="recipe-rating">${respInfo.rating}</p>
//       <ul class="icon-list">
//         <li class="icon-rating">
//           <svg class="icon-star" width="18" height="18">
//             <use href="./img/icons.svg/#star"></use>
//           </svg>
//         </li>
//         <li class="icon-rating">
//           <svg class="icon-star" width="18" height="18">
//             <use href="./img/icons.svg/#star"></use>
//           </svg>
//         </li>
//         <li class="icon-rating">
//           <svg class="icon-star" width="18" height="18">
//             <use href="./img/icons.svg/#star"></use>
//           </svg>
//         </li>
//         <li class="icon-rating">
//           <svg class="icon-star" width="18" height="18">
//             <use href="./img/icons.svg/#star"></use>
//           </svg>
//         </li>
//         <li class="icon-rating">
//           <svg class="icon-star" width="18" height="18">
//             <use href="./img/icons.svg/#star"></use>
//           </svg>
//         </li>
//       </ul>
//       <div><p class="preparing-time">${respInfo.time} min</p></div>
//     </div>
//     <div class="ingredients-container">
//           <h3>Інгредієнти:</h3>
//           <ul>
//             ${respInfo.ingredients
//               .map(
//                 ingredient => `
//               <li>
//                 <span class="ingredient-name">${ingredient.name}</span>
//                 <span class="ingredient-measure">${ingredient.measure}</span>
//               </li>
//             `
//               )
//               .join('')}
//           </ul>
//         </div>
//          <p class="dish-instructions">${respInfo.instructions}</p>
//           <button type="button" class="btn">Add to favorite</button>
//           <button type="button" class="btn">Give a rating</button>`);
//       instance.show();
//     });
//   }
// });
