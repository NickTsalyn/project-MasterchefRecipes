import { save, load } from "./storage-service";
import { getRecipeById } from "./Api/api-fetch-recipe-by-id";
import { renderCard } from "./render";
import { zip } from "lodash";

const refs = {
  favRecipesGallery: document.querySelector(".fav-recipes-list"),
  emptyPageSection: document.querySelector(".empty-section-wrapper"),
  favContainer: document.querySelector(".fav-container"),
  buttonList: document.querySelector(".fav-categories-list"),
}
const storageArr = load("favRecipes")
const storageKey = "favRecipes"


refs.buttonList.addEventListener("click", categoryBtnClickHandler)

function categoryBtnClickHandler (e) {
  const btnEl = e.target.closest(".fav-category")
  const btn = e.target.closest(".fav-category-btn")

  if (btnEl && btnEl.dataset.category) {
    const btnCategory = btnEl.dataset.category
    const newArr = storageArr.filter(({category}) => category === btnCategory )

    renderFavCards(newArr)
  } else if (btnEl && btnEl.dataset.value === 'all') {
    const newStorageArr = load("favRecipes")
    renderFavCards(newStorageArr)
  }
}


renderFavCards(storageArr);
renderFavCategories(storageArr);

refs.favRecipesGallery.addEventListener('click', heartBtnClickHandler)

function heartBtnClickHandler (e) {
  if (e.target.closest(".heart")) {
    let currentCard = e.target.closest(".card-item")
    const currentId = currentCard.dataset.id
    const currentCategory = currentCard.dataset.category
    const storage = load("favRecipes")

  // NOT ACTIVE BTN 
    if (!currentCard.classList.contains("active")) {
      currentCard.classList.add("active");
      const obj = createRecipeObject(currentId, currentCategory)

      if (!storage) {
        const newArr = [];
        newArr.push(obj)
        save(storageKey, newArr) 
      } else {
        storage.push(obj)
        const newArr = storage;
        save(storageKey, newArr) 
      }

      return
    }


    //  ACTIVE BTN 
    if (currentCard.classList.contains("active")) {
      currentCard.classList.remove("active")

      const newArr = storage.filter(({id}) => currentId!==id )
      save(storageKey, newArr) 
      return
    }
    

  }
}

function createRecipeObject (id, category){
  return {
    id,
    category
  }
}



function renderFavCategories(arr) {
  //CHECKS IF STORAGE ARR IS EMPTY
  if (arr.length > 0) {
    refs.buttonList.classList.remove("hidden")
    // RENDERS CATEGORIES BTN LIST
    const categoriesArr = arr.map(({category}) => category).filter((el, i, arr) => arr.indexOf(el) === i).sort((a,b) => a.localeCompare(b))
    categoriesArr.map(el => {
      refs.buttonList.insertAdjacentHTML("beforeend",
      `<li class="fav-category" data-category=${el}>
              <button class="fav-category-btn">${el}</button>
        </li>` 
    )
    })
    
  }
}


function renderFavCards(arr) {
  //CHECKS IF STORAGE ARR IS EMPTY
  if (arr.length > 0) {
    refs.emptyPageSection.classList.add("hidden")
    refs.favRecipesGallery.classList.remove("hidden")
    refs.favRecipesGallery.innerHTML = "";
    
    arr.map(({id}) => {
      getRecipeById(id).then((response) => {
        const markupArr = [response]
      
        refs.favRecipesGallery.insertAdjacentHTML("beforeend", renderCard(markupArr))
    })
  })
  }
}

/*  */

// /*
//  preview  
//  title    
// description  
// rating

//  *  */ 
// const cart=document.querySelector('.fav-list-recipes');
// const nothing=document.querySelector('.nothing');
// const secRecipes=document.querySelector('.fav-recipes');
// const categories=document.querySelector('.fav-categories');


// // const theme = localStorage.getItem("ui-theme");
// //  В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.
// // const savedSettings = localStorage.getItem("settings");
// // const parsedSettings = JSON.parse(savedSettings);


// let listCards='';
// const recipes=[
//     // {
//     //     preview:"./img/cards.jpg",
//     //     title :"BANANA PANCAKES"    ,
//     //     description:"Banana pancakes are a fluffy and sweet breakfast dish made with mashed ripe bananas, eggs, flour, and a touch of cinnamon, cooked to perfection on a skillet and served with toppings of your choice.",  
//     //     rating:"4.5",
//     // },
//     // {
//     //     preview:"./img/cards.jpg",
//     //     title :"BANANA PANCAKES"    ,
//     //     description:"Banana pancakes are a fluffy and sweet breakfast dish made with mashed ripe bananas, eggs, flour, and a touch of cinnamon, cooked to perfection on a skillet and served with toppings of your choice.",  
//     //     rating:"4.5",
//     // }
// ]
// for (const recipe of recipes) {
//   console.log('t',recipe.title);
//   listCards+=`            <li class="fav-recipe-card">
//     <img class="fav-card-img" src="${recipe.preview}" alt="${recipe.title}">
//     <button class="fav-button-heart">
//       <svg class="fav-heart" width="22" height="22">
//         <use href="./img/icons.svg#heart"></use>
//       </svg>
//     </button>
//       <h3 class="fav-card-title">${recipe.title}</h3>
//       <p class="fav-cart-text">${recipe.description}</p>
//       <div class="fav-cart-footer">
//         <p class="fav-rate">${recipe.rating}</p>
//        <div class="fav-cart-stars">
//          <svg class="fav-star" width="18" height="18">
//            <use href="/img/icons.svg#star"></use>
//          </svg>
//        </div>
//         <button class="fav-card-button">See recipe</button>
//       </div>
//   </li>
// `;
// }
// // if (listCards==0) {
// //     nothing.style.display='block';
// //     secRecipes.style.display='none';
// //     categories.style.display='none'
// // }
// // else{
// //     nothing.style.display='none';
// //     secRecipes.style.display='block';
// //     categories.style.display='block'
// //     cart.innerHTML=listCards
// // }
