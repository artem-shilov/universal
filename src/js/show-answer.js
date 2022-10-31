const showAnswerBtn = document.querySelectorAll(".questions-answers__btn");

showAnswerBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("questions-answers__btn--active");
  });
});

showAnswerBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode
      .querySelector(".answer__text")
      .classList.toggle("active");
  });
});


