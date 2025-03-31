import { SideBarItem } from "@/typescripts/interfaces/projects.interfaces";
import {
    BarChart3,
    BookOpen,
    Mail,
    MessageSquare,
    Settings,
    Users,
  } from "lucide-react";
  
  export const sideBarItems: SideBarItem[] = [
    {
      icon: BarChart3,
      label: "Dashboard",
      active: true,
      href: "/dashboard",
      view: "dashboard",
      children: [],
    },
    {
      icon: MessageSquare,
      label: "Conversations",
      active: false,
      href: "#",
      view: "chat",
      children: [],
    },
    {
      icon: Mail,
      label: "Messages",
      active: false,
      href: "/dashboard/messages",
      view: "messages",
      children: [],
    },
    {
      icon: BookOpen,
      label: "Components",
      active: false,
      href: "/dashboard/components",
      view: "components",
      children: [],
    },
    {
      icon: Users,
      label: "Profile",
      active: false,
      href: "/dashboard/profile",
      view: "profile",
      children: [],
    },
    {
      icon: Settings,
      label: "Settings",
      active: false,
      href: "#",
      children: [
        {
          label: "Website Settings",
          href: "/dashboard/web-settings",
          view: "website-settings",
        },
      ],
    },
  ];