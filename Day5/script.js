
const hamburger = document.getElementsByClassName("hamburger");
const navbar_menu = document.getElementsByClassName("navbar-menu");
const hamburger_close = document.getElementsByClassName("hamburger-close");

const close = () => {
  navbar_menu[0].style.display = "none";
  hamburger[0].style.display = "flex";
  hamburger_close[0].style.display = "none";
};

hamburger[0].addEventListener("click", (e) => {
  navbar_menu[0].style.display = "flex";
  hamburger_close[0].style.display = "flex";
  hamburger[0].style.display = "none";
});

hamburger_close[0].addEventListener("click", (e) => {
  close();
});

const menu = document.getElementsByClassName("menu-item");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (e) => {
    if (hamburger_close[0].style.display !== "") {
      close();
    }
  });
}