import axios from "axios";
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getRecipeByCategory(category, page, limit) {
    const END_POINT = `/recipes`;
    try {        
        const response = await axios
        .get(`${BASE_URL}${END_POINT}?category=${category}&page=${page}&limit=${limit}`)      
        return response.data;
    } catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch categories`));
    }
};

export async function getAllRecipes(page, limit) {
  const END_POINT = `/recipes`;
  try {        
      const response = await axios
      .get(`${BASE_URL}${END_POINT}?page=${page}&limit=${limit}`)      
      return response.data;
  } catch (error) {
      throw new Error(Notiflix.Notify.failure(`Failed to fetch categories`));
  }
};


