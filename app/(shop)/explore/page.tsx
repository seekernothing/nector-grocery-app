"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { categories } from "@/data/categories";

export default function Explore() {
  return (
    <div className="px-5 py-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-textDark text-center mb-4">
        Find Products
      </h1>

      <Link
        href="/search"
        className="rounded-full bg-gray-100 px-4 py-3 flex items-center gap-2 lg:hidden"
      >
        <Search size={18} className="text-gray-400" />
        <span className="text-textGray">Search Store</span>
      </Link>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`${category.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 p-4 text-center`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-20 w-20 object-contain"
            />
            <span className="text-base font-bold text-textDark">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
