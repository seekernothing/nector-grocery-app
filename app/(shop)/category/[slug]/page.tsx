"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
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
    <div>
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
          className="cursor-pointer"
        >
          <SlidersHorizontal size={20} className="text-textDark" />
        </button>
      </div>

      <div className="px-5 grid grid-cols-2 gap-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Filters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
