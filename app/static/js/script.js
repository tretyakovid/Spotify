const burgerMenuBtn = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

function openWindow(window, className) {
  if (document.body.style.overflow != "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  window.classList.toggle(className);
  overlay.classList.toggle("overlay--active");
}

function closeWindow(window, className, btn) {
  window.classList.remove(className);
  overlay.classList.remove("overlay--active");
  btn.classList.remove("active");
}

burgerMenuBtn.addEventListener("click", () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      closeWindow(burgerMenu, "burger-menu--active", burgerMenuBtn);
    }
  });

  burgerMenuBtn.classList.toggle("active");

  openWindow(burgerMenu, "burger-menu--active");
});
