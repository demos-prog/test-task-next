export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface ProductProps extends Product {
  isButtonVisible: boolean;
}
