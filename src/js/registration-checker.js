import { load } from "./storage-service"
import { Notify } from "notiflix"
const refs = {
  favoriteNavBtn: document.querySelector(".registration-fav-btn")
}


refs.favoriteNavBtn.addEventListener("click", (e) => {
  const registrationData = load("login-info")
  if (!registrationData) {
    e.preventDefault()
    Notify.warning("Log In or Sign Up to continue")
  }
})

