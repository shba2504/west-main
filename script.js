const closeModal = document.querySelector(".close-button");

window.addEventListener("scroll", openModal);

function openModal() {
  let storedState = sessionStorage.getItem("allowmodal");
  if (!storedState) {
    if (window.scrollY > 500) {
      sessionStorage.setItem("allowmodal", "false");
      window.removeEventListener("scroll", openModal);
      $("#modal").modal("toggle");
    }
  }
}

closeModal.addEventListener("click", () => {
  modal.close();
});
