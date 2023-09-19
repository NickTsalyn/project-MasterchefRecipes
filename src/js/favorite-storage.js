const refs = {
  recipesGallery: document.querySelector(".gallery-recipes"),
  
}

document.addEventListener('DOMContentLoaded', function(e){
  const html = refs.recipesGallery.children
  let arr = [...html];
 console.log(html)
  
})

const storageKey = "favRecipes"

refs.recipesGallery.addEventListener('click', favBtnClickHandler)

function favBtnClickHandler (e) {
  if (e.target.closest(".heart")) {
    let favBtn = e.target.closest(".heart");
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
    category,
  }
}


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

activatesFavoriteIconsFromStorage(refs.cardItemsArr)

 function activatesFavoriteIconsFromStorage (arr) {
  console.log(arr)
  // [...arr].map(el => {
  //   console.log(el)
  // })
 }