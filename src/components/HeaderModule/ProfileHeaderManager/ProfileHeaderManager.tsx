import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { toggleThemeMode } from "@/redux-toolkit/slices/projectSlice";
import { LogOut, Monitor, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProfileHeaderManager = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { setTheme } = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleThemeSwitch = (mode: "light" | "dark" | "system") => {
    setTheme(mode);
    dispatch(toggleThemeMode(mode));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <div className="relative" ref={menuRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleUserMenu}
        >
          <Image
            height={50}
            width={50}
            src="/images/placeholder.svg"
            alt="UserImage"
            className="h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline">
            Admin
          </span>
        </div>

        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md border border-gray-200 dark:border-gray-700">
            {/* Profile Option */}
            <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <User className="w-4 h-4 mr-2" /> Profile
            </button>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            {/* Theme Selection */}
            <div className="flex flex-row justify-center items-center dark:hover:bg-gray-700 p-2 rounded-md gap-2">
              <button
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                type="button"
                onClick={() => handleThemeSwitch("system")}
              >
                <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                type="button"
                onClick={() => handleThemeSwitch("light")}
              >
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                type="button"
                onClick={() => handleThemeSwitch("dark")}
              >
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            {/* Logout Option */}
            <button className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileHeaderManager;
