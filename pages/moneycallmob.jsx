import Image from "next/image";
import React from "react";
import moneyCallMobImg from "../public/assets/money_call_mob_pres.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const MoneyCallMob = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={moneyCallMobImg}
          alt="Money Call Mobile Image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Money Call Mobile App</h2>
          <h3>Flutter / SQLite / Provider</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#635FC7]">Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Have you ever thought: where does my money go? This{" "}
            <span className="italic">cross-platform Flutter</span> application
            was built has an attempt to turn mobile a previous project of mine:
            Money Call. This app lets you keep track of your daily expenditures
            and keep your budget in check for up to a year. All data is stored
            locally in a SQLite database. The app lets you{" "}
            <span className="italic">customize</span> language, light/dark
            themes and even currency!
          </p>
          <div className="flex justify-start items-center">
            <p className="text-gray-900 font-semibold mt-4 mr-8 text-sm md:text-base">
              Demo not available at this time
            </p>
            <a
              href="https://github.com/Edu09campos/money_call_mobile"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-300">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#635FC7]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Flutter
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> SQLite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Provider
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline text-gray-500 cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default MoneyCallMob;
