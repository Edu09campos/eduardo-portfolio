import React from "react";
import moneyCallMobImg from "../public/assets/money_call_mob_pres.png";
import moneyCallImg from "../public/assets/money-call-pres.png";
import bledditImg from "../public/assets/bleddit.png";
import portfolioImg from "../public/assets/portfolio.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#635FC7]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Money Call Mobile App"
            image={moneyCallMobImg}
            alt="Money Call Mobile Image"
            techs="Flutter + SQLite"
            projectURL="/moneycallmob"
          />
          <ProjectItem
            title="Money Call Website"
            image={moneyCallImg}
            alt="Money Call Website Image"
            techs="React.js"
            projectURL="/moneycall"
          />
          <ProjectItem
            title="Bleddit"
            image={bledditImg}
            alt="Bleddit Image"
            techs="Next.js + Firebase"
            projectURL="/bleddit"
          />
          <ProjectItem
            title="Eduardo's portfolio"
            image={portfolioImg}
            alt="Portfolio Image"
            techs="Next.js + Tailwind"
            projectURL="/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
