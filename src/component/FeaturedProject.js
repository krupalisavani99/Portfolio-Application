import React from "react";
import { GitHubIcon } from "./Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-black bg-white shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-purple-600 rounded-br-3xl 
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <div className="w-1/2 overflow-hidden rounded-lg lg:w-full">
        <img src={img} alt={title} className="w-full h-auto" />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-purple-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
          {title}
        </h2>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <a href={github} className="w-10">
            <GitHubIcon />
          </a>
          <a
            href={link}
            className="ml-4 rounded-lg bg-purple-600 text-white p-2 px-6 text-lg font-semibold
              dark:bg-white dark:text-black hover:border border-purple-600 hover:bg-white hover:text-purple-600
              sm:px-4 sm:text-base"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
