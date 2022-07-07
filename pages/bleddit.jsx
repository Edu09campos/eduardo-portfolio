import Image from "next/image";
import React from "react";
import bledditImg from "../public/assets/bleddit.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Bleddit = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bledditImg}
          alt="Bleddit Image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bleddit</h2>
          <h3>Next.js / Firebase / Chakra UI</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#635FC7]">Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            This amazing <span className="italic">Next.js</span> Reddit clone
            mimics many of the features one loves about Reddit. Create an
            account (with email+passowrd or a Google account) and navigate all
            the user-created content it has. Create a community for yourself an
            your friends, create posts (with images if you want), vote on your
            favourite posts and comment on them.{" "}
            <span className="italic">Firebase</span> services handles
            authentication and storage. The application was designed using{" "}
            <span className="italic">Chakra UI</span> and coded in{" "}
            <span className="italic">TypeScript</span>.
          </p>
          <a
            href="https://bleddit.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/Edu09campos/bleddit"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-110 ease-in duration-300">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#635FC7]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Chakra UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1.5" /> Recoil
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

export default Bleddit;
