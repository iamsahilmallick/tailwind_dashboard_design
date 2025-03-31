import { sideBarItems } from "@/config/sidebar.config";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import {
  toggleDarkMode,
  toggleDropdown,
  toggleSidebar,
  toggleThemeMode,
} from "@/redux-toolkit/slices/projectSlice";
import { ChevronDown, CircleX, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();
  const pathName = router?.pathname ?? "/dashboard";
  const { setTheme } = useTheme();
  const dispatch = useAppDispatch();
  const { isDarkMode, openMenus, themeMode, isSidebarOpen } = useAppSelector(
    (state) => state.project
  );

  const handleThemeSwitch = () => {
    if (typeof window === "undefined") return;
    let newThemeMode: "light" | "dark" | "system";
    dispatch(toggleDarkMode());
    if (themeMode === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      newThemeMode = systemPrefersDark ? "light" : "dark";
      setTheme(newThemeMode);
    } else {
      newThemeMode = isDarkMode ? "light" : "dark";
      setTheme(newThemeMode);
    }
    dispatch(toggleThemeMode(newThemeMode));
  };

  const handleSideBarOpener = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={handleSideBarOpener}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-full w-72 transform transition-transform duration-200 ease-in-out
          bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 lg:relative lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          border-r border-gray-200 dark:border-gray-700 shadow-lg lg:shadow-none
        `}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <Image
                  height={50}
                  width={50}
                  src="/images/placeholder.svg"
                  alt="UserImage"
                  className="rounded-full"
                />
              </div>
              <span className="text-l font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Admin Templates
              </span>
            </div>

            {/* Close button (mobile only) */}
            <button
              onClick={handleSideBarOpener}
              className="ml-auto lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
            >
              <CircleX />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="mb-4 px-3">
              <div className="flex items-center gap-2 py-2 px-3 rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300">
                <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center">
                  <Image
                    height={50}
                    width={50}
                    src="/images/placeholder.svg"
                    alt="UserImage"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium">Sahil Mallick</p>
                  <p className="text-sm font-semibold">Online</p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </div>
            </div>

            <div className="space-y-1 px-3">
              {sideBarItems.map((item, index) => (
                <div key={index} className="mb-1">
                  {/* Parent menu item */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.children && item.children?.length > 0) {
                          dispatch(toggleDropdown(item.label));
                        } else {
                          router.push(item?.href);
                          if (isSidebarOpen) {
                            handleSideBarOpener();
                          }
                        }
                      }}
                      className={`
                        w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium
                        ${
                          pathName === item.href
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }
                        cursor-pointer
                        transition-colors duration-150
                      `}
                    >
                      <div className="flex items-center">
                        <item.icon
                          className={`h-5 w-5 mr-3 ${
                            pathName === item.href
                              ? "text-white"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>

                      {item?.children && item?.children?.length > 0 && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openMenus[item.label] ? "rotate-180" : ""
                          } ${
                            pathName === item.href
                              ? "text-white"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        />
                      )}
                    </button>
                  </div>

                  {/* Dropdown menu */}
                  {item.children && (
                    <div
                      className={`
                      mt-1 ml-7 pl-3 border-l border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ease-in-out
                      ${
                        openMenus?.[item.label]
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                    >
                      {item.children &&
                        item.children.map((child, childIndex) => (
                          <button
                            key={childIndex}
                            onClick={() => {
                              router.push(child?.href);
                            }}
                            className={`
                            flex items-center py-2 px-3 text-sm rounded-md
                            ${
                              pathName === child?.href
                                ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                                : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                            }
                          `}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></span>
                            {child.label}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center justify-between mb-3">
              <button
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                onClick={handleThemeSwitch}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm font-medium">Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50">
              <button className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                A
              </button>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  admin@example.com
                </p>
              </div>
              <button className="ml-auto p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-200">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
