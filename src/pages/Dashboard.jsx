import React from "react";
import Calender from "../components/Calender";
import DashboardCards from "../components/DashboardCards";
import { images } from "../utils/constant";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full px-7 gap-7 ">
      <div className="flex justify-between items-center w-full  ">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <div>Hi, Samantha. Welcome back to Sedap Admin!</div>
        </div>
        <Calender />
      </div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap gap-4 ">
        <DashboardCards
          image={images.totalOrder}
          title="Total Orders"
          count="75"
          percent="4"
          stock={true}
        />
        <DashboardCards
          image={images.totalDelivered}
          title="Total Deliverd"
          count="357"
          percent="4"
          stock={true}
        />
        <DashboardCards
          image={images.totalCancelled}
          title="Total Cancelled"
          count="65"
          percent="12"
          stock={false}
        />
        <DashboardCards
          image={images.totalRevenue}
          title="Total Revenue"
          count="$128"
          percent="12"
          stock={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
