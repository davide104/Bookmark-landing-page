"use strict";

//for accordion
const headings = ["headingOne", "headingTwo", "headingThree", "headingFour"];

for (let heading of headings) {
  document
    .getElementById(heading)
    .children[0].children[1].addEventListener("click", function () {
      if (
        document
          .getElementById(heading)
          .children[0].children[1].classList.contains("collapsed")
      ) {
        document
          .getElementById(heading)
          .children[0].children[1].children[0].setAttribute(
            "src",
            "./images/icon-close.svg"
          );
      } else if (
        !document
          .getElementById(heading)
          .children[0].children[1].classList.contains("collapsed")
      ) {
        document
          .getElementById(heading)
          .children[0].children[1].children[0].setAttribute(
            "src",
            "./images/icon-arrow.svg"
          );
      }
    });
}

//--> prevent page scrolling in collapsing navbar

$("#nav-collapse").on("shown.bs.collapse", function () {
  const body = document.body;
  body.style.position = "fixed";
});
$("#nav-collapse").on("hide.bs.collapse", function () {
  const body = document.body;
  body.style.position = "";
  body.style.top = "";
});

//for form in section 6
const formInputS6 = document.querySelector("#form-input-section6");
const formError = document.querySelector("#form-error");

$("#contactUsBtn").on("click", function (e) {
  e.preventDefault();

  if (!/\w+@[a-zA-z]+\.\w+/.test(formInputS6.value)) {
    formError.classList.add("form-error");
    formError.childNodes[3].classList.remove("d-none");
  } else {
    formError.childNodes[3].classList.add("d-none");
    formError.classList.remove("form-error");
  }
});
