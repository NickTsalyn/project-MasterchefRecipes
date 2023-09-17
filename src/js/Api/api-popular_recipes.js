import axios from "axios";
// import { log } from "console";

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';

export async function getPopularRecipes() {
    try {        
        const response = await axios
        .get(`${BASE_URL}`)    
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(``));
    }
};