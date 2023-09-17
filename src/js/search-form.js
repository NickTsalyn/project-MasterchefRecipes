import Notiflix from "notiflix";
import { debounce, set } from 'lodash';

import { getAllRecipes } from "./Api/api-recipe_info"
import { getAllAreas } from "./Api/api-areas"
import { getAllIngredients } from "./Api/api-ingredients"
import { renderCard } from "./render.js"
import {  getRecipesByTime, getRecipesByArea, getRecipesByIngredient } from "./Api/api-filters"

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

    btnReset: document.querySelector('.reset-search'),

    galleryRecipes: document.querySelector('.gallery-recipes'),
    btnHeart: document.querySelector('.heart')
}
console.log(elements.form);
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
         let li = data.map(({ name }) => `<li class="option-ingredient" data-value="${name}">${name}</li>`).join('');
         
        elements.selectIngredients.insertAdjacentHTML("beforeend", li);    
    })
    .catch ((error) => {
        Notiflix.Notify.failure("Sorry, no areas were found for your request. Please try again.")
    }) 
// -------------------------------------------

elements.searchInput.addEventListener('change', debounce((evt) => {
    const value = elements.searchInput.value.trim().toLowerCase();

    //   getAllRecipes()
    //     .then((data) => {  
    //         const tags = data.results.map(({ tags }) => console.log(tags)).join('')
    //         const selectedTag = tags.filter(tag => {
    //             if (tag === value) {                           
    //                 elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data))
    //             }
                
    //         })
    //         // tags.filter(tag => {
    //         //     if (tag === value) {
    //         //         recipesByTag.push()
    //         //     }
    //         // })
    //         // console.log(recipesByTag);
    //     })
    //  .catch ((error) => {
    //     Notiflix.Notify.failure("Sorry, no tags were found for your request. Please try again.")
    // })    
    
}, 300))

elements.btnSelectTime.addEventListener('click', () => {    
    elements.selectTime.style.display = "flex"    
})

elements.selectTime.addEventListener('click', handlerTimeSelect)
function handlerTimeSelect(evt) {

    evt.target.classList.add('active')     
    elements.inputTime.value = evt.target.textContent
    const selectedTime = Number.parseInt(elements.inputTime.value)
    console.log(selectedTime);
    elements.selectTime.style.display = "none" 
    getRecipesByTime(selectedTime)
        .then((data) => {            
            elements.galleryRecipes.innerHTML = ""
            elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))         
        })
        .catch ((error) => {
            Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.")
        })           
}

elements.btnSelectArea.addEventListener('click', () => {    
    elements.selectArea.style.display = "flex"    
})

elements.selectArea.addEventListener('click', handlerAreaSelect)
function handlerAreaSelect(evt) {

    evt.target.classList.add('active')     
    elements.inputArea.value = evt.target.textContent
    const selectedArea = elements.inputArea.value
    console.log(selectedArea);
    elements.selectArea.style.display = "none" 
    getRecipesByArea(selectedArea)
        .then((data) => {    
            console.log(data.results);
            elements.galleryRecipes.innerHTML = ""
            elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))         
        })
        .catch ((error) => {
            Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.")
        })             
}

elements.btnSelectIngredients.addEventListener('click', () => {    
    elements.selectIngredients.style.display = "flex"    
})

elements.selectIngredients.addEventListener('click', handlerIngredientSelect)
function handlerIngredientSelect(evt) {

    evt.target.classList.add('active')     
    elements.inputIngredients.value = evt.target
    console.log(evt.target);
    const selectIngredient = elements.inputIngredients.value
    console.log(selectIngredient);
    elements.selectIngredients.style.display = "none" 
    getRecipesByIngredient(selectIngredient)
        .then((data) => {  
            console.log(data.results);
            elements.galleryRecipes.innerHTML = ""
            elements.galleryRecipes.insertAdjacentHTML("beforeend", renderCard(data.results))         
        })
        .catch ((error) => {
            Notiflix.Notify.failure("Sorry, no recipes were found for your request. Please try again.")
        })             
}


