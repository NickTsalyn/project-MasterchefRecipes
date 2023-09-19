// https://tasty-treats-backend.p.goit.global/api/recipes?category=Beef&page=1&limit=6&time=160&area=Irish&ingredient=640c2dd963a319ea671e3796 (приклад з переліком усіх можливих параметрів, кожен з яких можна прибрати за потреби)


import axios from "axios";
import Notiflix from "notiflix";
 
const BASE_URL = `https://tasty-treats-backend.p.goit.global/api`

export async function getRecipesByTime(value) {
    const END_POINT = `/recipes`;
    const params = new URLSearchParams({         
        'time': value,
    })   
    try {
           
        const response = await axios
            .get(`${BASE_URL}${END_POINT}?${params}`)    
        //https://tasty-treats-backend.p.goit.global/api/recipes?time=30
        return response.data;
    }
    catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch pecipes`));
    }
};

export async function getRecipesByArea(value) {
    const END_POINT = `/recipes`;
    const params = new URLSearchParams({         
        area: value,
    })   
    try {
           
        const response = await axios
            .get(`${BASE_URL}${END_POINT}?${params}`)    
       
        return response.data;
    }
    catch (error) {
        throw new Error(Notiflix.Notify.failure(`Failed to fetch pecipes`));
    }
};