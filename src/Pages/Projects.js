import React from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import TransitionEffect from "../component/TransitionEffect";
import { PROJECTS_DATA } from "../constants";
import FeaturedProject from "../component/FeaturedProject";
import Project from "../component/Project";

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
            text="Showcase of Digital Craft"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {PROJECTS_DATA.map((project, index) => {
              if (project.featured) {
                return (
                  <div className="col-span-12" key={index}>
                    <FeaturedProject {...project} />
                  </div>
                );
              } else {
                return (
                  <div className="col-span-6 sm:col-span-12" key={index}>
                    <Project {...project} />
                  </div>
                );
              }
            })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
