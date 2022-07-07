import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-3xl tracking-widest uppercase text-[#635FC7]">
            About
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2 text-gray-600">
            <span className="text-5xl text-[#635FC7] font-bold">I</span>
            &apos;ve always wanted to create something others could enjoy.
            Something{" "}
            <span className="italic text-[#635FC7] font-semibold">new</span>,
            something{" "}
            <span className="italic text-[#635FC7] font-semibold">fun</span>,
            something{" "}
            <span className="italic text-[#635FC7] font-semibold">unique</span>.
            And it is in Software Development that I found this dream of mine
            can come true. There is this unmatched feeling in developing an
            experience from scratch and send it out for the whole{" "}
            <span className="italic text-[#635FC7] font-extrabold">world</span>{" "}
            to see. Web and Mobile Development quickly became two core passions
            of mine. Passions that, though rewarding, force me to never settle,
            never stop learning and always strive for more.
          </p>
          <p className="py-2 text-gray-600">
            My <span className="italic">Master&apos;s Degree</span> in{" "}
            <span className="underline">Computer and Software Engineering</span>{" "}
            gave me the skills and technical know-how to fulfill my dreams, and
            I can&apos;t wait to put them to good use. From the{" "}
            <span className="underline">Frontend</span> to the{" "}
            <span className="underline">Backend</span>,{" "}
            <span className="underline">Mobile</span> and{" "}
            <span className="underline">Web Servers</span>, I am ready and
            willing to do anything. And I will do it{" "}
            <span className="italic font-extrabold text-[#635FC7]">right</span>.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/webworld.jpeg"
            alt="About image"
            width={500}
            height={375}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
