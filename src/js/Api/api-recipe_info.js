// https://tasty-treats-backend.p.goit.global/api/recipes/
import axios from "axios";
import Notiflix from "notiflix";
// ------------Перелік усіх рецептів----------------
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getAllRecipes() {
    const END_POINT = `/recipes`;
    try {        
        const response = await axios
        .get(`${BASE_URL}${END_POINT}`)      
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch pecipes`));
    }
};