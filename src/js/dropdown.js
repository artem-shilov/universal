document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(".dropdown__list-item");

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("dropdown__list--active");
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function () {
      dropDownBtn.innerText = this.innerText;
      dropDownList.classList.remove("dropdown__list--active");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove("dropdown__list--active");
    }
  });
});
