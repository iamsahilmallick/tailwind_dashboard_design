import NotificationManager from "@/components/HeaderModule/NotificationManager/NotificationManager";
import ProfileHeaderManager from "@/components/HeaderModule/ProfileHeaderManager/ProfileHeaderManager";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import {
  toggleSidebar,
  toggleThemeMode,
} from "@/redux-toolkit/slices/projectSlice";
import { CircleChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const DashboardHeader = () => {
  const dispatch = useAppDispatch();
  const { setTheme } = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleNotificationMenu = () =>
    setIsNotificationMenuOpen(!isNotificationMenuOpen);

  const handleThemeSwitch = (mode: "light" | "dark" | "system") => {
    setTheme(mode);
    dispatch(toggleThemeMode(mode));
  };
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 lg:px-6 bg-white dark:bg-gray-800 shadow-sm">
      <button
        className="lg:hidden mr-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <CircleChevronRight />
      </button>
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 h-9 pl-9 pr-4 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-800 dark:text-gray-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <NotificationManager />
          <ProfileHeaderManager />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
