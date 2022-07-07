import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import logoTransparent from "../public/assets/logo_transparent.png";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center pt-8">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="hidden sm:flex justify-center mt-8">
            <Image
              src={logoTransparent}
              width="200"
              height="200"
              alt="Eduardo Logo"
            />
          </div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Empowering <span className="underline italic">your</span> web &amp;
            mobile identity
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m{" "}
            <span className="text-[#635FC7] underline">Eduardo</span>
          </h1>
          <h1 className="py-1.5 text-gray-700">A Web and Mobile Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Software Developer specializing in building exceptional
            digital experiences on all screens from the frontend all the way to
            the database. I&apos;m always willing to learn new things and eager
            to create something others can enjoy.
          </p>
          <div className="flex item-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/edu09campos/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full text-[#635FC7] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Edu09campos"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full text-[#635FC7] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contacts">
              <div className="rounded-full text-[#635FC7] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full text-[#635FC7] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
