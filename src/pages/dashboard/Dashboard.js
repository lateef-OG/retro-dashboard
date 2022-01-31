import React from "react";
import Header from "../../components/dashboard/Header";
import Metrics from "../../components/dashboard/Metrics";
import Overview from "../../components/dashboard/Overview";
import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout page="Dashboard">
      <Header />
      <Overview />
      <Metrics />
    </DashboardLayout>
  );
};

export default Dashboard;
