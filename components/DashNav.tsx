import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

function DashNav() {
  return (
    <div className="relative -top-20">
      <div className="flex justify-center md:justify-start md:ml-10 h-full my-10">
        <div className="bg-white shadow-[6px_6px_4px_rgba(0,0,0,0.3)] w-64 rounded-3xl flex flex-col items-center">
          <div className="py-4">
            <Link href="/" className="cursor-pointer">
              <a href="">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="relative h-36 w-36">
            <Image
              layout="fill"
              src="/../public/profile2.jfif"
              className="rounded-full "
              alt="profile photo"
            />
          </div>
          <h2 className="text-xl font-semibold pb-3">Henry Lorens</h2>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
