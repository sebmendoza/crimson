import React from "react";
import DashNav from "../components/DashNav";
import TimeGraph from "../components/TimeGraph";
import BarGraph from "../components/BarGraph";

function Dashboard() {
  return (
    <div className="h-screen ">
      {/* Banner */}
      <div className="h-20 bg-gradient-to-r from-crimson-blue via-crimson-d-pink to-crimson-red "></div>
      {/* Nav Bar */}
      <div className="flex flex-col md:flex-row">
        <DashNav />
        <div className="flex flex-col justify-center grow">
          <div className="shadow-xl max-w-5xl  rounded-3xl  ml-24">
            {/* <TimeGraph /> */}
            <BarGraph />
          </div>
          <div className="shadow-xl max-w-5xl  rounded-3xl  ml-24 ">
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
