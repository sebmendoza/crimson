import React, { useState, useEffect } from "react";
import { ArrowLongRightIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import MoodCard from "./MoodCard";
import ActionCard from "./ActionCard";
import Link from "next/link";
import { Element } from "react-scroll";

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

function TodaysUpdate() {
  const [data, setData] = useState<any>({});
  const reference = ref(db, "/device/");

  useEffect(() => {
    onChildAdded(reference, (data) => {
      setData(data.val());
    });
  }, []);

  // console.log(data);

  return (
    <div className="h-screen">
      {/* Blob #1 */}
      <div className="absolute -z-50 mx-8 hidden sm:inline">
        <svg
          className="w-full "
          // width="644"
          height="620"
          viewBox="0 0 644 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M316.433 1.11304e-06C383.959 0.00850623 440.702 47.3315 494.386 90.427C546.832 132.528 597.506 179.13 620.579 244.153C644.297 310.993 657.481 391.492 623.022 452.939C589.711 512.34 510.637 513.556 452.097 544.59C405.876 569.092 367.734 608.256 316.433 615.47C259.848 623.428 195.91 624.707 151.587 586.851C107.801 549.455 116.356 478.506 92.8917 424.549C64.7606 359.86 -8.74185 310.664 0.858362 240.246C10.4666 169.77 83.6266 132.119 138.45 90.3822C193.159 48.732 248.904 -0.0085044 316.433 1.11304e-06Z"
            fill="#ABC9FF"
          />
        </svg>
      </div>

      {/* Title */}
      <div className="pl-16 pt-20 ">
        <div className="flex flex-col md:flex-row justify-between space-y-2">
          <h2 className="text-4xl font-semibold ">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Element name="update">Today's Latest Updates</Element>
          </h2>
          <button className="flex items-center justify-center bg-crimson-d-grey rounded-full max-w-xs lg:max-w-none font-bold mr-10 text-white shadow-md hover:shadow-xl  hover:underline hover:underline-offset-4 active:scale-90 transition duration-150 ease-in">
            <Link href="/dashboard">
              <a className="flex items-center justify-center rounded-full px-4 py-2 lg:px-10 lg:py-4 text-sm lg:text-xl">
                View Trends and Details
                <ArrowLongRightIcon className="h-8 pl-3" />
              </a>
            </Link>
          </button>
        </div>
        <p className="text-xl text-crimson-d-grey pl-2 pt-3">
          Last Input Time: {data?.time}
        </p>
      </div>
      {/* Blob 2 */}
      <div className="-z-50 absolute right-0 hidden lg:inline">
        <svg
          width="479"
          height="658"
          viewBox="0 0 479 658"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M85.1868 73.8132C137.516 21.4976 218.204 14.2529 293.242 6.0968C366.549 -1.87112 441.976 -4.97333 510.311 27.6054C580.555 61.0944 653.236 113.344 674.217 187.727C694.5 259.631 634.174 321.844 612.896 391.286C596.095 446.113 596.931 506.058 562.779 551.406C525.109 601.426 476.56 651.96 412.841 656.929C349.895 661.837 301.469 600.153 241.418 576.465C169.424 548.065 74.2951 566.842 27.0912 504.761C-20.152 442.628 7.31909 356.724 17.4117 281.858C27.4834 207.147 32.8555 126.131 85.1868 73.8132Z"
            fill="#ABC9FF"
          />
        </svg>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row mx-10 md:mx-20 justify-center gap-x-6 gap-y-6 my-10 pb-10">
        <MoodCard />
        <ActionCard />
      </div>
    </div>
  );
}

export default TodaysUpdate;
