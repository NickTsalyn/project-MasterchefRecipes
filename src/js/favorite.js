/*
 preview  
 title    
description  
rating

 *  */ 
const cart=document.querySelector('.fav-list-recipes');
const nothing=document.querySelector('.nothing');
const secRecipes=document.querySelector('.fav-recipes');
const categories=document.querySelector('.fav-categories');


// const theme = localStorage.getItem("ui-theme");
//  В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.
// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);


let listCards='';
const recipes=[
    // {
    //     preview:"./img/cards.jpg",
    //     title :"BANANA PANCAKES"    ,
    //     description:"Banana pancakes are a fluffy and sweet breakfast dish made with mashed ripe bananas, eggs, flour, and a touch of cinnamon, cooked to perfection on a skillet and served with toppings of your choice.",  
    //     rating:"4.5",
    // },
    // {
    //     preview:"./img/cards.jpg",
    //     title :"BANANA PANCAKES"    ,
    //     description:"Banana pancakes are a fluffy and sweet breakfast dish made with mashed ripe bananas, eggs, flour, and a touch of cinnamon, cooked to perfection on a skillet and served with toppings of your choice.",  
    //     rating:"4.5",
    // }
]
for (const recipe of recipes) {
  console.log('t',recipe.title);
  listCards+=`            <li class="fav-recipe-card">
    <img class="fav-card-img" src="${recipe.preview}" alt="${recipe.title}">
    <button class="fav-button-heart">
      <svg class="fav-heart" width="22" height="22">
        <use href="./img/icons.svg#heart"></use>
      </svg>
    </button>
      <h3 class="fav-card-title">${recipe.title}</h3>
      <p class="fav-cart-text">${recipe.description}</p>
      <div class="fav-cart-footer">
        <p class="fav-rate">${recipe.rating}</p>
       <div class="fav-cart-stars">
         <svg class="fav-star" width="18" height="18">
           <use href="/img/icons.svg#star"></use>
         </svg>
       </div>
        <button class="fav-card-button">See recipe</button>
      </div>
  </li>
`;
}
if (listCards==0) {
    nothing.style.display='block';
    secRecipes.style.display='none';
    categories.style.display='none'
}
else{
    nothing.style.display='none';
    secRecipes.style.display='block';
    categories.style.display='block'
    cart.innerHTML=listCards
}
