// https://tasty-treats-backend.p.goit.global/api/categories

import axios from "axios";
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getCategories() {
    const END_POINT = `/categories`;
    try {        
        const response = await axios
        .get(`${BASE_URL}${END_POINT}`)      
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch categories`));
    }
};