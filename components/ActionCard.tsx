import React, { useEffect, useState } from "react";
import { Chocolate, Browser, Mug, Backpack, Ghost } from "react-kawaii";
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
} from "firebase/database";

import { db } from "../backend/firebaseInit";


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

  useEffect(() => {
    onChildAdded(action_current_reference, (action_current_data) => {
      setActionCurrentData(action_current_data.val());
    });
  }, []);

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
  console.log("Current Action Object:", action_current_data?.action);

  // -------------------------------------------------------------------------------------------
  return (
    <div className=" bg-white shadow-card rounded-2xl ">
      <h3 className="text-xl pl-4 py-4 font-semibold">Recent Actions</h3>

      <div className="flex flex-col md:flex-row pl-6 pb-5 space-x-6">
        <div className="flex flex-col grow items-center">
          <>{hasCurrentActionData ? <p className="pb-2 capitalize">{dial}</p> : null}
          {hasCurrentActionData ? 
            action  
           : (
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
            <p>Do not have data.</p>
          )}
        </div>
      </div>

      {/* Today's Records */}
      <div className="flex justify-center">
        <div className="h-64 w-64 mb-6 mx-5 flex flex-col items-center justify-center rounded-full bg-crimson-d-grey text-white">
          Here are the records from today
          <p>Insert Graph Here</p>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
