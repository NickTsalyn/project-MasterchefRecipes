// ------------ Розмітка картки страви -----

export function renderCard(arr) {    
    const cardRecipe = arr.map(({preview, title, description, rating}) => ` 
  <div class="card-item">
    <button class="heart" type="button">
      <svg class="icon-heart" width="22" height="22">
        <use href="./img/icons.svg#heart"></use></svg>
    </button>
    <img class="card-img" src="${preview}" alt="${title}">
    <div class="card-descr">
      <h3 class="recipe-title">${title}</h3>
      <p class="recipe-descr">${description}</p>
      <p class="recipe-rating">${rating}</p>
      <ul class="icon-list">
        <li class="icon-rating"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg/#star"></use></svg></li>
        <li class="icon-rating"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg/#star"></use></svg></li>
        <li class="icon-rating"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg/#star"></use></svg></li>
        <li class="icon-rating"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg/#star"></use></svg></li>
        <li class="icon-rating"><svg class="icon-star" width="18" height="18"><use href="./img/icons.svg/#star"></use></svg></li>
      </ul>
       <button class="see-recipe" type="button">See recipe</button>
    </div>  
  </div>`).join('');
    catInfo.insertAdjacentHTML("beforeend", cardRecipe)
    
}

