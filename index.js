const mainContainer = document.querySelector(".card")
const thanksContainer = document.querySelector(".thank-you-section")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
const submitButton = document.getElementById("submit-btn")

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
 })

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})