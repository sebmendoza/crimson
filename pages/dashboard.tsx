import React from "react";
import DashNav from "../components/DashNav";
import TimeGraph from "../components/TimeGraph";

function Dashboard() {

  
  return (
    <div>
      {/* Banner */}
      <div className="h-20 bg-gradient-to-r from-crimson-blue via-crimson-d-pink to-crimson-red "></div>
      {/* Nav Bar */}
      <DashNav />
      <div>
        <TimeGraph/>
      </div>
    </div>
  );
}

export default Dashboard;
