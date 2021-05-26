const loginBtn = document.querySelector(".login");
const loginClose = document.querySelector(".fa-times-circle");
const loginSection = document.querySelector("#Customerlogin");
loginBtn.addEventListener("click", () => {
  loginSection.classList.add("active");
});

loginClose.addEventListener("click", () => {
  loginSection.classList.remove("active");
});
const registerBtn = document.querySelector(".register");
const registerClose = document.querySelector(".closei");
const registerSection = document.querySelector("#Customerregistration");
registerBtn.addEventListener("click", () => {
  registerSection.classList.add("active");
});

registerClose.addEventListener("click", () => {
  registerSection.classList.remove("active");
});
