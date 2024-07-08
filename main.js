document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".close-btn").classList.toggle("hidden");
  document.querySelector(".open-btn").classList.toggle("hidden");
  document.querySelector(".nav-mobile").classList.toggle("hidden");
});

document.querySelector(".open-btn").addEventListener("click", () => {
  document.querySelector(".close-btn").classList.toggle("hidden");
  document.querySelector(".open-btn").classList.toggle("hidden");
  document.querySelector(".nav-mobile").classList.toggle("hidden");
});
