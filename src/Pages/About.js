import React from "react";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import profilePic from "../images/Profile-pic.png";
import Experience from "../component/Experience";
import TransitionEffect from "../component/TransitionEffect";
import Education from "../component/Education";

const About = () => {
  return (
    <>
      <head>
        <title> {(document.title = "About Page")}</title>
        <meta name="description" content="any description" />
      </head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Journey of Coding Craft" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 ">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I'm Krupali Savani, a front-end web developer and React
                developer with a passion for creating beautiful, functional, and
                user-centered digital experiences. I specialize in building
                dynamic and responsive interfaces using React, with strong
                knowledge of HTML, CSS, JavaScript, Typescript and modern frameworks like
                Next.js. My expertise also extends to designing with Tailwind
                CSS and Bootstrap, and I have experience working with Shopify's
                Storefront API.
              </p>
              <p className="my-4 font-medium">
                {" "}
                I love exploring new technologies and constantly challenge
                myself to grow both personally and professionally. I am seeking
                opportunities to contribute my skills to innovative teams while
                continuing to develop and refine my craft in web development.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black 
            bg-white p-8 xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-purple-600" />
              <img
                src={profilePic}
                alt="profile"
                className="w-full h-auto rounded-2xl "
              />
            </div>
          </div>
        </Layout>
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default About;
