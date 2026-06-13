export enum ProductCategory {
  FruitsVegetables = "fruits-vegetables",
  Beverages = "beverages",
  DairyEggs = "dairy-eggs",
  MeatFish = "meat-fish",
  Bakery = "bakery",
}

export enum OrderStatus {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: ProductCategory;
  rating?: number;
  isExclusiveOffer?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  weight: string;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Category {
  id: string;
  name: string;
  slug: ProductCategory;
  image: string;
}
