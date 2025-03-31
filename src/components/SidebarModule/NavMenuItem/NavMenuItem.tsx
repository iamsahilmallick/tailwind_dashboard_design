import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

type NavItemChild = {
  label: string;
  href: string;
  view?: string;
  active?: boolean;
};

interface NavMenuItemProps {
  icon: ElementType;
  label: string;
  href: string;
  pathName: string;
  children?: NavItemChild[];
  openMenus: Record<string, boolean>;
  onToggleDropdown: (label: string) => void;
  onNavigate: (href: string) => void;
}

interface NavChildItemProps {
  child: NavItemChild;
  pathName: string;
  onNavigate: (href: string) => void;
}

export const NavMenuItem = ({
  icon: Icon,
  label,
  href,
  pathName,
  children,
  openMenus,
  onToggleDropdown,
  onNavigate,
}: NavMenuItemProps) => {
  const isActive = pathName === href;
  const hasChildren = children && children.length > 0;
  const isOpen = openMenus?.[label];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasChildren) {
      onToggleDropdown(label);
    } else {
      onNavigate(href);
    }
  };

  return (
    <div className="mb-1">
      {/* Parent menu item */}
      <div className="relative">
        <button
          onClick={handleClick}
          className={`
            w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium
            ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }
            cursor-pointer
            transition-colors duration-150
          `}
        >
          <div className="flex items-center">
            <Icon
              className={`h-5 w-5 mr-3 ${
                isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            />
            <span>{label}</span>
          </div>

          {hasChildren && (
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } ${
                isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            />
          )}
        </button>
      </div>

      {/* Dropdown menu */}
      {hasChildren && (
        <div
          className={`
            mt-1 ml-7 pl-3 border-l border-gray-200 dark:border-gray-700 
            overflow-hidden transition-all duration-200 ease-in-out
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {children.map((child) => (
            <NavChildItem
              key={child.href}
              child={child}
              pathName={pathName}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NavChildItem = ({ child, pathName, onNavigate }: NavChildItemProps) => {
  const isActive = pathName === child.href;

  return (
    <button
      onClick={() => onNavigate(child.href)}
      className={`
        flex items-center py-2 px-3 text-sm rounded-md w-full text-left
        ${
          isActive
            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
            : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
        }
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></span>
      {child.label}
    </button>
  );
};
