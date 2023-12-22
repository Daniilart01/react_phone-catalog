import { Item } from '../types/Item';

export const getSortedProducts
= (products: Item[], sortType: SortType) => {
  switch (sortType) {
    case 'age':
      return products.sort((a, b) => a.age - b.age);
    case 'price':
      return products.sort((a, b) => a.price - b.price);
    case '-price':
      return products.sort((a, b) => b.price - a.price);
    case 'name':
      return products.sort((a, b) => a.name.localeCompare(b.name));
    default: return products;
  }
};
