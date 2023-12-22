// / <reference types="react-scripts" />
type ArrowDirection = 'left' | 'right';

type Image = {
  id: number;
  url: string;
};

type ErrorType = {
  id: number;
  isError: boolean;
  type: NotificationType;
  text: string;
};

type PageItemsType = 'Phones' | 'Tablets' | 'Accessories' | '/';

type NotificationType = 'success' | 'warning';

type ProductsPageType = ItemType | 'favourite';

type SortType = 'age' | 'price' | '-price' | 'name';

type PerPageType = '4' | '8' | '16' | 'all';

type HistoryLinkType = { title: string; link: string | null };
