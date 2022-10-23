import React, { useEffect, useState } from "react";
import { Chocolate, Browser, Mug, Backpack, Ghost } from "react-kawaii";
import { Doughnut } from "react-chartjs-2";
import {
  child,
  ref,
  onChildAdded,
  DatabaseReference,
  Database,
  get,
  DataSnapshot,
  query,
  orderByChild,
  orderByKey,
  orderByPriority,
  orderByValue,
  limitToLast,
  limitToFirst,
} from "firebase/database";

import { db } from "../backend/firebaseInit";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const actions = {
  hungry: <Chocolate mood="ko" color="EB4747" size={150} />,
  quiet: <Mug mood="happy" color="#A6E191" size={150} />,
  play: <Backpack mood="blissful" color="#FFDEDE" size={150} />,
  sleep: <Ghost mood="happy" color="#E0E4E8" size={150} />,
};

const descriptions = {
  hungry: {
    dial: "hungry",
    phrase: "they are hungry",
  },
  quiet: {
    dial: "quiet",
    phrase: "they want quiet time",
  },
  play: {
    dial: "play",
    phrase: "they want to play",
  },
  sleep: {
    dial: "sleep",
    phrase: "they are sleepy",
  },
  default: {
    dial: null,
    phrase: "",
  },
};

function ActionCard() {
  // Current Action Data Fetching
  // -------------------------------------------------------------------------------------------
  const [action_current_data, setActionCurrentData] = useState<any>({});
  const action_current_reference = query(
    ref(db, "/device/"),
    orderByChild("/action/")
  );

  // useEffect(() => {
  //   onChildAdded(action_current_reference, (action_current_data) => {
  //     setActionCurrentData(action_current_data.val());
  //   });
  // }, []);

  const hasCurrentActionData: boolean = action_current_data?.action
    ? true
    : false;

  const action = hasCurrentActionData
    ? actions[action_current_data?.action as keyof typeof actions]
    : null;
  const { dial, phrase } = hasCurrentActionData
    ? descriptions[action_current_data?.action as keyof typeof descriptions]
    : descriptions.default;

  // console.log({ colour, mood });
  // console.log("Current Action Object:", action_current_data);

  // Day Mood Donut Fetching Data
  // -------------------------------------------------------------------------------------------
  let [actionCount, setActionCount] = useState({
    sleep: 0,
    play: 0,
    quiet: 0,
    hungry: 0,
  });
  const action_day_reference = query(
    ref(db, "/device/"),
    orderByChild("/action/"),
    limitToFirst(100)
  );
  let [actionDonut, setActionDonut] = useState({
    labels: ["Sleep", "Play", "Quiet", "Hungry"],
    datasets: [
      {
        label: "Action Data",
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
      },
    ],
  });

  // useEffect(() => {
  //   get(action_day_reference).then((res) => {
  //     // console.log(res.val());
  //     const array: any[] = Object.values(res.val());

  //     for (let i = 0; i < array.length; i++) {
  //       actionCount[array[i].action as keyof typeof actionCount] += 1;
  //     }

  //     setActionCount(actionCount);
  //   });
  // }, [action_current_data]);

  // useEffect(() => {
  //   let actionDonut = {
  //     labels: ["Sleep", "Play", "Quiet", "Hungry"],
  //     datasets: [
  //       {
  //         label: "Action Data",
  //         data: [10, 6, 8, 5],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //         ],
  //       },
  //     ],
  //   };
  //   setActionDonut(actionDonut);
  // }, [action_current_data]);

  // -------------------------------------------------------------------------------------------
  return (
    <div className=" bg-white shadow-card rounded-2xl ">
      <h3 className="text-xl pl-4 py-4 font-semibold">Recent Actions</h3>

      <div className="flex flex-col md:flex-row pl-6 pb-5 space-x-6">
        <div className="flex flex-col grow items-center pt-6">
          <>
            {hasCurrentActionData ? (
              <p className="pb-2 capitalize">{dial}</p>
            ) : null}
            {hasCurrentActionData ? (
              action
            ) : (
              <Browser mood="ko" color="#808080" size={150} />
            )}
          </>
        </div>
        <div className="pt-5 px-7">
          {hasCurrentActionData ? (
            <>
              {" "}
              <p className="pb-5">
                Your child has interacted with{" "}
                <span className="italic"> {dial}</span> on their crimson crasher
                device.
              </p>
              <p>
                They have communicated that{" "}
                <span className="italic"> {phrase}</span>.
              </p>
            </>
          ) : (
            <p>
              No Data Yet. Come back later.<br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
          )}
        </div>
      </div>

      {/* Today's Records */}
      <div className="flex justify-center">
        <div className="mb-6 mx-5 flex flex-col items-center justify-center">
          <div className="w-64 mb-4">
            <Doughnut data={actionDonut} />
          </div>
          Todays Records
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
