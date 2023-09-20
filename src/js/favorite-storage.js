import { save, load } from "./storage-service";

const refs = {
  recipesGallery: document.querySelector(".gallery-recipes"),
  
}

const storageKey = "favRecipes"

refs.recipesGallery.addEventListener('click', favBtnClickHandler)

 function favBtnClickHandler (e) {
  if (e.target.closest(".heart")) {
    let currentCard = e.target.closest(".card-item")
    const currentId = currentCard.dataset.id
    const currentCategory = currentCard.dataset.category
    const storageArr = load(storageKey)

  // NOT ACTIVE BTN 
    if (!currentCard.classList.contains("active")) {
      currentCard.classList.add("active");
      const obj = createRecipeObject(currentId, currentCategory)

      if (!storageArr) {
        const newArr = [];
        newArr.push(obj)
        save(storageKey, newArr) 
      } else {
        storageArr.push(obj)
        const newArr = storageArr;
        save(storageKey, newArr) 
      }

      return
    }


    //  ACTIVE BTN 
    if (currentCard.classList.contains("active")) {
      currentCard.classList.remove("active")

      const newArr = storageArr.filter(({id}) => currentId!==id )
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




