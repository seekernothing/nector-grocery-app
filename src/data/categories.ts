import { ProductCategory, type Category } from "@/types";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Fruits & Vegetables",
    slug: ProductCategory.FruitsVegetables,
    image: "/assets/images/banana.png",
  },
  {
    id: "c2",
    name: "Beverages",
    slug: ProductCategory.Beverages,
    image: "/assets/images/sprite.png",
  },
  {
    id: "c3",
    name: "Dairy & Eggs",
    slug: ProductCategory.DairyEggs,
    image: "/assets/images/eggs.png",
  },
  {
    id: "c4",
    name: "Meat & Fish",
    slug: ProductCategory.MeatFish,
    image: "/assets/images/chicken.png",
  },
  {
    id: "c5",
    name: "Bakery",
    slug: ProductCategory.Bakery,
    image: "/assets/images/ginger.png",
  },
];
