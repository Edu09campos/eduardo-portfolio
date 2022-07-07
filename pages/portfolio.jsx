import Image from "next/image";
import React from "react";
import portfolioImg from "../public/assets/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Eduardo | Projects</title>
        <meta
          name="description"
          content="I’m a web developer specializing in creating exceptional digital experiences for all screens."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={portfolioImg}
            alt="Bleddit Image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">
              <span className="font-bold text-[#635FC7]">Eduardo&apos;s</span>{" "}
              Portfolio
            </h2>
            <h3>Next.js / Tailwind CSS</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="text-[#635FC7]">Project</p>
            <h2 className="py-2">Overview</h2>
            <p>
              Yes, you read it right! This very portfolio was coded by me. What
              other way is there to have absolute control of how you present
              yourself? Using <span className="italic">Next.js</span> for its
              routing and image lazy-loading capabilities, and styled with the
              powerful <span className="italic">Tailwind CSS</span> framework.
              This beautiful portfolio provides you with eveything you need to
              know about your favourite developer:{" "}
              <span className="font-bold text-[#635FC7] text-lg">
                EDUARDO CAMPOS
              </span>
              .
            </p>
            <div className="flex justify-start items-center">
              <p className="text-gray-900 font-semibold mt-4 mr-8 text-sm md:text-base">
                You are already here!
              </p>
              <a
                href="https://github.com/Edu09campos/eduardo-portfolio"
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
                  <RiRadioButtonFill className="pr-1.5" /> Next.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1.5" /> Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline text-gray-500 cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
