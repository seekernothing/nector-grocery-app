import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) =>
        set((state) => {
          const exists = state.favorites.includes(id);
          return {
            favorites: exists
              ? state.favorites.filter((fid) => fid !== id)
              : [...state.favorites, id],
          };
        }),

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
