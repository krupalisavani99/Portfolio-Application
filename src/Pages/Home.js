import React from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import { LinkArrow } from "../component/Icons";
import HireMe from "../component/HireMe";
import ProfilePic from "../images/developer-pic-3.png";
import { Link } from "react-router-dom";
import TransitionEffect from "../component/TransitionEffect";

const Home = () => {
  return (
    <>
      <head>
        <title> {(document.title = "Home Page")}</title>
        <meta name="description" content="any description" />
      </head>
      <TransitionEffect />
      <div className="flex items-center text-black w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <img
                src={ProfilePic}
                alt="banner-img"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a
                  href="/Krupali's Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-purple-600 text-white p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:text-purple-600 hover:bg-white border-2 border-solid border-transparent hover:border-purple-600 md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </a>
                <Link
                  //   href="mailto:krupalisavani9999@gmail.com"
                  to="/contact"
                  className="ml-4 text-lg font-medium capitalize text-black underline dark:text-white md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </div>
    </>
  );
};

export default Home;
