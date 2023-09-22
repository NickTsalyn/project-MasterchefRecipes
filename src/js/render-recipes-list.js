import { getRecipeByCategory } from "./Api/api-fetch-recipes"
import { getAllRecipes } from "./Api/api-fetch-recipes"
import { renderCard } from "./render"
import {zeroPagination} from "./pagination.js"

const categoriesRefs = {
  allCategoriesBtn: document.querySelector(".categories-btn"),
  categoriesContainer: document.querySelector(".categories-wrapper"),
  recipesContainer: document.querySelector(".gallery-recipes")
}

const tempValues = {
  category: "Beef",
  page: 1,
  limit: 9,
  activeCategory: "",
}
rendersAllRecipes()
categoriesRefs.allCategoriesBtn.addEventListener("click", allCategoriesBtnHandler)

function allCategoriesBtnHandler () {
  rendersAllRecipes()
}

categoriesRefs.categoriesContainer.addEventListener("click", categoriesContainerHandler)

function categoriesContainerHandler (e) {
  e.preventDefault()
  if (e.target.closest(".category-link")) {
    
    if (categoriesRefs.allCategoriesBtn.classList.contains("active")) {
      categoriesRefs.allCategoriesBtn.classList.remove("active")
    }
    if (tempValues.activeCategory) {
      tempValues.activeCategory.classList.remove("active")
    }
    tempValues.activeCategory = e.target.closest(".category-link");
    tempValues.activeCategory.classList.add("active")


    tempValues.category =  e.target.closest(".category-link").dataset.name

    changeLimitByViewportWidth ()
    getRecipeByCategory(tempValues.category, tempValues.page, tempValues.limit).then((response) => { 
      categoriesRefs.recipesContainer.innerHTML = ""
      categoriesRefs.recipesContainer.insertAdjacentHTML("beforeend", renderCard(response.results))
    })
  }
  
zeroPagination()  //переносить клас selected на першу позицію добавив Чуйков Роман
}

// //////////////
export function rendersAllRecipes () {
  const btn = categoriesRefs.allCategoriesBtn
  if (!btn.classList.contains("active")) {
    btn.classList.add("active")
  }
  if (tempValues.activeCategory) {
    tempValues.activeCategory.classList.remove("active")
  }
  changeLimitByViewportWidth ()
  getAllRecipes(tempValues.page, tempValues.limit).then((response) => { 
    
    categoriesRefs.recipesContainer.innerHTML = ""
    categoriesRefs.recipesContainer.insertAdjacentHTML("beforeend", renderCard(response.results))
  })
}


function changeLimitByViewportWidth () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  if (vw >= 1200) {
    tempValues.limit = 9;
  } else if (vw < 1200 && vw >= 768) {
    tempValues.limit = 8;
  } else {
    tempValues.limit = 6;
  }
}

export function getCurrentRecipeSetUp () {
  return {
    category: tempValues.category, 
    page: tempValues.page, 
    limit: tempValues.limit,
    container: categoriesRefs.recipesContainer,
  }
}