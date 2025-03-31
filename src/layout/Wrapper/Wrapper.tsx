import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;
  const [isDarkMode] = useState(false);
  return (
    <div
      className={`flex h-screen w-full overflow-hidden ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <DashboardSidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-200 w-full">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
