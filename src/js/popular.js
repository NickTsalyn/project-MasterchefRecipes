import getPopularRecipes from './Api/api-popular_recipes';

const list = document.querySelector('.popular-list')

getPopularRecipes().then(createMarkup(data))

function createMarkup(arr) {
    const card = arr.map(({title, description, preview, _id}) => `
    <li class="list-item" id = ${_id}>
        <img class="item-img" src="${preview}" alt="${title}">
        <h3 class="item-title">${title}</h3>
        <p class="item-text">${description}</p>
    </li>`).join('')
};

list.insertAdjacentElement('beforeend', createMarkup);