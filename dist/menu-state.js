import { menus } from './data/menus.js';
let currentMenu = menus[0];
export function getCurrentMenu() {
    return currentMenu;
}
export function setCurrentMenu(menu) {
    currentMenu = menu;
}
export function toggleItem(itemId, newChecked) {
    const item = currentMenu.items.find(i => i.id === itemId); //проверяем, существует ли вообще такой элемент
    if (item) {
        item.checked = newChecked;
    }
    else {
        throw new Error(`Пункт с id ${itemId} не найден`);
    }
}
export function selectedItemsCount() {
    return currentMenu.items.filter(item => item.checked).length;
}
export function selectedSum() {
    return currentMenu.items.reduce((sum, item) => item.checked ? sum + item.value : sum, 0);
}
//# sourceMappingURL=menu-state.js.map