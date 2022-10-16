import React from "react";
import Logo from "./Logo";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="h-screen bg-crimson-white md:bg-transparent relative">
      <div className="pt-5 pl-7 z-50">
        <Logo />
      </div>

      <div className="relative top-1/4 md:top-1/3 ">
        <h1 className="text-5xl text-center font-bold md:text-left md:ml-10">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Welcome to Crimson's Interactive Application
        </h1>

        <div className="flex justify-center md:justify-start">
          <Link to="update">
            <button className="flex items-center justify-center bg-crimson-d-grey rounded-full  px-10 py-3 text-xl font-bold mt-10 text-white shadow-md hover:shadow-xl active:scale-90 transition duration-150 ease-in md:mx-16">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Check out today's updates <ChevronDownIcon className="h-6" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
