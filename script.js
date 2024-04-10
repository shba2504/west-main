const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// NAVBAR //

const navToggle = document.querySelector(".mobile-nav-toggle");
const burgerToggle = document.querySelector(".icon-hamburger");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  burgerToggle.classList.toggle("active");
  primaryNav.toggleAttribute("data-visible");
});

document.querySelectorAll(".nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    burgerToggle.classList.remove("active");
    primaryNav.toggleAttribute("data-visible", false);
  })
);
