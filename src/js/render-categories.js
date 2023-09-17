import { getCategories } from "./Api/api-categories"

const categoriesContainerEl = document.querySelector(".categories-wrapper")
getCategories().then((response) => {
  response.map(({name, _id} = el) => {
    categoriesContainerEl.insertAdjacentHTML("beforeend", `
    <li class="category-item">
      <a href="#" data-id="${_id}" data-name="${name}" class="category-link">${name}</a>
    </li>
    `)
  })
})