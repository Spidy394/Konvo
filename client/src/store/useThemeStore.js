import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("konvo-theme") || "dim",
    setTheme: (theme) => {
    localStorage.setItem("konvo-theme", theme)
        set({ theme })
    }
}));