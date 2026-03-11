import {
  getCurrentMenu,
  setCurrentMenu,
  toggleItem,
  selectedItemsCount,
  selectedSum
} from './menu-state.js';
import { menus } from './data/menus.js';

const page1 = document.querySelector<HTMLElement>('#page1');
const page2 = document.querySelector<HTMLElement>('#page2');

const toSecondPageButton = document.querySelector<HTMLButtonElement>('#go-to-second-page');
const secondPageLink = document.querySelector<HTMLAnchorElement>('#second-page-link');
const toFirstPageButton = document.querySelector<HTMLButtonElement>('#go-to-first-page');

const menuContainer = document.getElementById('menu-container') as HTMLElement;
const selectedInfo = document.getElementById('selected-info') as HTMLElement;
const itemTemplate = document.getElementById('menu-item-template') as HTMLTemplateElement;
const menuButtons = document.querySelectorAll<HTMLButtonElement>('.menu-button');

function resetAllMenus(): void {
  menus.forEach(menu => {
    menu.items.forEach(item => {
      item.checked = false;
    });
  });
}

function updateActiveMenuButton(menuId: number): void {
  menuButtons.forEach(button => {
    button.classList.remove('active');
    if (Number(button.dataset.menuId) === menuId) {
      button.classList.add('active');
    }
  });
}

function renderMenu(): void {
  menuContainer.innerHTML = '';
  const currentMenu = getCurrentMenu();

  currentMenu.items.forEach(item => {
    const clone = itemTemplate.content.cloneNode(true) as DocumentFragment;
    const checkbox = clone.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const label = clone.querySelector('label') as HTMLLabelElement;
    const valueSpan = clone.querySelector('.value') as HTMLSpanElement;

    if (!checkbox || !label || !valueSpan) {
      console.error('Template elements missing');
      return;
    }

    const inputId = `item-${item.id}`;
    checkbox.id = inputId;
    checkbox.dataset.id = String(item.id);
    checkbox.checked = item.checked;
    label.htmlFor = inputId;
    label.textContent = item.label;
    valueSpan.textContent = `(${item.value})`;

    checkbox.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      const itemId = Number(target.dataset.id);
      toggleItem(itemId, target.checked);
      updateInfo();
    });

    menuContainer.appendChild(clone);
  });
}

function updateInfo(): void {
  const currentMenu = getCurrentMenu();
  const count = selectedItemsCount();
  const total = selectedSum();
  selectedInfo.textContent = `Меню: ${currentMenu.name}. Выбрано: ${count}, сумма: ${total}`;
}

function showSecondPage(): void {
  resetAllMenus();
  setCurrentMenu(menus[0]);
  updateActiveMenuButton(menus[0].id);
  page1?.classList.remove('active-page');
  page2?.classList.add('active-page');
  renderMenu();
  updateInfo();
}

function showFirstPage(): void {
  page1?.classList.add('active-page');
  page2?.classList.remove('active-page');
}

if (toSecondPageButton) {
  toSecondPageButton.addEventListener('click', showSecondPage);
}

if (secondPageLink) {
  secondPageLink.addEventListener('click', (event) => {
    event.preventDefault();
    showSecondPage();
  });
}

if (toFirstPageButton) {
  toFirstPageButton.addEventListener('click', showFirstPage);
}

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menuId = Number(button.dataset.menuId);
    const selectedMenu = menus.find(m => m.id === menuId);
    if (selectedMenu) {
      setCurrentMenu(selectedMenu);
      renderMenu();
      updateInfo();
      updateActiveMenuButton(menuId);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (page2?.classList.contains('active-page')) {
    showSecondPage();
  } else {
    updateActiveMenuButton(menus[0].id);
  }
});