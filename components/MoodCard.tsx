import React, { useEffect, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

import { useObject } from "react-firebase-hooks/database"
import { child, ref, onChildAdded, DatabaseReference, Database, get, DataSnapshot } from "firebase/database";

import db from "../backend/firebaseInit";
import { baseDataPoint, buttonDataPoint, knobDataPoint, dialDataPoint, switchDataPoint, action, emotion } from "../backend/packetStructure";
import { object } from "prop-types";

function MoodCard() {
  const [data, setData] = useState<any>({}); 

  const reference = ref(db, "/device/button");

  useEffect(() => {
    onChildAdded(reference, (data) => {
      setData(data.val());
    });
  },[])

  console.log(data)
  
  return (
    <div className=" bg-white shadow-[8px_8px_4px_rgba(0,0,0,0.3)] rounded-2xl ">
      <h3 className="text-xl pl-4 py-4">Current Mood</h3>

      <div className="flex flex-col md:flex-row pl-6 pb-5">
        <div className="flex flex-col grow items-center">
          <p>Happy - Lvl 8</p>
          <FaceSmileIcon className="h-32" />
        </div>
        <div className="pt-5 px-6">
          <p className="pb-5">
            Your child has interacted with the green button on their crimson
            crasher device.
          </p>
          <p>
            This is their way of communicating that they’re enjoying their day.
          </p>
        </div>
      </div>

      {/* Today's Records */}
      <div className="flex justify-center">
        <div className="h-64 w-64 mb-6 mx-5 flex flex-col items-center justify-center rounded-full bg-crimson-d-grey text-white">
          {data?.emotion}
          Here are the records from today
          <p>Insert Graph Here</p>
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
