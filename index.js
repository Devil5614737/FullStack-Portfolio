const darkTheme = () => {
  const btn = document.querySelector(".switch");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    document.body.classList.toggle("active");
  });
};

darkTheme();
