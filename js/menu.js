{
  const menu_button = document.querySelector(".menu-button");
  const overlay = document.querySelector(".overlay");

  menu_button.addEventListener("click", () => {
    overlay.classList.toggle("show");
  });
}
