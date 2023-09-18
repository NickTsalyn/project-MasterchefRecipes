
import { getMasters } from "./Api/api-masters"
import { eventCards } from "./fn-masters-card"

async function mastersEvt() {
  try {
      const data = await getMasters()
     {
      eventCards(data)
     }
  } catch (error) {
    console.error(error);
  }
}
mastersEvt()
