import { create } from "zustand";
import type { ProductCategory } from "@/types";

interface SearchState {
  query: string;
  categoryFilter: ProductCategory | null;
  setQuery: (query: string) => void;
  setCategoryFilter: (category: ProductCategory | null) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  query: "",
  categoryFilter: null,

  setQuery: (query) => set({ query }),

  setCategoryFilter: (category) => set({ categoryFilter: category }),
}));
