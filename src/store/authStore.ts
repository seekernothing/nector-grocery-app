import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      setUser: (user) => set({ user }),

      login: () => set({ isLoggedIn: true }),

      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
