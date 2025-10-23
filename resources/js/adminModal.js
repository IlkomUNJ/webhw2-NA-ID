console.log("Admin Modal JS Loaded");

const modal = document.getElementById("modal");
const addProductBtn = document.getElementById("add-product");
const closeModalBtn = document.getElementById("close-modal");

addProductBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});