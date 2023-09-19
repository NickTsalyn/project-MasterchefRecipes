// ------------ Events card -----
const masters = document.querySelector(".hero-event")

export function eventCards(arr) {    
    const eventCard = arr.map(({ cook: { imgUrl: chefImgUrl, imgWebpUrl: chefImgWebpUrl }, topic: { name, area, previewUrl, previewWebpUrl, imgUrl, imgWebpUrl} }) => ` 
    <div class="event-description swiper-slide">
  <ul class="event-item">
    <li class="chef">
      <picture>
        <source
       
          srcset="
           ${chefImgWebpUrl}
          "
          type="image/webp"
        />
        <source
         
          srcset="
            ${chefImgUrl}
          "
          type="image/png"
        />
        <img class="chef-photo" src="${chefImgUrl}" alt="chef photo"  
        width="200"
        height="280"
        loading="lazy"" />
      </picture>
    </li>
    <li class="event">
    <div class="event-wrapper">
    <picture>
        <source
          
          srcset="
           ${previewWebpUrl}
          "
          type="image/webp"
        />
        <source
       
          srcset="
            ${previewUrl}
          "
          type="image/png"
        />
        <img class="event-photo" src="${previewUrl}" alt="event photo"  width="200"
        height="280"
        loading="lazy"" />
      </picture>
      <div class="event-text">
      <h2 class="event-name">${name}</h2>
      <p class="event-area">${area}</p>
      </div>
    </div>
      
    </li>
    <li class="event-big-photo">
      <picture>
        <source
          
          srcset="
           ${imgWebpUrl}
          "
          type="image/webp"
        />
        <source
       
          srcset="
            ${imgUrl}
          "
          type="image/png"
        />
        <img class="big-photo" src="${imgUrl}" alt="big event photo"  width="200"
        height="280"
        loading="lazy"" />
      </picture>
    </li>
  </ul>
</div>
  `).join('');
    masters.insertAdjacentHTML("beforeend", eventCard)
}

