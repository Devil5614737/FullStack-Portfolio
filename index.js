const darkTheme = () => {
  const btn = document.querySelector(".switch");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    document.body.classList.toggle("active");
  });
};

darkTheme();

const hamburgerMenu = () => {
  const menuBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".right2");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
};
hamburgerMenu();
