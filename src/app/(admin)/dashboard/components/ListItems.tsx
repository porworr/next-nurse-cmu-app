import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

type MenuItems = {
  id: number;
  label: string;
  icon: any;
  href: string;
};

export const MainListItems = () => {
  const pathname = usePathname();

  const menuItems: Array<MenuItems> = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
    {
      id: 2,
      label: "ข้อมูลคณะ",
      icon: <LayersIcon />,
      href: "/dashboard/department",
    },
  ];

  return (
    <>
      {menuItems.map((item: MenuItems) => {
        return (
            <ListItemButton
              key={item.id}
              LinkComponent={NextLink}
              href={item.href}
              // sx={{ backgroundColor: pathname == item.href ? "grey.300": "" }}
              selected={pathname == item.href ? true : false}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
        )
      })}
    </>
  );
};