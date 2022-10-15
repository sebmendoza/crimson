import React from "react";
import { ArrowLongRightIcon, FaceSmileIcon } from "@heroicons/react/24/solid";

function TodaysUpdate() {
  return (
    <div>
      {/* Title */}
      <div className="pl-16 pt-20">
        <div className="flex justify-between">
          <h2 className="text-4xl font-semibold ">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Today's Latest Updates
          </h2>
          <button className="flex items-center justify-center bg-crimson-d-grey rounded-full px-10 py-3 text-xl font-bold mr-10 text-white shadow-md hover:shadow-xl  hover:underline hover:underline-offset-4 active:scale-90 transition duration-150 ease-in">
            View Trends and Details <ArrowLongRightIcon className="h-8 pl-3" />
          </button>
        </div>
        <p className="text-xl text-crimson-d-grey pl-2 pt-3">
          Last Input Time: 13:04:22
        </p>
      </div>

      {/* Cards */}
      <div className="bg-red-200">
        <h3>Current Mood</h3>

        <div className="flex flex-col items-center w-24 bg-blue-300">
          <p>Happy - Lvl 8</p>
          <FaceSmileIcon className="h-16" />
        </div>
      </div>
    </div>
  );
}

export default TodaysUpdate;
