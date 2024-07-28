export const Modal = {
  toggle() {
    // Ativa e desativa o modal
    // Quando active estiver presente, ele remove. Caso não esteja, ele adiciona.
    document.querySelector(".modal-overlay").classList.contains("active")
      ? document.querySelector(".modal-overlay").classList.remove("active")
      : document.querySelector(".modal-overlay").classList.add("active");
  },
};
