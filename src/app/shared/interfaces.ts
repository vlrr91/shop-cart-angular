export interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}
