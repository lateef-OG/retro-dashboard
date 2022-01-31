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
import SideBarItem from "../SideBarItem";

const sidebarLinks = [
  {
    active: true,
    linkText: "Dashbaord",
    icon: faChartLine,
  },
  {
    active: false,
    linkText: "Products",
    icon: faUniversity,
  },
  {
    active: false,
    linkText: "Blog",
    icon: faShoppingCart,
  },
  {
    active: false,
    linkText: "Transactions",
    icon: faCreditCard,
  },
  {
    active: false,
    linkText: "Users",
    icon: faUsers,
  },
  {
    active: false,
    linkText: "Analysis",
    icon: faSignal,
  },
  {
    active: false,
    linkText: "Reports",
    icon: faFlag,
  },
  {
    active: false,
    linkText: "Investment",
    icon: faBriefcase,
  },
  {
    active: false,
    linkText: "Settings",
    icon: faCog,
  },
];

const Sidebar = () => {
  return (
    <>
      <aside className="fixed w-64 max-h-screen overflow-hidden bg-white border-r px-4 py-2 inset-y-0 flex flex-col flex-shrink-0">
        <h1 className="text-5xl font-black text-blue-deep mb-16 font-inter">
          RETRO
        </h1>
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 overflow-hidden">
            {sidebarLinks.map((item, index) => (
              <SideBarItem item={item} key={`${item.linkText}_${index}`} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
