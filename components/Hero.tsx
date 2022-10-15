import React from "react";
import Logo from "./Logo";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="h-screen bg-crimson-blue">
      <div className="pt-5 pl-7 z-50">
        <Logo />
      </div>

      <h1 className="text-5xl text-center font-bold mt-52">
        Welcome to Crimson Crashers
      </h1>

      <div
        className="flex
      justify-center"
      >
        <button className="flex items-center justify-center bg-crimson-d-grey rounded-full px-10 py-3 text-xl font-bold mt-10 text-white shadow-md hover:shadow-xl active:scale-90 transition duration-150 ease-in">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Check out today's updates <ChevronDownIcon className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
