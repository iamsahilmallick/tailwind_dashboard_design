export interface OpenMenusInterface {
  [key: string]: boolean;
}

export interface projectStateInterface {
  isMobile?: boolean;
  isDarkMode?: boolean;
  isSidebarOpen?: boolean;
  themeMode?: string;
  openMenus: OpenMenusInterface;
}
