import Image from "next/image";
import React from "react";

const SkillItem = ({ imageURL, width, height, alt, skillName }) => {
  return (
    <div className="py-2 shadow-xl bg-white rounded-xl hover:scale-110 easi-in duration-300">
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="m-auto">
          <Image alt={alt} src={imageURL} width={width} height={height} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
