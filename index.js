const loginButton = document.querySelector(".header__login-icon");
const loginPage = document.querySelector(".login");
const escapeButton = document.querySelector(".login__escape");
const loginButton1 = document.querySelector(".header__login-text");

loginButton.addEventListener("click", () => {
  loginPage.style.transform = "translateX(0)";
});
loginButton1.addEventListener("click", () => {
  loginPage.style.transform = "translateX(0)";
});
escapeButton.addEventListener("click", () => {
  loginPage.style.transform = "translateX(-100%)";
});
