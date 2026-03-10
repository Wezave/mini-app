const page1 = document.querySelector<HTMLElement>("#page1");
const page2 = document.querySelector<HTMLElement>("#page2");

const toSecondPageButton =
  document.querySelector<HTMLButtonElement>("#go-to-second-page");
const toFirstPageButton =
  document.querySelector<HTMLButtonElement>("#go-to-first-page");

if (page1 && page2 && toSecondPageButton) {
  toSecondPageButton.addEventListener("click", () => {
    page1.classList.remove("active-page");
    page2.classList.add("active-page");
  });
}

if (page1 && page2 && toFirstPageButton) {
  toFirstPageButton.addEventListener("click", () => {
    page1.classList.add("active-page");
    page2.classList.remove("active-page");
  });
}
