let toggleBtn = document.querySelector(".toggleBtn");
let menu = document.querySelector(".menu");
let sns = document.querySelector(".sns");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
