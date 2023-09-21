import{a as B,l as m,s as u,r as M,g as j,b as _,c as G,Y as H,o as O,d as D,e as w}from"./modal-rating-5ac3ba4a.js";const N="https://tasty-treats-backend.p.goit.global/api";async function P(n){const e="/recipes";try{return(await B(`${N}${e}/${n}`)).data}catch{throw new Error(Notiflix.Notify.failure("Failed to fetch categories"))}}const r={favRecipesGallery:document.querySelector(".fav-recipes-list"),emptyPageSection:document.querySelector(".empty-section-wrapper"),favContainer:document.querySelector(".fav-container"),buttonList:document.querySelector(".fav-categories-list")},h=m("favRecipes"),b="favRecipes";let L="";r.buttonList.addEventListener("click",T);function T(n){const e=n.target.closest(".fav-category");if(e&&e.dataset.category){const a=e.dataset.category,t=h.filter(({category:c})=>c===a);C(t)}else if(e&&e.dataset.value==="all"){const a=m("favRecipes");C(a)}L.classList.remove("active"),e.classList.add("active"),L=e}F();function F(){const n=document.querySelector("[data-value=all]");n.classList.add("active"),L=n,C(h),U(h)}r.favRecipesGallery.addEventListener("click",K);function K(n){if(n.target.closest(".heart")){let e=n.target.closest(".card-item");const a=e.dataset.id,t=e.dataset.category,c=m("favRecipes");if(!e.classList.contains("active")){e.classList.add("active");const l=Y(a,t);if(c)c.push(l),u(b,c);else{const d=[];d.push(l),u(b,d)}return}if(e.classList.contains("active")){e.classList.remove("active");const l=c.filter(({id:d})=>a!==d);u(b,l);return}}}function Y(n,e){return{id:n,category:e}}function U(n){n.length>0&&(r.buttonList.classList.remove("hidden"),n.map(({category:a})=>a).filter((a,t,c)=>c.indexOf(a)===t).sort((a,t)=>a.localeCompare(t)).map(a=>{r.buttonList.insertAdjacentHTML("beforeend",`<li class="fav-category" data-category=${a}>
              <button class="fav-category-btn" type="button">${a}</button>
        </li>`)}))}function C(n){n.length>0&&(r.emptyPageSection.classList.add("hidden"),r.favRecipesGallery.classList.remove("hidden"),r.favRecipesGallery.innerHTML="",n.map(({id:e})=>{P(e).then(a=>{const t=[a];r.favRecipesGallery.insertAdjacentHTML("beforeend",M(t))})}))}const V={favoriteElement:document.querySelector(".fav-recipes-list")};V.favoriteElement.addEventListener("click",z);function z(n){n.preventDefault();const e=n.target.closest(".modal-open-js");if(!e)return;const a=e.dataset.id;j(a).then(t=>{const l=t.youtube.split("=")[1],$=m("favRecipes").find(({id:s})=>s===t._id),o=_.create(`
    <div class="modal-frame " >
       
       <button class="modal-close-button">
          <svg class="modal-close-icon" width="20" height="20">
          <use href=${G}></use>
        </svg>
        </button>

<div class="swap-container-top">
       <div class="iframeContainer"></div>
<div>
        <h2 class="dish-title">${t.title}</h2></div>
</div>
        <div class="swap-container">

        <div class="rait-container">

        <p class="recipe-rating recipe-box-text">${t.rating}</p>
        <ul class="icon-list-modal">
           ${J(t.rating)}
        </ul>
        
        <p class="preparing-time recipe-box-text">${t.time} min</p>
        
      </div>
      
      <div class="ingredients-container">
            <ul>
              ${t.ingredients.map(s=>`
                <li class="ingredients-container-box">
                  <span class="ingredient-name">${s.name}</span>
                  <span class="ingredient-measure">${s.measure}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="tag-container"></div>
          </div>
          <p class="dish-instructions">${t.instructions}</p>
          <div class="btn-container">
            <button type="button" data-id="${t._id}" data-category="${t.category}" class="btn-modal-general btn-modal-first"></button>

            

            <button type="button" data-id="${t._id}" class="btn-modal-general btn-modal-secont give-rating-btn">Give a rating</button>

            </div>
             </div> `),v=o.element().querySelector(".btn-modal-first");v.textContent="Add to favorite",$&&(v.classList.add("active"),v.textContent="Remove from favorite");const E=o.element().querySelector(".tag-container");t.tags&&t.tags.length>0&&t.tags.forEach(s=>{if(s.trim()!==""){const i=document.createElement("span");i.textContent=`#${s}`,i.classList.add("tag"),E.appendChild(i)}});const R=o.element().querySelector(".iframeContainer");if(t.youtube!=="")H(R,{videoId:l,playerVars:{autoplay:0}});else{const s=document.createElement("img");s.src=t.thumb,R.appendChild(s)}o.element().querySelector(".modal-close-button").addEventListener("click",()=>{o.close()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&o.close()}),o.show(),document.querySelector(".give-rating-btn").addEventListener("click",k);function k(s){const i=t._id;O(i)}const S={recipeDetailModal:document.querySelector(".modal-frame")},f="favRecipes";S.recipeDetailModal.addEventListener("click",x);function x(s){if(s.target.closest(".btn-modal-first")){let i=s.target.closest(".btn-modal-first");const A=i.dataset.id,q=i.dataset.category,p=m(f);if(!i.classList.contains("active")){i.classList.add("active");const y=D(A,q);if(v.textContent="Remove from favorite",p)p.push(y),u(f,p);else{const g=[];g.push(y),u(f,g)}return}if(i.classList.contains("active")){i.classList.remove("active"),v.textContent="Add to favorite";const y=p.filter(({id:g})=>A!==g);u(f,y);return}}}})}function J(n){let e=Math.round(n),a=[];for(let t=0;t<5;t+=1)e>=1?(a.push(`
        <li class="icon-rating checked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${w}></use></svg></li>
        `),e-=1):a.push(` <li class="icon-rating unchecked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${w}></use></svg></li>`);return a.join("")}
