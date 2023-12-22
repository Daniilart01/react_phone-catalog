export interface Item {
  age: number;
  id: string;
  type: ItemType;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
  quantity?: number;
}

export type ItemType = 'phone' | 'tablet' | 'accessory';
