import { create } from "zustand";
import type { ProductCategory } from "@/types";

interface SearchState {
  query: string;
  categoryFilter: ProductCategory[];
  setQuery: (query: string) => void;
  toggleCategoryFilter: (category: ProductCategory) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  query: "",
  categoryFilter: [],

  setQuery: (query) => set({ query }),

  toggleCategoryFilter: (category) =>
    set((state) => {
      var isAlreadySelected = state.categoryFilter.includes(category);

      if (isAlreadySelected) {
        return {
          categoryFilter: state.categoryFilter.filter((c) => c !== category),
        };
      } else {
        return {
          categoryFilter: [...state.categoryFilter, category],
        };
      }
    }),
}));
