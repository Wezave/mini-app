const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const toSecondPageButton = document.querySelector('#go-to-second-page');
const toFirstPageButton = document.querySelector('#go-to-first-page');
const menuContainer = document.querySelector('#menu-container');
const selectedInfo = document.querySelector('#selected-info');
const selectMenu = document.querySelector('#menu-select');
if (page1 && page2 && toSecondPageButton) {
    toSecondPageButton.addEventListener('click', () => {
        page1.classList.remove('active-page');
        page2.classList.add('active-page');
    });
}
if (page1 && page2 && toFirstPageButton) {
    toFirstPageButton.addEventListener('click', () => {
        page1.classList.add('active-page');
        page2.classList.remove('active-page');
    });
}
function renderMenu() {
}
export {};
//# sourceMappingURL=main.js.map