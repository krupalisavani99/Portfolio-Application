import React from "react";
import { GitHubIcon } from "./Icons";

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-black bg-white p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-purple-600 rounded-br-3xl 
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <img src={img} alt={title} className="w-full h-auto" />

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            className="text-lg font-semibold text-purple-600 underline md:text-base"
          >
            Visit
          </a>
          <a href={github} className="w-8 md:w-6">
            {" "}
            <GitHubIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
