var categories = document.getElementById("header-categories");
var categoriesbutton = document.getElementsByClassName("categories-button1")[0];
var body = document.querySelector("body");

var hide = false;

function hideCategories() {
  if (hide != true) {
    categories.style.visibility = "visible";
    categories.style.opacity = "1";
    categoriesbutton.style.display = "none";
    hide = true;
  } else {
    categories.style.visibility = "none";
    categories.style.opacity = "0";
    categoriesbutton.style.display = "flex";
    hide = false;
  }
}

function showCategories() {
  categories.style.visibility = "visible";
  categories.style.opacity = "1";
  categoriesbutton.style.display = "none";
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
