import React from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import { GitHubIcon } from "../component/Icons";
import TransitionEffect from "../component/TransitionEffect";

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
      <a
        href="/"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </a>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-purple-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <a href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>{" "}
        </a>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <a href={github} className="w-10">
            {" "}
            <GitHubIcon />
          </a>
          <a
            href={link}
            className="ml-4 rounded-lg bg-purple-600 text-white p-2 px-6 text-lg font-semibold
            dark:bg-white dark:text-black hover:border border-purple-600 hover:bg-white hover:text-purple-600
            sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

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
      <a href="/" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <img src={img} alt={title} className="w-full h-auto" />
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-purple-600 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <a href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>{" "}
        </a>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            className="text-lg font-semibold text-purple-600 underline md:text-base"
          >
            {" "}
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
const Projects = () => {
  return (
    <>
      <head>
        <title> {(document.title = "Projects Page")}</title>
        <meta name="description" content="any description" />
      </head>
      <TransitionEffect />
      <main className="w-full  flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                //   title=" Crypto Screener Application"
                //   summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                // It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                // local currency."
                title="Portfolio Website"
                summary="A feauture-rich Portfolio Website using React, Tailwind CSS, React Router.
                It shows detail regarding mySelf."
                link="/"
                github="/"
                type="Featured Project"
                img={require("../images/Porfolio-web-banner.png")}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Weather Application"
                link="/"
                github="https://github.com/krupalisavani99/live-weather-app"
                type=""
                img={require("../images/Weather-app_cover_img.png")}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {/* <Project
                title="Weather Application"
                link="/"
                github="https://github.com/krupalisavani99/live-weather-app"
                type=""
                img={require("../images/Weather-app_cover_img.png")}
              /> */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
