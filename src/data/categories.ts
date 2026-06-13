import { ProductCategory, type Category } from "@/types";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Fruits & Vegetables",
    slug: ProductCategory.FruitsVegetables,
    image: "/assets/images/banana.png",
    color: "bg-green-50",
  },
  {
    id: "c2",
    name: "Beverages",
    slug: ProductCategory.Beverages,
    image: "/assets/images/sprite.png",
    color: "bg-blue-50",
  },
  {
    id: "c3",
    name: "Dairy & Eggs",
    slug: ProductCategory.DairyEggs,
    image: "/assets/images/eggs.png",
    color: "bg-yellow-50",
  },
  {
    id: "c4",
    name: "Meat & Fish",
    slug: ProductCategory.MeatFish,
    image: "/assets/images/chicken.png",
    color: "bg-red-50",
  },
  {
    id: "c5",
    name: "Bakery",
    slug: ProductCategory.Bakery,
    image: "/assets/images/ginger.png",
    color: "bg-purple-50",
  },
];
