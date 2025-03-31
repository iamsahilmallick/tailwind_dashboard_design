import { mockNotifications } from "@/mockdata/mock-data";
import { BellIcon, DeleteIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NotificationManager = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

  const toggleNotificationMenu = () =>
    setIsNotificationMenuOpen(!isNotificationMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsNotificationMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          onClick={toggleNotificationMenu}
        >
          <BellIcon />
          {mockNotifications.some((notif) => !notif.read) && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </button>

        {isNotificationMenuOpen && (
          <div className="absolute right-0 sm:right-2 mt-2 w-72 sm:w-80 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <div className="p-2 sm:p-3 flex justify-between items-center border-b dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                Notifications
              </h3>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                Read All
              </button>
            </div>
            <div className="max-h-64 sm:max-h-72 overflow-y-auto">
              {mockNotifications.length > 0 ? (
                mockNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-center gap-3 p-2 sm:p-3 text-sm border-b dark:border-gray-700 last:border-0 
                ${notif.read ? "text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200 font-semibold"}`}
                  >
                    <Image
                      src={notif.userImg}
                      alt="User_1"
                      height={50}
                      width={50}
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                    />
                    <div className="flex-1 cursor-pointer">{notif.message}</div>
                    <button className="text-gray-400 hover:text-red-500">
                      <DeleteIcon />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-3">
                  No new notifications
                </p>
              )}
            </div>

            {/* Footer with View All */}
            <div className="p-2 sm:p-3 text-center border-t dark:border-gray-700">
              <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                View All Notifications
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationManager;
