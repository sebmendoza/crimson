import React, { useEffect, useState } from "react";
import { Planet, Browser } from "react-kawaii";
import { useObject } from "react-firebase-hooks/database";
import {
  child,
  ref,
  onChildAdded,
  DatabaseReference,
  Database,
  get,
  DataSnapshot,
} from "firebase/database";

import { db } from "../backend/firebaseInit";
// import {
//   baseDataPoint,
//   buttonDataPoint,
//   knobDataPoint,
//   dialDataPoint,
//   switchDataPoint,
//   action,
//   emotion,
// } from "../backend/packetStructure";
// import { object } from "prop-types";

const faces = {
  red: {
    colour: "#EB4747",
    mood: "shocked",
  },
  green: {
    colour: "#FCCB7E",
    mood: "ko",
  },
  yellow: {
    colour: "#FFD882",
    mood: "blissful",
  },
  blue: {
    colour: "#ABC9FF",
    mood: "sad",
  },
  default: {
    colour: "#808080",
    mood: "ko",
  },
};

const descriptions = {
  red: {
    button: "red",
    description: "angry",
  },
  green: {
    button: "green",
    description: "bored",
  },
  yellow: {
    button: "yellow",
    description: "happy",
  },
  blue: {
    button: "blue",
    description: "sad",
  },
  default: {
    button: null,
    description: "",
  },
};
function MoodCard() {
  const [data, setData] = useState<any>({});

  const reference = ref(db, "/device/button");

  useEffect(() => {
    onChildAdded(reference, (data) => {
      setData(data.val());
    });
  }, []);

  const hasData: boolean = data?.emotion ? true : false;

  const { colour, mood } = hasData
    ? faces[data?.emotion as keyof typeof faces]
    : faces.default;
  const { button, description } = hasData
    ? descriptions[data?.emotion as keyof typeof descriptions]
    : descriptions.default;

  // console.log({ colour, mood });
  console.log(data.emotion);

  return (
    <div className=" bg-white shadow-[8px_8px_4px_rgba(0,0,0,0.3)] rounded-2xl ">
      <h3 className="text-xl pl-4 py-4">Current Mood</h3>

      <div className="flex flex-col md:flex-row pl-6 pb-5">
        <div className="flex flex-col grow items-center">
          {hasData ? <p className="pb-2">Happy - Lvl 8</p> : null}
          {hasData ? (
            <Planet mood={mood} color={colour} size={150} />
          ) : (
            <Browser mood={mood} color={colour} size={150} />
          )}
        </div>
        <div className="pt-5 px-6">
          {hasData ? (
            <>
              <p className="pb-5">
                Your child has interacted with the
                <span className="underline">{button}</span> on their crimson
                crasher device.
              </p>
              <p>
                This is their way of communicating that they’re currently
                <span className="underline">{description}</span>.
              </p>
            </>
          ) : (
            <p>No Data Yet. Come back later.</p>
          )}
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
