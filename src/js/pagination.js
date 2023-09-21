import Pagination from 'tui-pagination';  
import {renderCard} from './render.js'
import { getRecipeByCategory } from "./Api/api-fetch-recipes.js";


const container = document.querySelector('.tui-pagination');
const categoriesContainer= document.querySelector(".categories-wrapper");
const  recipesContainer= document.querySelector(".gallery-recipes")

const options = { 
    totalItems: 100,
    itemsPerPage: 9,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
};
const pagination = new Pagination(container, options);

// ===============================================================
const buttonsPag=document.querySelectorAll(".tui-page-btn");

buttonsPag.forEach(function(button) {
    button.addEventListener("click", onClickPagination)
    
});


function onClickPagination(e){
    e.preventDefault();
    const activeCategory=document.querySelector('.active')
    // console.log(e.target.textContent);
    

    
    if (e.target.textContent=='first') {
        
    }
    if (e.target.textContent=='prev') {
        
    }
    if (e.target.textContent=='next') {
        
    }
    if (e.target.textContent=='last') {
        
    }
    if (e.target.textContent=='...') {
        
    }
    if (activeCategory.textContent!=='All categories') {
        while (recipesContainer.firstChild) {
            recipesContainer.removeChild(recipesContainer.firstChild);
          }
        getRecipeByCategory(activeCategory.textContent, e.target.textContent, '8').then((response) => {
            // console.log(response.results);
            
            recipesContainer.insertAdjacentHTML("beforeend", renderCard(response.results))
        });
        
    }
    
};

// ===========================================================
