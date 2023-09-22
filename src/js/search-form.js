import Notiflix from "notiflix";
import { debounce } from 'lodash';
import { getAllRecipes } from "./Api/api-recipe_info"
import { getAllAreas } from "./Api/api-areas"
import { getAllIngredients } from "./Api/api-ingredients"
import { renderCard } from "./render.js"
import {  getRecipesByTime, getRecipesByArea } from "./Api/api-filters"
import {rendersAllRecipes, getCurrentRecipeSetUp} from "./render-recipes-list"
import { getRecipeByCategory } from "./Api/api-fetch-recipes"


const elements = {
    form: document.querySelector('.search-form'),
        
    overlay: document.querySelector('.search-overlay'),   
    searchInput: document.querySelector('.input-form'),
    btnCloseSearch: document.querySelector('.btn-close-search'),

    inputTime: document.querySelector('.input-time'),
    btnSelectTime: document.querySelector('.btn-select-time'),
    selectTime: document.querySelector('.select-time'),
    
    inputArea: document.querySelector('.input-area'),
    btnSelectArea: document.querySelector('.btn-select-area'),
    selectArea: document.querySelector('.select-area'),

    inputIngredients: document.querySelector('.input-ingredients'),
    btnSelectIngredients: document.querySelector('.btn-select-ingredients'),
    selectIngredients: document.querySelector('.select-ingredients'),

    btnReset: document.querySelector('.btn-reset-filter'),

    galleryRecipes: document.querySelector('.gallery-recipes'),
    btnHeart: document.querySelector('.heart')
}

// -----Заповнення випадаючих списків форми

     getAllRecipes()
    .then((data) => {        
        elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))
    })
    .catch ((error) => {
        Notiflix.Notify.failure("Sorry, no pecipes were found for your request. Please try again.")
    }) 
        
    getAllAreas()
    .then((data) => {        
        let li = data.map(({ id, name }) => `<li class="option-area" value="${id}">${name}</li>`).join('');
        elements.selectArea.insertAdjacentHTML("beforeend", li);    
    })
    .catch ((error) => {
        Notiflix.Notify.failure("Sorry, no areas were found for your request. Please try again.")
    })  

    getAllIngredients() 
     .then((data) => {         
         let li = data.map(({ _id, name }) => `<li class="option-ingredient" value="${_id}">${name}</li>`).join('');
         
        elements.selectIngredients.insertAdjacentHTML("beforeend", li);    
    })
    .catch ((error) => {
        Notiflix.Notify.failure("Sorry, no ingredients were found for your request. Please try again.")
    }) 

// --------------------------Пошук та рендер рецептів по тегу ----------------
elements.searchInput.addEventListener('change', debounce(handlerSearchInput, 300));

function handlerSearchInput() {
    const inputValue = elements.searchInput.value.trim().toLowerCase();     
    elements.btnCloseSearch.style.display = "flex";

    getAllRecipes()
        .then((data) => {
            const recipes = data.results;
            const filteredRecipesbyTag = recipes.filter((recipe) => {
                const lowerCaseTags = recipe.tags.map(tag => tag.toLowerCase());
                return lowerCaseTags.includes(inputValue);
            })
            if (inputValue === '' && filteredRecipesbyTag.length === 0) {
                Notiflix.Notify.info("No recipes found for the specified tag.");
            }
            elements.searchInput.value = inputValue;
            elements.galleryRecipes.innerHTML = renderCard(filteredRecipesbyTag);         
        })
        .catch((error) => {
            Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.");
        });
        
}

elements.btnCloseSearch.addEventListener('click', () => {
    elements.searchInput.value = '';
    elements.btnCloseSearch.style.display = 'none'; 
});
 
// -------------------Пошук та рендер рецептів за часом приготування---------------
elements.btnSelectTime.addEventListener('click', () => elements.selectTime.style.display = "flex")

elements.selectTime.addEventListener('mouseleave', () => elements.selectTime.style.display = "none" )

elements.selectTime.addEventListener('click', handlerTimeSelect)
let selectedTimeElement;

function handlerTimeSelect(evt) {
   
    if (!evt.target.classList.contains('active')) {       
        if (selectedTimeElement) {
            selectedTimeElement.classList.remove('active');
        }       
        evt.target.classList.add('active');        
        selectedTimeElement = evt.target;
        elements.inputTime.value = evt.target.textContent
        const selectedTime = Number.parseInt(elements.inputTime.value)  
        elements.selectTime.style.display = "none" 
          
            getRecipesByTime(selectedTime)
                .then((data) => {            
                    elements.galleryRecipes.innerHTML = ""
                    elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))         
                })
                .catch ((error) => {
                    Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.")
                });
    }        
    
}

// -------------------Пошук та рендер рецептів за країною походження---------------

elements.btnSelectArea.addEventListener('click', () => elements.selectArea.style.display = "flex")

elements.selectArea.addEventListener('mouseleave', () => elements.selectArea.style.display = "none" )

elements.selectArea.addEventListener('click', handlerAreaSelect)
let selectedAreaElement;
function handlerAreaSelect(evt) {
    if (!evt.target.classList.contains('active')) {       
        if (selectedAreaElement) {
            selectedAreaElement.classList.remove('active');
        }
        evt.target.classList.add('active');
        selectedAreaElement = evt.target;        
        elements.inputArea.value = evt.target.textContent
        const selectedArea = elements.inputArea.value  
        elements.selectArea.style.display = "none"
       
        getRecipesByArea(selectedArea)
            .then((data) => {
                if (data.results.length !== 0) {
                    elements.galleryRecipes.innerHTML = ""
                    elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))
                }
            })
            .catch((error) => {
                Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.")
            })
    }
}
// -------------------Пошук та рендер рецептів за інгридієнтами---------------

elements.btnSelectIngredients.addEventListener('click', () => elements.selectIngredients.style.display = "flex");

elements.selectIngredients.addEventListener('mouseleave', () => elements.selectIngredients.style.display = "none" )

elements.selectIngredients.addEventListener('click', handlerIngredientSelect);
let selectedIngredientElement; 
function handlerIngredientSelect(evt) {
    if (!evt.target.classList.contains('active')) {
        if (selectedIngredientElement) {
            selectedIngredientElement.classList.remove('active');
        }
        evt.target.classList.add('active');
        selectedIngredientElement = evt.target;
        elements.inputIngredients.value = selectedIngredientElement.textContent;
        const ingredientId = selectedIngredientElement.getAttribute('value'); 
        elements.selectIngredients.style.display = "none";
        // Отримати рецепти за інгредієнтом
        getAllRecipes()
            .then((data) => {
                const recipes = data.results;
                const filteredRecipesbyIngredient = recipes.filter((recipe) => {
                    const ingredientIds = recipe.ingredients.map(ingredient => ingredient.id);
                    return ingredientIds.includes(ingredientId);
                })

                if (filteredRecipesbyIngredient.length === 0) {
                    Notiflix.Notify.info("No recipes found for the specified ingredient.");
                }

                elements.galleryRecipes.innerHTML = renderCard(filteredRecipesbyIngredient);
            })
            .catch((error) => {
                Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.");
            });
    }
}
// ------------Очищення форми кнопкою reset--------
elements.btnReset.addEventListener('click', () => {
    elements.form.reset();

    if (document.querySelector(".categories-btn").classList.contains("active")) {
        rendersAllRecipes() 
    } else {
        const {category, page, limit, container} = getCurrentRecipeSetUp();


        getRecipeByCategory(category, page, limit).then((response) => { 
            container.innerHTML = ""
            container.insertAdjacentHTML("beforeend", renderCard(response.results))
          })

    }
    
})    
