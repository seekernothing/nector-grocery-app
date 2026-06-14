"use client";

import { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useSearchStore } from "@/store/searchStore";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";

export default function SearchPage() {
  var query = useSearchStore((s) => s.query);
  var setQuery = useSearchStore((s) => s.setQuery);
  var categoryFilter = useSearchStore((s) => s.categoryFilter);
  var toggleCategoryFilter = useSearchStore((s) => s.toggleCategoryFilter);

  var [inputValue, setInputValue] = useState(query);
  var [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    var timer = setTimeout(() => {
      setQuery(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  var filteredProducts = products.filter((product) => {
    var matchesQuery = true;
    if (query !== "") {
      matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    }

    var matchesCategory = true;
    if (categoryFilter.length > 0) {
      matchesCategory = categoryFilter.includes(product.category);
    }

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="px-5 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="flex-1 rounded-full bg-gray-100 px-4 py-3 flex items-center gap-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search Store"
            className="bg-transparent flex-1 outline-none text-textDark text-sm"
          />
          {inputValue !== "" && (
            <button
              onClick={() => {
                setInputValue("");
                setQuery("");
              }}
              className="cursor-pointer"
            >
              <X size={16} className="text-gray-400" />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(true)}
          className="cursor-pointer lg:hidden"
        >
          <SlidersHorizontal size={20} className="text-textDark" />
        </button>
      </div>

      <div className="lg:flex lg:gap-8 lg:mt-6">
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <h2 className="font-bold text-textDark mb-4">Filter by Category</h2>
          {categories.map((cat) => {
            var isSelected = categoryFilter.includes(cat.slug);
            return (
              <div
                key={cat.id}
                className={`block py-2 px-3 rounded-xl text-sm cursor-pointer ${
                  isSelected
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-textGray hover:bg-gray-50"
                }`}
                onClick={() => toggleCategoryFilter(cat.slug)}
              >
                {cat.name}
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-0">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-textGray text-center mt-10">No products found</p>
          )}
        </div>
      </div>

      <Filters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
