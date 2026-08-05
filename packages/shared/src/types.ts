export interface AidItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  priceId?: string | null;
  aidItemId?: string;
}

export interface CartItem extends AidItem {
  quantity: number;
}

export interface Country {
  id: string;
  name: string;
  cities: string[];
}
