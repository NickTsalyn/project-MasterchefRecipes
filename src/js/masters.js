
import { getMasters } from "./Api/api-masters"
import { eventCards } from "./fn-masters-card"

// const masters = document.querySelector(".hero-event")

async function mastersEvt() {
  try {
      const data = await getMasters()
     {
      // console.log(data);
      eventCards(data)
     }
  } catch (error) {
    console.error(error);
  }
}
mastersEvt()
// console.log(mastersEvt);
