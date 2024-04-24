import { create } from "zustand";

interface FavoriteStore {
    favorites: string[];
    addFavorite: (id: string) => void;
    deleteFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: localStorage.getItem("favorite-pokemon")?.split(",") || [],
    addFavorite: (id: string) => {
        set((state) => {
        const favorites = [...state.favorites, id];
        localStorage.setItem("favorite-pokemon", favorites.join(","));
        return { favorites };
    });
    },
    deleteFavorite: (id: string) => {
        set((state) => {
        const favorites = state.favorites.filter((favorite) => favorite !== id);
        localStorage.setItem("favorite-pokemon", favorites.join(","));
        return { favorites };
    });
    }
}));