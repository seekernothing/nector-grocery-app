"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/categories";
import { useSearchStore } from "@/store/searchStore";
import Button from "@/components/ui/Button";

interface FiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Filters({ isOpen, onClose }: FiltersProps) {
  var categoryFilter = useSearchStore((s) => s.categoryFilter);
  var toggleCategoryFilter = useSearchStore((s) => s.toggleCategoryFilter);

  var [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  var brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"];

  function handleBrandToggle(brand: string) {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-end"
      onClick={onClose}
    >
      <div
        className="bg-gray-50 rounded-t-3xl w-full p-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center">
          <button onClick={onClose} className="cursor-pointer">
            <X size={20} className="text-textDark" />
          </button>
          <h2 className="font-bold text-lg flex-1 text-center">Filters</h2>
        </div>

        <h3 className="font-bold text-xl mt-4 mb-3">Categories</h3>
        {categories.map((category) => {
          var isSelected = categoryFilter.includes(category.slug);

          return (
            <div
              key={category.id}
              className="flex items-center gap-3 mb-3 cursor-pointer"
              onClick={() => toggleCategoryFilter(category.slug)}
            >
              <div
                className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                  isSelected
                    ? "bg-primary border-primary"
                    : "border-gray-300"
                }`}
              >
                {isSelected && <Check size={14} className="text-white" />}
              </div>
              <span
                className={
                  isSelected
                    ? "text-primary font-semibold"
                    : "text-textDark"
                }
              >
                {category.name}
              </span>
            </div>
          );
        })}

        <h3 className="font-bold text-xl mt-6 mb-3">Brand</h3>
        {brands.map((brand) => {
          var isSelected = selectedBrands.includes(brand);

          return (
            <div
              key={brand}
              className="flex items-center gap-3 mb-3 cursor-pointer"
              onClick={() => handleBrandToggle(brand)}
            >
              <div
                className={`w-6 h-6 rounded-md border flex items-center justify-center ${
                  isSelected
                    ? "bg-primary border-primary"
                    : "border-gray-300"
                }`}
              >
                {isSelected && <Check size={14} className="text-white" />}
              </div>
              <span
                className={
                  isSelected
                    ? "text-primary font-semibold"
                    : "text-textDark"
                }
              >
                {brand}
              </span>
            </div>
          );
        })}

        <div className="mt-6">
          <Button label="Apply Filter" variant="primary" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
