import React, { useEffect, useState } from "react";
import { Planet, Browser } from "react-kawaii";
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
  startAfter,
  startAt,
  equalTo,
  limitToFirst,
  limitToLast,
} from "firebase/database";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

import { db } from "../backend/firebaseInit";

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
    description: "Angry",
  },
  green: {
    button: "green",
    description: "Bored",
  },
  yellow: {
    button: "yellow",
    description: "Happy",
  },
  blue: {
    button: "blue",
    description: "Sad",
  },
  default: {
    button: null,
    description: "",
  },
};

const intensities = {
  0: 1,
  20: 2,
  40: 3,
  60: 4,
  80: 5,
  default: 5,
};

function MoodCard() {
  // Current Mood Data Fetching
  // -------------------------------------------------------------------------------------------
  const [mood_current_data, setMoodCurrentData] = useState<any>({});
  const mood_current_reference = query(
    ref(db, "/device/"),
    orderByChild("/emotion/")
  );

  useEffect(() => {
    onChildAdded(mood_current_reference, (mood_current_data) => {
      setMoodCurrentData(mood_current_data.val());
    });
  }, []);

  const hasCurrentMoodData: boolean = mood_current_data?.emotion ? true : false;

  const { colour, mood } = hasCurrentMoodData
    ? faces[mood_current_data?.emotion as keyof typeof faces]
    : faces.default;
  const { button, description } = hasCurrentMoodData
    ? descriptions[mood_current_data?.emotion as keyof typeof descriptions]
    : descriptions.default;
  const intensity = hasCurrentMoodData
    ? intensities[mood_current_data?.intensity as keyof typeof intensities]
    : intensities.default;

  console.log("Current Mood Object:", mood_current_data);

  // Day Mood Donut Fetching Data
  // -------------------------------------------------------------------------------------------
  let [colourCount, setColourCount] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });
  const mood_day_reference = query(
    ref(db, "/device/"),
    orderByChild("/emotion/"),
    limitToFirst(100)
  );
  let [moodDonut, setMoodDonut] = useState({
      labels: ["Red", "Blue", "Yellow", "Green"],
      datasets: [
        {
          label: "Mood Data",
          data: [
            1,
            2,
            3,
            4
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
        },
      ],
    }
  )

  useEffect(() => {
    get(mood_day_reference).then((res) => {
      console.log(res.val());
      const array: any[] = Object.values(res.val());

      for (let i = 0; i < array.length; i++) {  
        colourCount[array[i].emotion as keyof typeof colourCount] += 1;
      }

      setColourCount(colourCount);
    });
  }, [mood_current_data]);

  useEffect(() => {
    let moodDonut = {
      labels: ["Red", "Blue", "Yellow", "Green"],
      datasets: [
        {
          label: "Mood Data",
          data: [
            colourCount.red,
            colourCount.blue,
            colourCount.yellow,
            colourCount.green,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
        },
      ],
    };
    setMoodDonut(moodDonut);
  }, [mood_current_data]);

  // -------------------------------------------------------------------------------------------
  return (
    <div className=" bg-white shadow-card rounded-2xl ">
      <h3 className="text-xl pl-4 py-4 font-semibold">Current Mood</h3>

      <div className="flex flex-col md:flex-row pl-6 pb-5 space-x-6">
        <div className="flex flex-col grow items-center pt-6">
          {hasCurrentMoodData ? (
            <p className="pb-2">
              {description} -{" "}
              {intensity in intensities ? intensity : intensities.default}/5
            </p>
          ) : null}
          {hasCurrentMoodData ? (
            <Planet mood={mood} color={colour} size={150} />
          ) : (
            <Browser mood={mood} color={colour} size={150} />
          )}
        </div>
        <div className="pt-5 px-6">
          {hasCurrentMoodData ? (
            <>
              <p className="pb-5">
                Your child has interacted with the
                <span className="italic"> {button}</span> on their crimson
                crasher device.
              </p>
              <p>
                This is their way of communicating that they’re currently
                <span className="italic lowercase"> {description}</span>.
              </p>
            </>
          ) : (
            <p>No Data Yet. Come back later.</p>
          )}
        </div>
      </div>

      {/* Today's Records */}
      <div className="flex justify-center">
        <div className="mb-6 mx-5 flex flex-col items-center justify-center">
          <div className="w-64 mb-4">
            <Doughnut data={moodDonut} />
          </div>
          Todays Records
        </div>
      </div>
    </div>
  );
}

export default MoodCard;
