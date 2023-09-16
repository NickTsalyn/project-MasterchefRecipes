// https://tasty-treats-backend.p.goit.global/api/recipes/
import axios from 'axios';
import Notiflix from 'notiflix';
// ------------Перелік усіх рецептів----------------
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`;
const END_POINT = `/recipes`;

export async function getAllRecipes() {
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`);
    return response.data;
  } catch (error) {
    throw new Error(Notiflix.Notify.failure(``));
  }
}

export async function getRecipesDetail(id) {
  const GET_BYID = `\{id}`;
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}${GET_BYID}`);
    return response.data[0];
  } catch (error) {
    throw new Error(Notiflix.Notify.failure(`${elements.onError.textContent}`));
  }
}
