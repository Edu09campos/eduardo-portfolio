import React from "react";
import SkillItem from "./SkillItem";
import flutter from "../public/assets/flutter.png";
import react from "../public/assets/react.png";
import reactnative from "../public/assets/reactnative.png";
import node from "../public/assets/node.png";
import tsjs from "../public/assets/tsjs.png";
import htmlcss from "../public/assets/htmlcss.png";
import django from "../public/assets/django.png";
import postgres from "../public/assets/postgres.png";
import redis from "../public/assets/redis.png";
import firebase from "../public/assets/firebase.png";
import graphql from "../public/assets/graphql.png";
import docker from "../public/assets/docker.webp";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-[#635FC7]">
          Skills
        </p>
        <h2 className="py-4">What I work with</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillItem
            imageURL={flutter}
            width="45"
            height="56"
            alt="Flutter Skill"
            skillName="Flutter"
          />
          <SkillItem
            imageURL={react}
            width="60"
            height="52"
            alt="React Skill"
            skillName="React.js"
          />
          <SkillItem
            imageURL={reactnative}
            width="93"
            height="62"
            alt="React Native Skill"
            skillName="React Native"
          />
          <SkillItem
            imageURL={node}
            width="49"
            height="55"
            alt="Node.js Skill"
            skillName="Node.js"
          />
          <SkillItem
            imageURL={tsjs}
            width="60"
            height="54"
            alt="TS/JS Skill"
            skillName="TS/JS"
          />
          <SkillItem
            imageURL={htmlcss}
            width="75"
            height="55"
            alt="TS/JS Skill"
            skillName="HTML+CSS"
          />
          <SkillItem
            imageURL={django}
            width="55"
            height="55"
            alt="Django Skill"
            skillName="Django"
          />
          <SkillItem
            imageURL={postgres}
            width="53"
            height="55"
            alt="PostgreSQL Skill"
            skillName="PostgreSQL"
          />
          <SkillItem
            imageURL={redis}
            width="55"
            height="55"
            alt="Redis Skill"
            skillName="Redis"
          />
          <SkillItem
            imageURL={firebase}
            width="55"
            height="55"
            alt="Firebase Skill"
            skillName="Firebase"
          />
          <SkillItem
            imageURL={graphql}
            width="55"
            height="55"
            alt="GraphQL Skill"
            skillName="GraphQL"
          />
          <SkillItem
            imageURL={docker}
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
