// https://tasty-treats-backend.p.goit.global/api/ingredients

import axios from "axios";
import Notiflix from "notiflix";
// ------------Перелік усіх рецептів----------------
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getAllIngredients() {
    const END_POINT = `/ingredients`;
    try {        
        const response = await axios
        .get(`${BASE_URL}${END_POINT}`)      
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch pecipes`));
    }
};