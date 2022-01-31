import React from "react";
import Header from "../../components/dashboard/Header";
import Overview from "../../components/dashboard/Overview";
import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout page="Dashboard">
      <Header />
      <Overview />
    </DashboardLayout>
  );
};

export default Dashboard;
