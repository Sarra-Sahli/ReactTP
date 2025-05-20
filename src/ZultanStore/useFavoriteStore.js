import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
    persist(
        (set) => ({
            favorites: [],
            addToFavorites: (event) =>
                set((state) => ({
                    favorites: [...state.favorites, event],
                })),
            removeFromFavorites: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter((item) => item.id !== id),
                })),
            clearFavorites: () => set({ favorites: [] }),
        }),
        {
            name: "favorite-storage", // Nom de la clé dans le localStorage
            getStorage: () => localStorage, // Utilisation du localStorage
        }
    )
);

export default useFavoriteStore;