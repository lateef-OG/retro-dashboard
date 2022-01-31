import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

const DashboardLayout = ({ page, children }) => {
  return (
    <div className="max-h-screen flex">
      <Sidebar page={page} />
      <div className="min-h-screen bg-gray-light flex-1 px-8 py-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
