export interface MenuItem {
  id: number;
  label: string;
  value: number;
  checked: boolean;
}

export interface Menu {
  id: number;
  name: string;
  items: MenuItem[];
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Завтрак',
    items: [
      { id: 101, label: 'Омлет', value: 120, checked: false },
      { id: 102, label: 'Каша овсяная', value: 80, checked: false },
      { id: 103, label: 'Бутерброд с сыром', value: 60, checked: false },
      { id: 104, label: 'Кофе', value: 50, checked: false },
    ],
  },
  {
    id: 2,
    name: 'Обед',
    items: [
      { id: 201, label: 'Борщ', value: 150, checked: false },
      { id: 202, label: 'Котлета с пюре', value: 200, checked: false },
      { id: 203, label: 'Салат Цезарь', value: 180, checked: false },
      { id: 204, label: 'Компот', value: 40, checked: false },
    ],
  },
  {
    id: 3,
    name: 'Ужин',
    items: [
      { id: 301, label: 'Рыба гриль', value: 250, checked: false },
      { id: 302, label: 'Овощи на пару', value: 100, checked: false },
      { id: 303, label: 'Рис', value: 70, checked: false },
      { id: 304, label: 'Чай', value: 30, checked: false },
    ],
  },
];