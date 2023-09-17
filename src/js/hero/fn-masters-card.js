// ------------ Events card -----
const masters = document.querySelector(".hero-event")

export function eventCards(arr) {    
    const eventCard = arr.map(({ cook: { imgUrl: chefImgUrl, imgWebpUrl: chefImgWebpUrl }, topic: { name, area, previewUrl, previewWebpUrl, imgUrl, imgWebpUrl} }) => ` 
    <div class="event-description">
  <ul class="event-item">
    <li class="chef-photo">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcset="
           ${chefImgWebpUrl}
          "
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcset="
            ${chefImgUrl}
          "
          type="image/png"
        />
        <img src="${chefImgUrl}" alt="chef photo  width="161"
        height="78"
        loading="lazy"" />
      </picture>
    </li>
    <li>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcset="
           ${previewWebpUrl}
          "
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcset="
            ${previewUrl}
          "
          type="image/png"
        />
        <img src="${previewUrl}" alt="chef photo  width="161"
        height="78"
        loading="lazy"" />
      </picture>
      <h2>${name}</h2>
      <p>${area}</p>
    </li>
    <li>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcset="
           ${imgWebpUrl}
          "
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcset="
            ${imgUrl}
          "
          type="image/png"
        />
        <img src="${imgUrl}" alt="chef photo  width="161"
        height="78"
        loading="lazy"" />
      </picture>
    </li>
  </ul>
</div>
  `).join('');
    masters.insertAdjacentHTML("beforeend", eventCard)
}

