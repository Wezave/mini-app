import {menus, Menu} from './data/menus.js'

let currentMenu = menus[0];

export function getCurrentMenu(): Menu {
    return currentMenu;
}

export function setCurrentMenu(menu: Menu): void {
    currentMenu = menu;
}

export function toggleItem(itemId: number, newChecked: boolean):void {
    const item = currentMenu.items.find(i => i.id === itemId); //проверяем, существует ли вообще такой элемент
    if (item) {
        item.checked = newChecked;
    } else {
        throw new Error(`Пункт с id ${itemId} не найден`);
    }
}

export function selectedItemsCount(): number {
    return currentMenu.items.filter(item => item.checked).length;
}

export function selectedSum(): number {
    return currentMenu.items.reduce((sum, item) => item.checked ? sum + item.value : sum, 0);
}