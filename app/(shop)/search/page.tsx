"use client";

import { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { useSearchStore } from "@/store/searchStore";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";

export default function SearchPage() {
  var query = useSearchStore((s) => s.query);
  var setQuery = useSearchStore((s) => s.setQuery);
  var categoryFilter = useSearchStore((s) => s.categoryFilter);

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
    <div className="px-5 py-4">
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
          className="cursor-pointer"
        >
          <SlidersHorizontal size={20} className="text-textDark" />
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-textGray text-center mt-10">No products found</p>
      )}

      <Filters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
