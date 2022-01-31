import React from "react";
import Header from "../../components/dashboard/Header";
import Metrics from "../../components/dashboard/Metrics";
import Overview from "../../components/dashboard/Overview";
import PolyGraph from "../../components/dashboard/PolyGraph";
import Products from "../../components/dashboard/Products";
import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout page="Dashboard">
      <Header />
      <Overview />
      <Metrics />
      <div class="grid grid-cols-6 gap-8 mb-8">
        <div className="col-span-2">
          <PolyGraph />
        </div>
        <div className="col-span-4">
          <Products />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
