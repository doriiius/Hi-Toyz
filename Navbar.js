const mobile = document.querySelector(".navbar__mob");
const menu = document.querySelector(".button__menu");
const closeB = document.querySelector(".close");
const open = () => {
  mobile.style.display = "flex";
};
const closeM = () => {
  mobile.style.display = "none";
};
menu.addEventListener("click", open);
closeB.addEventListener("click", closeM);
