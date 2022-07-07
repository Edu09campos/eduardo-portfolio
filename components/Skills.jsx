import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-[#635FC7]">
          Skills
        </p>
        <h2 className="py-4">What I work with</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
          <SkillItem
            imageURL="/../public/assets/flutter.png"
            width="45"
            height="56"
            alt="Flutter Skill"
            skillName="Flutter"
          />
          <SkillItem
            imageURL="/../public/assets/react.png"
            width="60"
            height="52"
            alt="React Skill"
            skillName="React.js"
          />
          <SkillItem
            imageURL="/../public/assets/node.png"
            width="49"
            height="55"
            alt="Node.js Skill"
            skillName="Node.js"
          />
          <SkillItem
            imageURL="/../public/assets/tsjs.png"
            width="60"
            height="54"
            alt="TS/JS Skill"
            skillName="TS/JS"
          />
          <SkillItem
            imageURL="/../public/assets/django.png"
            width="55"
            height="55"
            alt="Django Skill"
            skillName="Django"
          />
          <SkillItem
            imageURL="/../public/assets/postgres.png"
            width="53"
            height="55"
            alt="PostgreSQL Skill"
            skillName="PostgreSQL"
          />
          <SkillItem
            imageURL="/../public/assets/redis.png"
            width="55"
            height="55"
            alt="Redis Skill"
            skillName="Redis"
          />
          <SkillItem
            imageURL="/../public/assets/firebase.png"
            width="55"
            height="55"
            alt="Firebase Skill"
            skillName="Firebase"
          />
          <SkillItem
            imageURL="/../public/assets/graphql.png"
            width="55"
            height="55"
            alt="GraphQL Skill"
            skillName="GraphQL"
          />
          <SkillItem
            imageURL="/../public/assets/docker.webp"
            width="60"
            height="52"
            alt="Docker Skill"
            skillName="Docker"
          />
        </div>
        <div className="py-7 flex justify-center items-center text-2xl font-semibold text-[#635FC7]">
          <p>And more...</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
