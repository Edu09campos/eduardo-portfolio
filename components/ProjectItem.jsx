import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ image, alt, title, techs, projectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#635FC7] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt={alt}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-widest text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2.5 text-white text-center">{techs}</p>
        <Link href={projectURL}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[#C5D7FF]">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
