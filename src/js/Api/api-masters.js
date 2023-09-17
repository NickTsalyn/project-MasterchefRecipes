// https://tasty-treats-backend.p.goit.global/api/events
import axios from "axios";

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api/events";

async function getMasters() {
  try {
    const response = await axios.get(`${BASE_URL}`);
      return response.data;
    //   console.log(response);
  } catch (error) {
    console.error(error);
  }
}
export { getMasters };  
