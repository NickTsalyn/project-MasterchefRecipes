import axios from "axios";
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getRecipeById(id) {
    const END_POINT = `/recipes`;
    try {        
        const response = await axios(`${BASE_URL}${END_POINT}/${id}`)
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch categories`));
    }
};