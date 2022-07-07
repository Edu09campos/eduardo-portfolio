import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Eduardo | Resume</title>
        <meta
          name="description"
          content="I’m a web developer specializing in creating exceptional digital experiences for all screens."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-[#635FC7]">Eduardo Campos</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/edu09campos/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Edu09campos"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href="/resume.pdf" download>
              <AiOutlineDownload
                size={22}
                style={{ marginRight: "1rem", fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Mobile Development <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Full-stack Development
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Mobile Development</p>
            <p className="py-2">Web Development</p>
            <p>Full-stack Development</p>
          </div>
        </div>
        <p>
          I am a Software Developer with robust problem-solving skills and a
          keen interest in developing Web and Mobile-based systems using modern
          tools and technologies. I strive to develop on all screens, and am
          proficient in eveything from the frontend to the conceptualization of
          databases. I am always willing to learn new things and eager to create
          something others can enjoy.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            Flutter
            <span className="px-2">|</span> React.js{" "}
            <span className="px-2">|</span>
            React Native <span className="px-2">|</span>Node.js
            <span className="px-2">|</span>Express.js
            <span className="px-2">|</span> Django
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> SQL NoSQL DBs
            <span className="px-2">|</span> Redis
            <span className="px-2">|</span> Docker
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic uppercase">
              Associação Académica de Cambra
            </span>
            <span className="px-2">|</span>Vale de Cambra, Portugal
          </p>
          <p className="py-1 italic uppercase">
            Associative Manager (2016 - Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Organized multiple municipality and regional-level cultural and
              recreational activities.
            </li>
            <li>Promoted community engagement and volunteer work.</li>
            <li>
              Developed strong leadership and logistics skills, as well as a
              team-oriented mindset.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">INESC TEC</span>
            <span className="px-2">|</span>Porto, Portugal
          </p>
          <p className="py-1 italic">
            Research Assistant (Sept. 2021 - Jul. 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a{" "}
              <span className="underline">
                cross-platform mobile application
              </span>{" "}
              for Parkinson&apos;s Disease symptom monitoring in patients,
              connected to a wearable IMU device via BLE.
            </li>
            <li>
              Developed a <span className="underline">web dashboard</span> for
              remote monitoring of Parkinson&apos;s Disease patients.
            </li>
            <li>
              Developed a fully-fledged web server with custom authentication, a
              custom database, a RESTful API and a focus on data and information
              security.
            </li>
            <li>
              Was involved in several clinical-trials as part of the testing of
              the above-mentioned systems.
            </li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Faculdade de Engenharia da Universidade do Porto
            </span>
            <span className="px-2">|</span>Porto, Portugal
          </p>
          <p className="py-1 italic">
            Master&apos;s degree in Informatics and Computing Engineering (Sept.
            2021 - Jul. 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a keen interest in web development, mobile development
              and databases.
            </li>
            <li>
              Took electives on Database Optimizations, Semantic Web,
              IoT/Cyberphysical Systems, Requirements Engineering and
              Cybersecurity.
            </li>
            <li>
              Developed a Master&apos;s thesis alongside a research grant
              provided by FCT and INESC TEC on a self-quantification web and
              mobile system for Parkinson patients.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
