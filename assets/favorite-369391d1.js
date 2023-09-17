import"./registration-13d00a69.js";const i=document.querySelector(".fav-list-recipes"),s=document.querySelector(".nothing"),a=document.querySelector(".fav-recipes"),c=document.querySelector(".fav-categories");let t="";const l=[];for(const e of l)console.log("t",e.title),t+=`            <li class="fav-recipe-card">
    <img class="fav-card-img" src="${e.preview}" alt="${e.title}">
    <button class="fav-button-heart">
      <svg class="fav-heart" width="22" height="22">
        <use href="./img/icons.svg#heart"></use>
      </svg>
    </button>
      <h3 class="fav-card-title">${e.title}</h3>
      <p class="fav-cart-text">${e.description}</p>
      <div class="fav-cart-footer">
        <p class="fav-rate">${e.rating}</p>
       <div class="fav-cart-stars">
         <svg class="fav-star" width="18" height="18">
           <use href="/img/icons.svg#star"></use>
         </svg>
       </div>
        <button class="fav-card-button">See recipe</button>
      </div>
  </li>
`;t==0?(s.style.display="block",a.style.display="none",c.style.display="none"):(s.style.display="none",a.style.display="block",c.style.display="block",i.innerHTML=t);
