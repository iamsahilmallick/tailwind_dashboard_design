import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { projectStateInterface } from "../interfaces/reduxInterfaces";

// Correct initial state with types
const initialState: projectStateInterface = {
  isDarkMode: false,
  isSidebarOpen: false,
  isMobile: false,
  themeMode: "light", // 'light' | 'dark' | 'system'
  openMenus: {},
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      if (typeof window !== "undefined") {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        state.isDarkMode = state.themeMode === "system" ? systemPrefersDark : !state.isDarkMode;
      } else {
        // Fallback for SSR or undefined window
        state.isDarkMode = !state.isDarkMode;
      }
    },
    toggleThemeMode: (
      state,
      action: PayloadAction<"light" | "dark" | "system">
    ) => {
      state.themeMode = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    toggleDropdown: (state, action: PayloadAction<string>) => {
      const label = action.payload;
      state.openMenus[label] = !state.openMenus[label];
    },
  },
});

export const {
  toggleDarkMode,
  toggleSidebar,
  setMobileView,
  toggleDropdown,
  toggleThemeMode,
} = projectSlice.actions;

export const projectSliceInitialState = initialState;

export default projectSlice.reducer;
