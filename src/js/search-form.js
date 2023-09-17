import Notiflix from "notiflix";

import { getAllRecipes } from "./Api/api-recipe_info"
import { renderCard } from "./render.js"

const elements = {
    searchInput: document.querySelector('.input-form'),
    selectTime: document.querySelector('.select-time'),
    selectArea: document.querySelector('.select-area'),
    selectIngredients: document.querySelector('.select-ingredients'),
    galleryRecipes: document.querySelector('.gallery-recipes')
}

    getAllRecipes()
    .then((data) => {
        
        elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))
    })
    .catch ((error) => {
        Notiflix.Notify.failure("Sorry, no pecipes were found for your request. Please try again.")
    }) 


