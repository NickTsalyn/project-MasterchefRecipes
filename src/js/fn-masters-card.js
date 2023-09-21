// ------------ Events card -----
// const masters = document.querySelector(".hero-event")
const swiperEvent = document.querySelector(".swiper-wrapper");
 
export function eventCards(arr) {
    const eventCard = arr.map(({ cook: { imgUrl: chefImgUrl, imgWebpUrl: chefImgWebpUrl }, topic: { name, area, previewUrl, previewWebpUrl, imgUrl, imgWebpUrl} }) => `
    <div class="event-description swiper-slide">
  <div class="event-item">
    <div class="chef">
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
    </div>
    <div class="event-detail">
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
    <div class="event-big-photo">
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
        <img class="big-photo" src="${imgUrl}" alt="big event photo"  
        width="200"
        height="280"
        loading="lazy"" />
      </picture>
    </div>
  </div>
</div>
  `).join('');
    swiperEvent.insertAdjacentHTML("beforeend", eventCard)
}
