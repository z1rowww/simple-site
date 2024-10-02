let burger = document.getElementById("burger");
let navbarlist = document.getElementById("navbarlist");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarlist.classList.toggle("navbar-list--active");
});
