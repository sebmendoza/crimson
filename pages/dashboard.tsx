import React from "react";
import DashNav from "../components/DashNav";

function Dashboard() {
  return (
    <div>
      {/* Banner */}
      <div className="h-20 bg-gradient-to-r from-crimson-blue via-crimson-d-pink to-crimson-red "></div>

      {/* Nav Bar */}
      <DashNav />
    </div>
  );
}

export default Dashboard;
