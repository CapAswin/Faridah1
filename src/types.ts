export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  color: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  details: string;
}

export interface CartItem extends Product {
  quantity: number;
}
