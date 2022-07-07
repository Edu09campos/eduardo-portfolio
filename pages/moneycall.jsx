import Image from "next/image";
import React from "react";
import moneyCallImg from "../public/assets/money-call-pres.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const MoneyCall = () => {
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
            src={moneyCallImg}
            alt="Money Call Image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Money Call</h2>
            <h3>React.js / Charts.js</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="text-[#635FC7]">Project</p>
            <h2 className="py-2">Overview</h2>
            <p>
              Have you ever thought: where does my money go? This{" "}
              <span className="italic">React.js</span> website lets you keep
              track of your daily expenditures and keep your budget in check.
              Styled with <span className="italic">Material UI</span>, it lets
              you compare you expenses and incomes with beautiful charts
              provided by Google. All data is stored locally in your browser
              and, when you&apos;re done, you can even download it as a{" "}
              <span className="italic">JSON</span> file.
            </p>
            <a
              href="https://money-call-efc.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/Edu09campos/money_call"
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
                  <RiRadioButtonFill className="pr-1.5" /> React.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1.5" /> Charts.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1.5" /> Material UI
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

export default MoneyCall;
