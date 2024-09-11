import React from "react";
import { SKILLS } from "../constants";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";

const Skills = () => {
  return (
    <>
      <Layout className="pt-16 relative">
        <AnimatedText
          text="Knowledge of My Journey"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="flex flex-wrap gap-16 sm:gap-8 w-full">
          {SKILLS.map((skillName, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black border-solid relative rounded-2xl w-[200px] h-[80px] p-5 text-center text-2xl uppercase"
            >
              <div className="absolute top-0 -right-2.5 -z-10 w-[106%] h-[111%] rounded-[2rem] bg-purple-600" />
              <h1>{skillName}</h1>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Skills;
