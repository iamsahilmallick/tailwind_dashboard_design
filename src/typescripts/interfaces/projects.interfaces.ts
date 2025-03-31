export interface CustomIconProps {
    IconColor?: string;
    IconWidth?: string;
    IconHeight?: string;
  }
  
  export type NavItemChild = {
    label: string;
    href: string;
    view?: string;
    active?: boolean;
  };
  
  export type SideBarItem = {
    icon: React.ElementType;
    label: string;
    active: boolean;
    href: string;
    view?: string;
    children?: NavItemChild[];
  };