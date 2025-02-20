"use client";

import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome}></MenuItem>
        <MenuItem
          title="About"
          address="/about"
          Icon={BsInfoCircleFill}
        ></MenuItem>
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href={"/"}>
          <span className="text-2xl text-black bg-[#F5C518] py-1 px-2 mr-1 tracking-tighter rounded-md font-extrabold ">
            IMDb
          </span>
          {/* <span className="text-2xl text-black bg-[#F5C518] py-1 px-2 mr-1 tracking-tighter rounded-md font-extrabold ">
            <img src="/images/IMDb_Logo_Rectangle_Gold.png"></img>
          </span> */}
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
