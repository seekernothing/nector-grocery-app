"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";

export default function CategoryPage() {
  var router = useRouter();
  var params = useParams();
  var slug = params.slug as string;

  var [showFilters, setShowFilters] = useState(false);

  var category = categories.find((c) => c.slug === slug);

  var categoryProducts = products.filter((p) => p.category === slug);

  if (!category) {
    return (
      <div className="px-5 py-4">
        <p className="text-textGray text-center mt-10">Category not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-5 py-4 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="cursor-pointer"
        >
          <ChevronLeft size={24} className="text-textDark" />
        </button>

        <h1 className="text-lg font-bold text-textDark">{category.name}</h1>

        <button
          onClick={() => setShowFilters(true)}
          className="cursor-pointer lg:hidden"
        >
          <SlidersHorizontal size={20} className="text-textDark" />
        </button>
      </div>

      <div className="lg:flex lg:gap-8 lg:px-8">
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <h2 className="font-bold text-textDark mb-4">Filter by Category</h2>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className={`block py-2 px-3 rounded-xl text-sm ${
                cat.slug === slug
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-textGray hover:bg-gray-50"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="flex-1 px-5 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-0">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Filters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
