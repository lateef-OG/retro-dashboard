import React from "react";
import {
  faChartLine,
  faUniversity,
  faShoppingCart,
  faCreditCard,
  faUsers,
  faSignal,
  faFlag,
  faBriefcase,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import SideBarItem from "./SideBarItem";

const sidebarLinks = [
  {
    linkText: "Dashboard",
    icon: faChartLine,
  },
  {
    linkText: "Products",
    icon: faUniversity,
  },
  {
    linkText: "Blog",
    icon: faShoppingCart,
  },
  {
    linkText: "Transactions",
    icon: faCreditCard,
  },
  {
    linkText: "Users",
    icon: faUsers,
  },
  {
    linkText: "Analysis",
    icon: faSignal,
  },
  {
    linkText: "Reports",
    icon: faFlag,
  },
  {
    linkText: "Investment",
    icon: faBriefcase,
  },
  {
    linkText: "Settings",
    icon: faCog,
  },
];

const Sidebar = ({ page }) => {
  return (
    <>
      <aside className="w-64 bg-white">
        <div className="fixed w-64 max-h-screen px-4 py-2">
          <h1 className="text-5xl font-black text-blue-deep mb-16 font-inter">
            RETRO
          </h1>
          <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
            <ul className="p-2 overflow-hidden">
              {sidebarLinks.map((item, index) => (
                <SideBarItem
                  item={item}
                  active={page === item.linkText}
                  key={`${item.linkText}_${index}`}
                />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
